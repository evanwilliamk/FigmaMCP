import React from 'react';
import Clock from '@spectrum-icons/workflow/Clock';
import VideoFilled from '@spectrum-icons/workflow/VideoFilled';
import type { AssetInfo } from '@/types/export';

export interface AssetInfoBarProps {
  assetInfo: AssetInfo;
}

/**
 * Asset information display bar
 */
export function AssetInfoBar({ assetInfo }: AssetInfoBarProps) {
  return (
    <div className="asset-info-bar" role="region" aria-label="Asset information">
      <div className="asset-info-bar__item">
        <Clock size="XS" UNSAFE_className="asset-info-bar__icon" />
        <span>{assetInfo.duration}</span>
      </div>

      <div className="asset-info-bar__divider" aria-hidden="true" />

      <div className="asset-info-bar__item">
        <VideoFilled size="XS" UNSAFE_className="asset-info-bar__icon" />
        <span>{assetInfo.aspectRatio}</span>
      </div>

      <div className="asset-info-bar__divider" aria-hidden="true" />

      <div className="asset-info-bar__item">
        <span>{assetInfo.framerate}</span>
      </div>
    </div>
  );
}
