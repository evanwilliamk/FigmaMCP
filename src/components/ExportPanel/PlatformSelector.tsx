import React from 'react';
import type { PlatformId } from '@/types/export';
import { PLATFORMS, PLATFORM_ORDER } from '@/data/platforms';
import { PlatformRow_S2 } from './PlatformRow_S2';

export interface PlatformSelectorProps {
  selectedPlatforms: Set<PlatformId>;
  expandedPlatforms: Set<PlatformId>;
  onTogglePlatform: (platformId: PlatformId) => void;
  onToggleExpand: (platformId: PlatformId) => void;
  disabled?: boolean;
}

/**
 * Platform selection component
 * Displays list of available CTV platforms with specs
 */
export function PlatformSelector({
  selectedPlatforms,
  expandedPlatforms,
  onTogglePlatform,
  onToggleExpand,
  disabled = false,
}: PlatformSelectorProps) {
  const selectedCount = selectedPlatforms.size;

  return (
    <div className="platform-selector">
      <div className="platform-selector__header">
        <span className="platform-selector__label">Platform(s)</span>
        <span
          className={`platform-selector__count ${selectedCount === 0 ? 'hidden' : ''}`}
          aria-live="polite"
          aria-atomic="true"
        >
          ({selectedCount} selected)
        </span>
      </div>

      <div
        className="platform-selector__list"
        role="group"
        aria-label="Platform selection"
      >
        {PLATFORM_ORDER.map((platformId) => {
          const platform = PLATFORMS[platformId];
          return (
            <PlatformRow_S2
              key={platformId}
              platform={platform}
              isSelected={selectedPlatforms.has(platformId)}
              isExpanded={expandedPlatforms.has(platformId)}
              onToggleSelect={() => onTogglePlatform(platformId)}
              onToggleExpand={() => onToggleExpand(platformId)}
              disabled={disabled}
            />
          );
        })}
      </div>
    </div>
  );
}
