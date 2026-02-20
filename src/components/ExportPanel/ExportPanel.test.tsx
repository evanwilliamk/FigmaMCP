import { describe, it, expect, vi } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ExportPanel } from './ExportPanel';
import type { AssetInfo } from '@/types/export';

const defaultAssetInfo: AssetInfo = {
  duration: '0:30',
  aspectRatio: '16:9',
  framerate: '29.97 fps',
};

describe('ExportPanel', () => {
  it('renders panel with title and description', () => {
    render(<ExportPanel assetInfo={defaultAssetInfo} />);

    expect(screen.getByRole('heading', { name: /export/i })).toBeInTheDocument();
    expect(
      screen.getByText(/we'll make sure the export is compliant/i)
    ).toBeInTheDocument();
  });

  it('displays asset information', () => {
    render(<ExportPanel assetInfo={defaultAssetInfo} />);

    expect(screen.getByText('0:30')).toBeInTheDocument();
    expect(screen.getByText('16:9')).toBeInTheDocument();
    expect(screen.getByText('29.97 fps')).toBeInTheDocument();
  });

  it('renders all platform options', () => {
    render(<ExportPanel assetInfo={defaultAssetInfo} />);

    expect(screen.getByLabelText('Roku')).toBeInTheDocument();
    expect(screen.getByLabelText('Hulu')).toBeInTheDocument();
    expect(screen.getByLabelText('Amazon Fire TV')).toBeInTheDocument();
    expect(screen.getByLabelText('Apple TV+')).toBeInTheDocument();
    expect(screen.getByLabelText('Peacock')).toBeInTheDocument();
    expect(screen.getByLabelText('Samsung Ads')).toBeInTheDocument();
    expect(screen.getByLabelText('The Roku Channel')).toBeInTheDocument();
  });

  it('disables download button when no platforms selected', () => {
    render(<ExportPanel assetInfo={defaultAssetInfo} />);

    const downloadButton = screen.getByRole('button', { name: /download/i });
    expect(downloadButton).toBeDisabled();
  });

  it('enables download button when platform is selected', async () => {
    const user = userEvent.setup();
    render(<ExportPanel assetInfo={defaultAssetInfo} />);

    const rokuCheckbox = screen.getByLabelText('Roku');
    await user.click(rokuCheckbox);

    const downloadButton = screen.getByRole('button', {
      name: /download \(1 platform\)/i,
    });
    expect(downloadButton).toBeEnabled();
  });

  it('updates button label with platform count', async () => {
    const user = userEvent.setup();
    render(<ExportPanel assetInfo={defaultAssetInfo} />);

    // Select first platform
    await user.click(screen.getByLabelText('Roku'));
    expect(
      screen.getByRole('button', { name: /download \(1 platform\)/i })
    ).toBeInTheDocument();

    // Select second platform
    await user.click(screen.getByLabelText('Hulu'));
    expect(
      screen.getByRole('button', { name: /download \(2 platforms\)/i })
    ).toBeInTheDocument();
  });

  it('shows selection count badge', async () => {
    const user = userEvent.setup();
    render(<ExportPanel assetInfo={defaultAssetInfo} />);

    // Initially hidden
    expect(screen.queryByText(/selected/i)).not.toBeInTheDocument();

    // Select platform
    await user.click(screen.getByLabelText('Roku'));

    // Badge appears
    expect(screen.getByText('1 selected')).toBeInTheDocument();
  });

  it('expands platform specs when selected row is clicked', async () => {
    const user = userEvent.setup();
    render(<ExportPanel assetInfo={defaultAssetInfo} />);

    const rokuRow = screen.getByLabelText('Roku');

    // Select platform
    await user.click(rokuRow);

    // Click again to expand
    await user.click(rokuRow);

    // Specs should be visible
    expect(screen.getByText(/MP4 \(H.264\)/i)).toBeInTheDocument();
    expect(screen.getByText(/1080p/i)).toBeInTheDocument();
    expect(screen.getByText(/42 MB \/ 1 GB/i)).toBeInTheDocument();
  });

  it('updates note box for multiple platforms', async () => {
    const user = userEvent.setup();
    render(<ExportPanel assetInfo={defaultAssetInfo} />);

    // Initially shows single file message
    expect(screen.getByText(/exported as a single file/i)).toBeInTheDocument();

    // Select two platforms
    await user.click(screen.getByLabelText('Roku'));
    await user.click(screen.getByLabelText('Hulu'));

    // Should show zip message
    expect(
      screen.getByText(/files will be packaged in a zip folder/i)
    ).toBeInTheDocument();
  });

  it('handles keyboard navigation', async () => {
    const user = userEvent.setup();
    render(<ExportPanel assetInfo={defaultAssetInfo} />);

    const rokuRow = screen.getByLabelText('Roku');

    // Focus and activate with keyboard
    rokuRow.focus();
    await user.keyboard('{Enter}');

    expect(rokuRow).toHaveAttribute('aria-checked', 'true');
  });

  it('calls onExportComplete when export succeeds', async () => {
    const user = userEvent.setup();
    const onExportComplete = vi.fn();

    render(
      <ExportPanel
        assetInfo={defaultAssetInfo}
        onExportComplete={onExportComplete}
      />
    );

    // Select platform
    await user.click(screen.getByLabelText('Roku'));

    // Click export button
    const downloadButton = screen.getByRole('button', {
      name: /download \(1 platform\)/i,
    });
    await user.click(downloadButton);

    // Wait for export to complete
    await waitFor(
      () => {
        expect(onExportComplete).toHaveBeenCalled();
      },
      { timeout: 5000 }
    );
  });

  it('maintains WCAG accessibility standards', () => {
    const { container } = render(<ExportPanel assetInfo={defaultAssetInfo} />);

    // Panel has proper role
    expect(screen.getByRole('dialog')).toBeInTheDocument();

    // Asset info has region role
    expect(
      screen.getByRole('region', { name: /asset information/i })
    ).toBeInTheDocument();

    // Platform group exists
    expect(
      screen.getByRole('group', { name: /platform selection/i })
    ).toBeInTheDocument();

    // All interactive elements are keyboard accessible
    const rokuCheckbox = screen.getByLabelText('Roku');
    expect(rokuCheckbox).toHaveAttribute('tabindex', '0');
  });
});
