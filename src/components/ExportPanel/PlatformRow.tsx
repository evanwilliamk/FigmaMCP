import React, { useCallback } from 'react';
import type { Platform } from '@/types/export';

export interface PlatformRowProps {
  platform: Platform;
  isSelected: boolean;
  isExpanded: boolean;
  onToggleSelect: () => void;
  onToggleExpand: () => void;
  disabled?: boolean;
}

/**
 * Individual platform row with checkbox, logo, and expandable specs
 */
export function PlatformRow({
  platform,
  isSelected,
  isExpanded,
  onToggleSelect,
  onToggleExpand,
  disabled = false,
}: PlatformRowProps) {
  const handleClick = useCallback(
    (e: React.MouseEvent) => {
      if (disabled) return;

      const target = e.target as HTMLElement;
      const clickedCheckbox =
        target.closest('.platform-row__checkbox') ||
        target.closest('.platform-row__logo');

      if (!isSelected) {
        // Unselected → select (don't expand)
        onToggleSelect();
      } else {
        if (clickedCheckbox) {
          // Clicking checkbox when selected → deselect
          onToggleSelect();
        } else {
          // Clicking row when selected → toggle expand
          onToggleExpand();
        }
      }
    },
    [isSelected, onToggleSelect, onToggleExpand, disabled]
  );

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (disabled) return;

      if (e.key === ' ' || e.key === 'Enter') {
        e.preventDefault();
        onToggleSelect();
      }
    },
    [onToggleSelect, disabled]
  );

  const rowClasses = [
    'platform-row',
    isSelected && 'platform-row--selected',
    isExpanded && 'platform-row--expanded',
    disabled && 'platform-row--disabled',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div
      className={rowClasses}
      role="checkbox"
      aria-checked={isSelected}
      aria-expanded={isSelected ? isExpanded : undefined}
      aria-label={platform.name}
      tabIndex={disabled ? -1 : 0}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
    >
      <div className="platform-row__header">
        {/* Checkbox */}
        <div className="platform-row__checkbox" aria-hidden="true">
          {isSelected && (
            <svg
              width="10"
              height="10"
              viewBox="0 0 10 10"
              fill="none"
              className="platform-row__checkmark"
            >
              <path
                d="M2 5l2.5 2.5L8 2.5"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          )}
        </div>

        {/* Logo */}
        <div
          className="platform-row__logo"
          style={{ backgroundColor: platform.logoUrl ? 'transparent' : platform.logoColor }}
        >
          {platform.logoUrl ? (
            <img
              src={platform.logoUrl}
              alt={`${platform.name} logo`}
              className="platform-row__logo-image"
              style={{ width: '40px', height: '40px', objectFit: 'cover', display: 'block' }}
            />
          ) : (
            <span className="platform-row__logo-text">{platform.logoText}</span>
          )}
        </div>

        {/* Name */}
        <span className="platform-row__name">{platform.name}</span>

        {/* Chevron (only when selected) */}
        {isSelected && (
          <svg
            className="platform-row__chevron"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M6 9l6 6 6-6"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
      </div>

      {/* Expandable specs */}
      {isSelected && isExpanded && (
        <div className="platform-row__specs" aria-hidden="false">
          <div className="platform-row__spec">
            <span className="platform-row__spec-label">Format</span>
            <span className="platform-row__spec-value">
              {platform.specs.format.replace('_', ' (').replace('4', '.264')}
              {platform.specs.format.includes('H26') && ')'}
            </span>
          </div>
          <div className="platform-row__spec">
            <span className="platform-row__spec-label">Resolution</span>
            <span className="platform-row__spec-value">
              {platform.specs.resolution}
            </span>
          </div>
          <div className="platform-row__spec">
            <span className="platform-row__spec-label">Duration</span>
            <span className="platform-row__spec-value">
              {platform.specs.duration}
            </span>
          </div>
          <div className="platform-row__spec">
            <span className="platform-row__spec-label">Max file size</span>
            <span className="platform-row__spec-value">
              {platform.specs.maxFileSize}
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
