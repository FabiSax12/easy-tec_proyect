import { useCallback, useEffect, useRef } from 'react';
import { driver, DriveStep } from 'driver.js';
import 'driver.js/dist/driver.css';
import { useTourProgress } from './useTourProgress';
import {
  welcomeTourSteps,
  studentIdTourSteps,
  courseSelectionTourSteps,
  campusConfigTourSteps,
  generateSchedulesTourSteps,
  schedulesGeneratedTourSteps
} from '../data/tour-steps';

export const useAutoTours = () => {
  const { progress, updateProgress, shouldShowTour, resetProgress } = useTourProgress();
  const driverRef = useRef<ReturnType<typeof driver> | null>(null);

  // Initialize driver with custom styles
  const initializeDriver = useCallback(() => {
    if (driverRef.current) {
      driverRef.current.destroy();
    }

    driverRef.current = driver({
      showProgress: true,
      animate: true,
      smoothScroll: true,
      allowClose: true,
      overlayClickNext: false,
      stagePadding: 8,
      stageRadius: 8,
      showButtons: ['next', 'previous', 'close'],
      disableActiveInteraction: false,
      popoverClass: 'auto-schedule-tour-popover',
      progressText: 'Paso {{current}} de {{total}}',
      nextBtnText: '➡️ Siguiente',
      prevBtnText: '⬅️ Anterior',
      doneBtnText: '🎉 ¡Entendido!',
      closeBtnText: '✖️',
    });

    return driverRef.current;
  }, []);

  // Convert our steps to driver steps
  const convertToDriverSteps = useCallback((steps: any[]): DriveStep[] => {
    return steps.map(step => ({
      element: step.element,
      popover: {
        ...step.popover,
        description: `<div class="tour-content">${step.popover.description}</div>`,
      },
    }));
  }, []);

  // Welcome tour
  const startWelcomeTour = useCallback(() => {
    if (!shouldShowTour('welcome')) return;

    const driverInstance = initializeDriver();
    driverInstance.setConfig({
      steps: convertToDriverSteps(welcomeTourSteps),
      onDestroyed: () => updateProgress('welcome', true),
    });
    driverInstance.drive();
  }, [shouldShowTour, updateProgress, initializeDriver, convertToDriverSteps]);

  // Student ID tour
  const startStudentIdTour = useCallback(() => {
    if (!shouldShowTour('studentIdEntered')) return;

    const driverInstance = initializeDriver();
    driverInstance.setConfig({
      steps: convertToDriverSteps(studentIdTourSteps),
      onDestroyed: () => updateProgress('studentIdEntered', true),
    });
    driverInstance.drive();
  }, [shouldShowTour, updateProgress, initializeDriver, convertToDriverSteps]);

  // Course selection tour
  const startCourseSelectionTour = useCallback(() => {
    if (!shouldShowTour('coursesLoaded')) return;

    // Wait for DOM to update
    setTimeout(() => {
      const driverInstance = initializeDriver();
      driverInstance.setConfig({
        steps: convertToDriverSteps(courseSelectionTourSteps),
        onDestroyed: () => updateProgress('coursesLoaded', true),
      });
      driverInstance.drive();
    }, 500);
  }, [shouldShowTour, updateProgress, initializeDriver, convertToDriverSteps]);

  // Campus config tour
  const startCampusConfigTour = useCallback(() => {
    if (!shouldShowTour('firstCourseSelected')) return;

    setTimeout(() => {
      const driverInstance = initializeDriver();
      driverInstance.setConfig({
        steps: convertToDriverSteps(campusConfigTourSteps),
        onDestroyed: () => updateProgress('firstCourseSelected', true),
      });
      driverInstance.drive();
    }, 300);
  }, [shouldShowTour, updateProgress, initializeDriver, convertToDriverSteps]);

  // Generate schedules tour
  const startGenerateSchedulesTour = useCallback(() => {
    if (!shouldShowTour('campusConfigured')) return;

    setTimeout(() => {
      const driverInstance = initializeDriver();
      driverInstance.setConfig({
        steps: convertToDriverSteps(generateSchedulesTourSteps),
        onDestroyed: () => updateProgress('campusConfigured', true),
      });
      driverInstance.drive();
    }, 300);
  }, [shouldShowTour, updateProgress, initializeDriver, convertToDriverSteps]);

  // Schedules generated tour
  const startSchedulesGeneratedTour = useCallback(() => {
    if (!shouldShowTour('schedulesGenerated')) return;

    setTimeout(() => {
      const driverInstance = initializeDriver();
      driverInstance.setConfig({
        steps: convertToDriverSteps(schedulesGeneratedTourSteps),
        onDestroyed: () => {
          updateProgress('schedulesGenerated', true);
          updateProgress('completed', true);
        },
      });
      driverInstance.drive();
    }, 1000);
  }, [shouldShowTour, updateProgress, initializeDriver, convertToDriverSteps]);

  // Manual tour restart
  const restartTour = useCallback(() => {
    resetProgress();
    setTimeout(() => {
      startWelcomeTour();
    }, 100);
  }, [resetProgress, startWelcomeTour]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (driverRef.current) {
        driverRef.current.destroy();
      }
    };
  }, []);

  return {
    progress,
    startWelcomeTour,
    startStudentIdTour,
    startCourseSelectionTour,
    startCampusConfigTour,
    startGenerateSchedulesTour,
    startSchedulesGeneratedTour,
    restartTour,
    shouldShowTour,
  };
};