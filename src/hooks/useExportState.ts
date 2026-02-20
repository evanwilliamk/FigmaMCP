import { useState, useCallback } from 'react';
import type { PlatformId, ExportPhase, ExportState } from '@/types/export';

/**
 * Custom hook for managing export panel state
 * Handles platform selection, expansion, and export flow
 */
export function useExportState() {
  const [state, setState] = useState<ExportState>({
    selectedPlatforms: new Set(),
    expandedPlatforms: new Set(),
    phase: 'idle',
    progress: 0,
  });

  const togglePlatform = useCallback((platformId: PlatformId) => {
    setState((prev) => {
      const newSelected = new Set(prev.selectedPlatforms);
      const newExpanded = new Set(prev.expandedPlatforms);

      if (newSelected.has(platformId)) {
        // Deselecting - remove from both sets
        newSelected.delete(platformId);
        newExpanded.delete(platformId);
      } else {
        // Selecting - add to selected, do NOT auto-expand
        newSelected.add(platformId);
      }

      return {
        ...prev,
        selectedPlatforms: newSelected,
        expandedPlatforms: newExpanded,
      };
    });
  }, []);

  const toggleExpand = useCallback((platformId: PlatformId) => {
    setState((prev) => {
      // Only allow expand/collapse if platform is selected
      if (!prev.selectedPlatforms.has(platformId)) {
        return prev;
      }

      const newExpanded = new Set(prev.expandedPlatforms);
      if (newExpanded.has(platformId)) {
        newExpanded.delete(platformId);
      } else {
        newExpanded.add(platformId);
      }

      return {
        ...prev,
        expandedPlatforms: newExpanded,
      };
    });
  }, []);

  const setPhase = useCallback((phase: ExportPhase) => {
    setState((prev) => ({ ...prev, phase }));
  }, []);

  const setProgress = useCallback((progress: number, currentPlatform?: PlatformId) => {
    setState((prev) => ({ ...prev, progress, currentPlatform }));
  }, []);

  const setError = useCallback((errorMessage: string) => {
    setState((prev) => ({
      ...prev,
      phase: 'error',
      errorMessage,
    }));
  }, []);

  const reset = useCallback(() => {
    setState((prev) => ({
      ...prev,
      phase: 'idle',
      progress: 0,
      currentPlatform: undefined,
      errorMessage: undefined,
    }));
  }, []);

  return {
    state,
    togglePlatform,
    toggleExpand,
    setPhase,
    setProgress,
    setError,
    reset,
  };
}
