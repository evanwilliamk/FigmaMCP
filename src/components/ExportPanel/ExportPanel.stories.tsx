import type { Meta, StoryObj } from '@storybook/react';
import { ExportPanel } from './ExportPanel';
import type { AssetInfo } from '@/types/export';

const meta = {
  title: 'CTV/ExportPanel',
  component: ExportPanel,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Multi-platform export panel for CTV advertising content. Allows users to select target platforms, view compliance specifications, and export assets with Content Credentials.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    assetInfo: {
      description: 'Video asset metadata',
    },
    onExportComplete: {
      description: 'Callback fired when export completes successfully',
      action: 'exportComplete',
    },
    onExportError: {
      description: 'Callback fired when export fails',
      action: 'exportError',
    },
  },
} satisfies Meta<typeof ExportPanel>;

export default meta;
type Story = StoryObj<typeof meta>;

const defaultAssetInfo: AssetInfo = {
  duration: '0:30',
  aspectRatio: '16:9',
  framerate: '29.97 fps',
};

/**
 * Default state - no platforms selected
 */
export const Default: Story = {
  args: {
    assetInfo: defaultAssetInfo,
  },
};

/**
 * With longer video duration
 */
export const LongFormContent: Story = {
  args: {
    assetInfo: {
      duration: '2:30',
      aspectRatio: '16:9',
      framerate: '29.97 fps',
    },
  },
};

/**
 * With 4K resolution
 */
export const FourKAsset: Story = {
  args: {
    assetInfo: {
      duration: '0:30',
      aspectRatio: '16:9',
      framerate: '60 fps',
    },
  },
};

/**
 * With callbacks configured
 */
export const WithCallbacks: Story = {
  args: {
    assetInfo: defaultAssetInfo,
    onExportComplete: (fileUrls: string[]) => {
      console.log('Export complete:', fileUrls);
    },
    onExportError: (error: string) => {
      console.error('Export error:', error);
    },
  },
};
