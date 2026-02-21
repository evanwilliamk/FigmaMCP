import React from 'react';
import { Checkbox } from '@adobe/react-spectrum';
import ChevronDown from '@spectrum-icons/workflow/ChevronDown';
import type { Platform } from '@/types/export';
import './PlatformRow_S2.css';

export interface PlatformRowProps {
  platform: Platform;
  isSelected: boolean;
  isExpanded: boolean;
  onToggleSelect: () => void;
  onToggleExpand: () => void;
  disabled?: boolean;
}

/**
 * Platform row using Spectrum 2 components
 */
export function PlatformRow_S2({
  platform,
  isSelected,
  isExpanded,
  onToggleSelect,
  onToggleExpand,
  disabled = false,
}: PlatformRowProps) {
  const handleRowClick = (e: React.MouseEvent) => {
    // If clicking the checkbox area, let it handle the event
    const target = e.target as HTMLElement;
    if (target.closest('[role="checkbox"]')) {
      return;
    }

    // If selected, toggle expansion; if not selected, select it
    if (isSelected) {
      onToggleExpand();
    } else {
      onToggleSelect();
    }
  };

  return (
    <div
      className={`platform-row-s2 ${isSelected ? 'platform-row-s2--selected' : ''} ${
        isExpanded ? 'platform-row-s2--expanded' : ''
      }`}
      onClick={handleRowClick}
    >
      <div className="platform-row-s2__header">
        <Checkbox
          isSelected={isSelected}
          onChange={onToggleSelect}
          isDisabled={disabled}
          aria-label={platform.name}
        />

        <div
          className="platform-row-s2__logo"
          style={{ backgroundColor: platform.logoUrl ? 'transparent' : platform.logoColor }}
        >
          {platform.logoUrl ? (
            <img
              src={platform.logoUrl}
              alt={`${platform.name} logo`}
              className="platform-row-s2__logo-image"
              style={{ width: '40px', height: '40px', objectFit: 'cover', display: 'block' }}
            />
          ) : (
            <span className="platform-row-s2__logo-text">
              {platform.logoText}
            </span>
          )}
        </div>

        <span className="platform-row-s2__name">{platform.name}</span>

        {isSelected && (
          <ChevronDown
            size="S"
            UNSAFE_className={`platform-row-s2__chevron ${
              isExpanded ? 'platform-row-s2__chevron--rotated' : ''
            }`}
          />
        )}
      </div>

      {isSelected && isExpanded && (
        <div className="platform-row-s2__specs">
          <div className="spec-row">
            <span className="spec-label">Format</span>
            <span className="spec-value">
              {platform.specs.format.replace('_', ' (').replace('H26', 'H.26')}
              {platform.specs.format.includes('H26') && ')'}
            </span>
          </div>
          <div className="spec-row">
            <span className="spec-label">Resolution</span>
            <span className="spec-value">{platform.specs.resolution}</span>
          </div>
          <div className="spec-row">
            <span className="spec-label">Duration</span>
            <span className="spec-value">{platform.specs.duration}</span>
          </div>
          <div className="spec-row">
            <span className="spec-label">Max file size</span>
            <span className="spec-value">{platform.specs.maxFileSize}</span>
          </div>
        </div>
      )}
    </div>
  );
}
