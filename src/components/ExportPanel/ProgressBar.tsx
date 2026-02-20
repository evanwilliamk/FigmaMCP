import React from 'react';
import type { PlatformId } from '@/types/export';
import { PLATFORMS } from '@/data/platforms';

export interface ProgressBarProps {
  progress: number;
  currentPlatform?: PlatformId;
}

/**
 * Progress bar for export operation
 */
export function ProgressBar({ progress, currentPlatform }: ProgressBarProps) {
  const platformName = currentPlatform
    ? PLATFORMS[currentPlatform].name
    : 'platform';

  return (
    <div
      className="progress-bar"
      role="progressbar"
      aria-valuenow={Math.round(progress)}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-label="Export progress"
    >
      <div className="progress-bar__label">
        <span className="progress-bar__text">
          Exporting for {platformName}…
        </span>
        <span className="progress-bar__percentage">{Math.round(progress)}%</span>
      </div>
      <div className="progress-bar__track">
        <div
          className="progress-bar__fill"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
}
