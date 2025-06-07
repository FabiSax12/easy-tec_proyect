import { useEffect } from 'react';

export const TourStyles = () => {
  useEffect(() => {
    // Inject custom CSS for tours
    const style = document.createElement('style');
    style.textContent = `
      .auto-schedule-tour-popover {
        max-width: 400px !important;
      }

      .auto-schedule-tour-popover .driver-popover-title {
        font-size: 1.125rem !important;
        font-weight: 600 !important;
        color: #1f2937 !important;
        margin-bottom: 0.75rem !important;
      }

      .auto-schedule-tour-popover .driver-popover-description {
        font-size: 0.875rem !important;
        line-height: 1.5 !important;
        color: #374151 !important;
      }

      .tour-content {
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      }

      .tour-content p {
        margin-bottom: 0.5rem;
      }

      .tour-content ol, .tour-content ul {
        margin: 0.5rem 0;
        padding-left: 1rem;
      }

      .tour-content li {
        margin-bottom: 0.25rem;
      }

      .driver-popover-footer {
        border-top: 1px solid #e5e7eb;
        padding-top: 0.75rem;
        margin-top: 0.75rem;
      }

      .driver-popover-next-btn {
        background: #3b82f6 !important;
        color: white !important;
        border: none !important;
        padding: 0.5rem 1rem !important;
        border-radius: 0.375rem !important;
        font-weight: 500 !important;
      }

      .driver-popover-prev-btn {
        background: #6b7280 !important;
        color: white !important;
        border: none !important;
        padding: 0.5rem 1rem !important;
        border-radius: 0.375rem !important;
        font-weight: 500 !important;
      }

      .driver-popover-close-btn {
        background: #ef4444 !important;
        color: white !important;
        border: none !important;
        padding: 0.25rem 0.5rem !important;
        border-radius: 0.25rem !important;
        font-size: 0.75rem !important;
      }

      .driver-overlay {
        background: rgba(0, 0, 0, 0.5) !important;
      }

      .driver-highlighted-element {
        box-shadow: 0 0 0 4px #3b82f6, 0 0 0 8px rgba(59, 130, 246, 0.3) !important;
        border-radius: 8px !important;
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return null;
};