# CTV Export Panel

Multi-platform export interface for Adobe GenStudio CTV advertising content.

![Version](https://img.shields.io/badge/version-1.0.0-blue)
![React](https://img.shields.io/badge/React-18.2-61dafb)
![TypeScript](https://img.shields.io/badge/TypeScript-5.2-3178c6)
![WCAG](https://img.shields.io/badge/WCAG-2.1%20AA-green)

## Overview

Production-ready React component for exporting video assets to multiple Connected TV platforms (Roku, Hulu, Amazon Fire TV, Apple TV+, Peacock, Samsung Ads, The Roku Channel) with platform-specific compliance validation.

### Key Features

- ✅ **Multi-platform Selection**: Export to 7+ CTV platforms simultaneously
- ✅ **Compliance Validation**: Platform-specific format, resolution, and file size checks
- ✅ **Accessibility First**: WCAG 2.1 AA compliant with full keyboard navigation
- ✅ **Adobe Spectrum**: Integrated with Adobe's design system
- ✅ **Type-Safe**: Full TypeScript support with comprehensive type definitions
- ✅ **Tested**: Unit tests with React Testing Library
- ✅ **Documented**: Storybook stories for all component states

## Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Launch Storybook
npm run storybook
```

## Usage

```tsx
import { ExportPanel } from '@adobe/genstudio-ctv-export';

function App() {
  return (
    <ExportPanel
      assetInfo={{
        duration: '0:30',
        aspectRatio: '16:9',
        framerate: '29.97 fps',
      }}
      onExportComplete={(fileUrls) => {
        console.log('Exported:', fileUrls);
      }}
      onExportError={(error) => {
        console.error('Export failed:', error);
      }}
    />
  );
}
```

## Documentation

- **Engineering Handoff**: See [ENGINEERING_HANDOFF.md](./ENGINEERING_HANDOFF.md) for complete integration guide
- **Original Prototype**: `export-variations/prototype.html` (interactive HTML prototype)
- **Accessibility Spec**: `export-variations/spec.html` (detailed state & ARIA documentation)
- **Storybook**: Run `npm run storybook` for interactive component explorer

## Project Structure

```
├── src/
│   ├── components/ExportPanel/   # React components
│   ├── hooks/                    # Custom React hooks
│   ├── types/                    # TypeScript definitions
│   ├── data/                     # Platform specifications
│   └── test/                     # Test utilities
├── export-variations/            # Original HTML prototypes
├── .storybook/                   # Storybook configuration
└── ENGINEERING_HANDOFF.md        # Integration documentation
```

## Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start Vite development server |
| `npm run build` | Build for production |
| `npm test` | Run unit tests |
| `npm test:ui` | Run tests in UI mode |
| `npm test:coverage` | Generate coverage report |
| `npm run storybook` | Launch Storybook |
| `npm run type-check` | Run TypeScript compiler check |
| `npm run lint` | Run ESLint |

## Technology Stack

- **Framework**: React 18.2
- **Language**: TypeScript 5.2
- **Build Tool**: Vite 5
- **Design System**: Adobe React Spectrum 3.34
- **Testing**: Vitest + React Testing Library
- **Documentation**: Storybook 7.6
- **Styling**: CSS with Spectrum tokens

## Browser Support

- Chrome/Edge: last 2 versions
- Firefox: last 2 versions
- Safari: last 2 versions
- iOS Safari: last 2 versions

## Accessibility

Fully WCAG 2.1 AA compliant:
- ✅ Keyboard navigation (Tab, Enter, Space)
- ✅ Screen reader support (ARIA labels, live regions)
- ✅ Focus management and visible focus indicators
- ✅ Color contrast ratios meet AA standards
- ✅ `prefers-reduced-motion` support
- ✅ Semantic HTML structure

## Contributing

1. Follow existing code style and patterns
2. Add tests for new features
3. Update Storybook stories
4. Ensure TypeScript types are complete
5. Run `npm test` and `npm run type-check` before committing

## License

Copyright © 2026 Adobe Inc. All rights reserved.

## Support

For questions or issues:
1. Check [ENGINEERING_HANDOFF.md](./ENGINEERING_HANDOFF.md)
2. Review Storybook examples
3. Contact the GenStudio team

---

**Status**: ✅ Production Ready
**Version**: 1.0.0
**Release**: H1 2026
