import React from 'react';

export interface NoteBoxProps {
  selectedCount: number;
}

/**
 * Note box with export information
 */
export function NoteBox({ selectedCount }: NoteBoxProps) {
  return (
    <div className="note-box" role="note">
      <div className="note-box__header">
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          aria-hidden="true"
        >
          <circle
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="1.8"
          />
          <path
            d="M12 11v5M12 8h.01"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
        <span>Note</span>
      </div>
      <ul className="note-box__list">
        {selectedCount > 1 ? (
          <li>Files will be packaged in a zip folder.</li>
        ) : (
          <li>Exported as a single file.</li>
        )}
        <li>
          Content Credentials will be applied to all exports. Contact your admin
          to learn more about automated signing.
        </li>
      </ul>
    </div>
  );
}
