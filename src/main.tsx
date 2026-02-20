import React from 'react';
import ReactDOM from 'react-dom/client';
import { ExportPanel } from './components/ExportPanel';
import type { AssetInfo } from './types/export';

const assetInfo: AssetInfo = {
  duration: '0:30',
  aspectRatio: '16:9',
  framerate: '29.97 fps',
};

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <div
      style={{
        minHeight: '100vh',
        background: '#DCDCDC',
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'center',
        padding: '40px',
      }}
    >
      <ExportPanel
        assetInfo={assetInfo}
        onExportComplete={(fileUrls) => {
          console.log('Export complete:', fileUrls);
        }}
        onExportError={(error) => {
          console.error('Export error:', error);
        }}
      />
    </div>
  </React.StrictMode>
);
