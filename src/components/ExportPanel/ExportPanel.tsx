import React, { useCallback } from 'react';
import { Provider, defaultTheme } from '@adobe/react-spectrum';
import Close from '@spectrum-icons/workflow/Close';
import { PlatformSelector } from './PlatformSelector';
import { ExportButton } from './ExportButton';
import { ProgressBar } from './ProgressBar';
import { NoteBox } from './NoteBox';
import { AssetInfoBar } from './AssetInfoBar';
import { useExportState } from '@/hooks/useExportState';
import { useExport } from '@/hooks/useExport';
import type { AssetInfo } from '@/types/export';
import './ExportPanel.css';

export interface ExportPanelProps {
  assetInfo: AssetInfo;
  onExportComplete?: (fileUrls: string[]) => void;
  onExportError?: (error: string) => void;
}

/**
 * CTV Export Panel
 * Main component for multi-platform export interface
 */
export function ExportPanel({
  assetInfo,
  onExportComplete,
  onExportError,
}: ExportPanelProps) {
  const {
    state,
    togglePlatform,
    toggleExpand,
    setPhase,
    setProgress,
    setError,
    reset,
  } = useExportState();

  const { exportAsset } = useExport();

  const handleExport = useCallback(async () => {
    if (state.selectedPlatforms.size === 0 || state.phase !== 'idle') {
      return;
    }

    setPhase('loading');

    try {
      const results = await exportAsset(
        {
          platforms: Array.from(state.selectedPlatforms),
          includeContentCredentials: true,
        },
        (progress, currentPlatform) => {
          setProgress(progress, currentPlatform);
        }
      );

      // Check if all exports succeeded
      const allSucceeded = results.every((r) => r.success);

      if (allSucceeded) {
        setPhase('success');
        const fileUrls = results
          .map((r) => r.fileUrl)
          .filter((url): url is string => url !== undefined);
        onExportComplete?.(fileUrls);
      } else {
        const errorMessages = results
          .filter((r) => !r.success)
          .map((r) => r.error)
          .join(', ');
        setError(errorMessages || 'Export failed');
        onExportError?.(errorMessages);
      }
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : 'Unknown error occurred';
      setError(errorMessage);
      onExportError?.(errorMessage);
    }
  }, [
    state.selectedPlatforms,
    state.phase,
    exportAsset,
    setPhase,
    setProgress,
    setError,
    onExportComplete,
    onExportError,
  ]);

  const handleRetry = useCallback(() => {
    reset();
    handleExport();
  }, [reset, handleExport]);

  return (
    <Provider theme={defaultTheme} colorScheme="light">
      <div
        className="export-panel"
        role="dialog"
        aria-modal="false"
        aria-labelledby="panel-title"
      >
        {/* Close button */}
        <button
          className="export-panel__close"
          aria-label="Close"
          type="button"
        >
          <Close size="S" />
        </button>

        {/* Header */}
        <div className="panel-header">
          <h2 id="panel-title">Export</h2>
          <p>We'll make sure the export is compliant to the platform you select.</p>
        </div>

        {/* Asset Info */}
        <AssetInfoBar assetInfo={assetInfo} />

        {/* Platform Selection */}
        <PlatformSelector
          selectedPlatforms={state.selectedPlatforms}
          expandedPlatforms={state.expandedPlatforms}
          onTogglePlatform={togglePlatform}
          onToggleExpand={toggleExpand}
          disabled={state.phase === 'loading'}
        />

        {/* Progress Bar */}
        {state.phase === 'loading' && (
          <ProgressBar
            progress={state.progress}
            currentPlatform={state.currentPlatform}
          />
        )}

        {/* Note Box */}
        <NoteBox selectedCount={state.selectedPlatforms.size} />

        {/* Export Button */}
        <ExportButton
          selectedCount={state.selectedPlatforms.size}
          phase={state.phase}
          errorMessage={state.errorMessage}
          onExport={handleExport}
          onRetry={handleRetry}
        />
      </div>
    </Provider>
  );
}
