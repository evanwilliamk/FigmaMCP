import React from 'react';
import type { ExportPhase } from '@/types/export';

export interface ExportButtonProps {
  selectedCount: number;
  phase: ExportPhase;
  errorMessage?: string;
  onExport: () => void;
  onRetry: () => void;
}

/**
 * Export button with loading, success, and error states
 */
export function ExportButton({
  selectedCount,
  phase,
  errorMessage,
  onExport,
  onRetry,
}: ExportButtonProps) {
  const isDisabled = selectedCount === 0 || phase === 'loading' || phase === 'success';

  const getButtonLabel = () => {
    if (phase === 'loading') {
      return (
        <>
          <div className="export-button__spinner" aria-hidden="true" />
          <span>Exporting…</span>
        </>
      );
    }

    if (phase === 'success') {
      return (
        <>
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M5 12l5 5L20 7"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span>Export complete</span>
        </>
      );
    }

    if (phase === 'error') {
      return (
        <>
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden="true"
          >
            <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
            <path
              d="M12 9v4M12 16h.01"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
          <span>Export failed — Try again</span>
        </>
      );
    }

    if (selectedCount === 0) {
      return 'Download';
    }

    if (selectedCount === 1) {
      return 'Download (1 platform)';
    }

    return `Download (${selectedCount} platforms)`;
  };

  const buttonClasses = [
    'export-button',
    phase === 'loading' && 'export-button--loading',
    phase === 'success' && 'export-button--success',
    phase === 'error' && 'export-button--error',
  ]
    .filter(Boolean)
    .join(' ');

  const handleClick = () => {
    if (phase === 'error') {
      onRetry();
    } else {
      onExport();
    }
  };

  return (
    <button
      className={buttonClasses}
      disabled={isDisabled}
      aria-disabled={isDisabled}
      onClick={handleClick}
      type="button"
    >
      {getButtonLabel()}
    </button>
  );
}
