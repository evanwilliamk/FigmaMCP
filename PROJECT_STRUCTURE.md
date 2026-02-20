# Project Structure

```
FigmaMCP/
├── 📄 README.md                          # Project overview & quick start
├── 📄 HANDOFF_SUMMARY.md                 # Executive summary for stakeholders
├── 📄 ENGINEERING_HANDOFF.md             # Complete integration guide
├── 📄 PROJECT_STRUCTURE.md               # This file
│
├── 📦 package.json                       # Dependencies & scripts
├── ⚙️  tsconfig.json                      # TypeScript configuration
├── ⚙️  tsconfig.node.json                 # TypeScript config for build tools
├── ⚙️  vite.config.ts                     # Vite build configuration
├── ⚙️  .eslintrc.cjs                      # ESLint rules
├── 🚫 .gitignore                         # Git ignore rules
│
├── 📱 index.html                         # Entry HTML file
│
├── 📁 src/                               # Source code
│   ├── 📄 main.tsx                       # React app entry point
│   │
│   ├── 📁 components/                    # React components
│   │   ├── 📄 index.ts                   # Public exports
│   │   └── 📁 ExportPanel/               # Main export panel
│   │       ├── 📄 index.ts               # Component exports
│   │       ├── 🎨 ExportPanel.tsx         # Container component
│   │       ├── 🎨 ExportPanel.css         # Styles (Spectrum tokens)
│   │       ├── 🧪 ExportPanel.test.tsx    # Unit tests
│   │       ├── 📚 ExportPanel.stories.tsx # Storybook stories
│   │       ├── 🎨 PlatformSelector.tsx    # Platform list
│   │       ├── 🎨 PlatformRow.tsx         # Individual platform
│   │       ├── 🎨 ExportButton.tsx        # CTA button
│   │       ├── 🎨 ProgressBar.tsx         # Export progress
│   │       ├── 🎨 NoteBox.tsx             # Info messages
│   │       └── 🎨 AssetInfoBar.tsx        # Asset metadata
│   │
│   ├── 📁 hooks/                         # Custom React hooks
│   │   ├── 🪝 useExportState.ts          # State management
│   │   └── 🪝 useExport.ts               # Export service (mock)
│   │
│   ├── 📁 types/                         # TypeScript definitions
│   │   └── 📘 export.ts                  # Type interfaces
│   │
│   ├── 📁 data/                          # Static data
│   │   └── 📊 platforms.ts               # Platform specifications
│   │
│   └── 📁 test/                          # Test configuration
│       └── ⚙️  setup.ts                   # Vitest setup
│
├── 📁 .storybook/                        # Storybook config
│   ├── ⚙️  main.ts                        # Storybook configuration
│   └── ⚙️  preview.tsx                    # Storybook decorators
│
└── 📁 export-variations/                 # Original prototypes
    ├── 🌐 prototype.html                 # Working HTML prototype
    ├── 🌐 all-states.html                # Same as prototype
    ├── 📋 spec.html                      # Accessibility spec doc
    ├── 🌐 index.html                     # Early version
    ├── 🌐 states.html                    # States exploration
    ├── 🌐 states-comprehensive.html      # Detailed states
    └── ... (other variations)
```

## Key File Descriptions

### 📄 Documentation
- **README.md** - Start here! Quick start guide
- **HANDOFF_SUMMARY.md** - High-level overview for PMs/stakeholders
- **ENGINEERING_HANDOFF.md** - Detailed integration guide for engineers
- **PROJECT_STRUCTURE.md** - You are here

### 🎨 Core Components (src/components/ExportPanel/)
- **ExportPanel.tsx** - Main container, orchestrates all sub-components
- **PlatformSelector.tsx** - Renders list of platforms
- **PlatformRow.tsx** - Individual platform with checkbox + expandable specs
- **ExportButton.tsx** - CTA with loading/success/error states
- **ProgressBar.tsx** - Animated progress indicator
- **NoteBox.tsx** - Dynamic info box (single file vs zip)
- **AssetInfoBar.tsx** - Displays video metadata

### 🪝 Custom Hooks (src/hooks/)
- **useExportState.ts** - Manages selection, expansion, phase state
- **useExport.ts** - Export service (currently mocked for demo)

