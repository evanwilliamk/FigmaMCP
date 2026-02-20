import { useCallback } from 'react';
import type { PlatformId, ExportOptions, ExportResult } from '@/types/export';
import { PLATFORMS } from '@/data/platforms';

/**
 * Mock export service hook
 * In production, this would call actual export APIs
 */
export function useExport() {
  const exportAsset = useCallback(
    async (
      options: ExportOptions,
      onProgress?: (progress: number, currentPlatform: PlatformId) => void
    ): Promise<ExportResult[]> => {
      const results: ExportResult[] = [];
      const totalPlatforms = options.platforms.length;

      for (let i = 0; i < totalPlatforms; i++) {
        const platformId = options.platforms[i];
        const platform = PLATFORMS[platformId];

        // Simulate progress updates
        if (onProgress) {
          const baseProgress = (i / totalPlatforms) * 100;

          // Simulate incremental progress for current platform
          for (let p = 0; p < 100; p += Math.random() * 20 + 5) {
            const progress = baseProgress + (p / 100) * (100 / totalPlatforms);
            onProgress(Math.min(progress, 97), platformId);
            await new Promise((resolve) => setTimeout(resolve, 100));
          }
        }

        // Simulate export for this platform
        await new Promise((resolve) => setTimeout(resolve, 500));

        // 10% chance of failure for demo purposes
        const success = Math.random() > 0.1;

        results.push({
          success,
          platformId,
          fileUrl: success
            ? `https://export.adobe.com/ctv/${platformId}_export_${Date.now()}.mp4`
            : undefined,
          error: success ? undefined : `Export failed for ${platform.name}`,
        });
      }

      // Final progress update
      if (onProgress) {
        onProgress(100, options.platforms[totalPlatforms - 1]);
      }

      return results;
    },
    []
  );

  return { exportAsset };
}
