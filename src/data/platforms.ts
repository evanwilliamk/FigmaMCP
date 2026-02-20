import type { Platform, PlatformId } from '@/types/export';

/**
 * Platform specifications for CTV exports
 * Based on current platform requirements as of H1 2026
 */
export const PLATFORMS: Record<PlatformId, Platform> = {
  roku: {
    id: 'roku',
    name: 'Roku',
    logoColor: '#6B2D8B',
    logoText: 'ROKU',
    specs: {
      format: 'MP4_H264',
      resolution: '1080p',
      duration: '0:30 — accepted',
      maxFileSize: '42 MB / 1 GB',
      maxFileSizeBytes: 42 * 1024 * 1024,
    },
  },
  hulu: {
    id: 'hulu',
    name: 'Hulu',
    logoColor: '#1CE783',
    logoText: 'hulu',
    specs: {
      format: 'MP4_H264',
      resolution: '1080p',
      duration: '0:30 — accepted',
      maxFileSize: '142 MB / 200 MB',
      maxFileSizeBytes: 142 * 1024 * 1024,
    },
  },
  amazon: {
    id: 'amazon',
    name: 'Amazon Fire TV',
    logoColor: '#FF9900',
    logoText: 'fire\ntv',
    specs: {
      format: 'MP4_H264',
      resolution: '1080p',
      duration: '0:30 — accepted',
      maxFileSize: '500 MB / 2 GB',
      maxFileSizeBytes: 500 * 1024 * 1024,
    },
  },
  appletv: {
    id: 'appletv',
    name: 'Apple TV+',
    logoColor: '#000000',
    logoText: 'tv\n+',
    specs: {
      format: 'MP4_H264',
      resolution: '1080p',
      duration: '0:30 — accepted',
      maxFileSize: '100 MB / 1 GB',
      maxFileSizeBytes: 100 * 1024 * 1024,
    },
  },
  peacock: {
    id: 'peacock',
    name: 'Peacock',
    logoColor: '#000000',
    logoText: 'P',
    specs: {
      format: 'MP4_H264',
      resolution: '1080p',
      duration: '0:30 — accepted',
      maxFileSize: '200 MB / 1 GB',
      maxFileSizeBytes: 200 * 1024 * 1024,
    },
  },
  samsung: {
    id: 'samsung',
    name: 'Samsung Ads',
    logoColor: '#000000',
    logoText: 'SAMSUNG\nads',
    specs: {
      format: 'MP4_H264',
      resolution: '1080p',
      duration: '0:30 — accepted',
      maxFileSize: '150 MB / 500 MB',
      maxFileSizeBytes: 150 * 1024 * 1024,
    },
  },
  'roku-channel': {
    id: 'roku-channel',
    name: 'The Roku Channel',
    logoColor: '#4F1182',
    logoText: 'RC',
    specs: {
      format: 'MP4_H264',
      resolution: '1080p',
      duration: '0:30 — accepted',
      maxFileSize: '300 MB / 1 GB',
      maxFileSizeBytes: 300 * 1024 * 1024,
    },
  },
};

export const PLATFORM_ORDER: PlatformId[] = [
  'roku',
  'hulu',
  'amazon',
  'appletv',
  'peacock',
  'samsung',
  'roku-channel',
];
