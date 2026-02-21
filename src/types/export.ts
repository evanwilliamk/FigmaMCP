/**
 * CTV Export Panel - Type Definitions
 * Adobe GenStudio · CTV Ads · Export Feature
 */

export type PlatformId =
  | 'roku'
  | 'hulu'
  | 'amazon'
  | 'appletv'
  | 'peacock'
  | 'samsung'
  | 'roku-channel';

export type ExportPhase = 'idle' | 'loading' | 'success' | 'error';

export type FileFormat = 'MP4_H264' | 'MP4_H265' | 'MOV' | 'WEBM';

export type Resolution = '720p' | '1080p' | '4K';

export interface PlatformSpec {
  format: FileFormat;
  resolution: Resolution;
  duration: string;
  maxFileSize: string;
  maxFileSizeBytes: number;
}

export interface Platform {
  id: PlatformId;
  name: string;
  logoColor: string;
  logoText: string;
  logoUrl?: string;
  specs: PlatformSpec;
}

export interface AssetInfo {
  duration: string;
  aspectRatio: string;
  framerate: string;
  estimatedSize?: number;
}

export interface ExportState {
  selectedPlatforms: Set<PlatformId>;
  expandedPlatforms: Set<PlatformId>;
  phase: ExportPhase;
  progress: number;
  currentPlatform?: PlatformId;
  errorMessage?: string;
}

export interface ExportResult {
  success: boolean;
  platformId: PlatformId;
  fileUrl?: string;
  error?: string;
}

export interface ExportOptions {
  platforms: PlatformId[];
  format?: FileFormat;
  resolution?: Resolution;
  includeContentCredentials?: boolean;
}