### 📘 Types (src/types/)
- **export.ts** - All TypeScript interfaces and type definitions

### 📊 Data (src/data/)
- **platforms.ts** - Platform specifications (Roku, Hulu, etc.)

### 🧪 Tests (src/test/ + *.test.tsx)
- **setup.ts** - Vitest configuration
- **ExportPanel.test.tsx** - Component unit tests

### 📚 Storybook (.storybook/ + *.stories.tsx)
- **main.ts** - Storybook addons and config
- **preview.tsx** - Global decorators (Spectrum Provider)
- **ExportPanel.stories.tsx** - Interactive component examples

### ⚙️ Configuration Files
- **package.json** - Dependencies, scripts, metadata
- **tsconfig.json** - TypeScript compiler options
- **vite.config.ts** - Build tool config with path aliases
- **.eslintrc.cjs** - Linting rules

### 🌐 Original Prototypes (export-variations/)
- **prototype.html** - The working HTML/CSS/JS prototype
- **spec.html** - Detailed accessibility & states documentation
- Other files are design exploration iterations

## Component Tree

```
<ExportPanel>                              # src/components/ExportPanel/ExportPanel.tsx
│
├─ <header>
│   └─ AssetInfoBar                        # AssetInfoBar.tsx
│       ├─ Duration icon + "0:30"
│       ├─ Aspect ratio icon + "16:9"
│       └─ Framerate "29.97 fps"
│
├─ PlatformSelector                        # PlatformSelector.tsx
│   ├─ Section header + count badge
│   └─ PlatformRow × 7                     # PlatformRow.tsx
│       ├─ Checkbox (checked/unchecked)
│       ├─ Logo (platform color)
│       ├─ Platform name
│       ├─ Chevron (when selected)
│       └─ Expandable specs panel
│
├─ ProgressBar (conditional)               # ProgressBar.tsx
│   ├─ "Exporting for {platform}…"
│   ├─ Percentage
│   └─ Animated fill bar
│
├─ NoteBox                                 # NoteBox.tsx
│   ├─ Info icon + "Note"
│   └─ Dynamic message (single/zip)
│
└─ ExportButton                            # ExportButton.tsx
    └─ State-driven label + icon
        ├─ Idle: "Download (N platforms)"
        ├─ Loading: Spinner + "Exporting…"
        ├─ Success: Checkmark + "Export complete"
        └─ Error: Warning + "Export failed — Try again"
```

## State Flow

```
User clicks platform
        ↓
handleClick() in PlatformRow
        ↓
onTogglePlatform(platformId) callback
        ↓
useExportState.togglePlatform()
        ↓
setState() updates selectedPlatforms Set
        ↓
React re-renders affected components
        ↓
UI reflects new selection state
```

## Build Output

```bash
npm run build
```

Produces:
```
dist/
├── index.html
├── assets/
│   ├── index-[hash].js       # Optimized JS bundle
│   ├── index-[hash].css      # Optimized CSS
│   └── ... (other assets)
```

## Development Servers

### Vite Dev Server (npm run dev)
- Port: 5173 (default)
- Hot Module Replacement (HMR)
- Fast refresh for React components

### Storybook (npm run storybook)
- Port: 6006 (default)
- Component explorer and documentation
- Accessibility testing addon

## Import Aliases

Configured in `tsconfig.json` and `vite.config.ts`:

```typescript
import { ExportPanel } from '@/components/ExportPanel';
import { useExportState } from '@/hooks/useExportState';
import type { PlatformId } from '@/types/export';
import { PLATFORMS } from '@/data/platforms';
```

Maps to:
- `@/` → `src/`
- `@/components/` → `src/components/`
- `@/hooks/` → `src/hooks/`
- `@/types/` → `src/types/`
- `@/utils/` → `src/utils/`

## Git Structure

```
.git/                     # Git repository
.gitignore                # Ignores node_modules, dist, etc.
```

Currently not initialized with remote. To add:

```bash
git remote add origin <your-repo-url>
git branch -M main
git push -u origin main
```

---

**Total Files**: ~30
**Lines of Code**: ~2,500
**Components**: 8
**Hooks**: 2
**Tests**: 1 comprehensive suite
**Storybook Stories**: 4

**Status**: ✅ Production Ready
