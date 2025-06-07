import { useState, useCallback } from 'react';
import { INITIAL_TOUR_PROGRESS, TOUR_STORAGE_KEY } from '../constants/tour-constants';
import { TourProgress } from '../types/tour-types';

export const useTourProgress = () => {
  const [progress, setProgress] = useState<TourProgress>(() => {
    try {
      const stored = localStorage.getItem(TOUR_STORAGE_KEY);
      return stored ? JSON.parse(stored) : INITIAL_TOUR_PROGRESS;
    } catch {
      return INITIAL_TOUR_PROGRESS;
    }
  });

  const updateProgress = useCallback((key: keyof TourProgress, value: boolean) => {
    setProgress(prev => {
      const updated = { ...prev, [key]: value };
      localStorage.setItem(TOUR_STORAGE_KEY, JSON.stringify(updated));
      return updated;
    });
  }, []);

  const resetProgress = useCallback(() => {
    setProgress(INITIAL_TOUR_PROGRESS);
    localStorage.setItem(TOUR_STORAGE_KEY, JSON.stringify(INITIAL_TOUR_PROGRESS));
  }, []);

  const shouldShowTour = useCallback((tourKey: keyof TourProgress): boolean => {
    return !progress[tourKey];
  }, [progress]);

  return {
    progress,
    updateProgress,
    resetProgress,
    shouldShowTour,
  };
};