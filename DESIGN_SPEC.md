# CTV Export Panel - Design Specification

## Overview
This document provides detailed design specifications, measurements (redlines), and accessibility guidelines (bluelines) for the CTV Export Panel prototype.

---

## 1. Layout & Structure

### Container
- **Width**: 420px
- **Background**: `#FFFFFF` (white)
- **Padding**: 24px all sides
- **Border-radius**: 12px
- **Box-shadow**: `0 2px 8px rgba(0,0,0,0.08)`

### Panel Spacing
- **Gap between options**: 16px
- **Panel internal padding**: 24px
- **Section spacing**: 24px between major sections

---

## 2. Typography

### Heading Hierarchy

#### Panel Title (h2)
- **Font**: Adobe Clean (or system fallback)
- **Size**: 20px
- **Weight**: 700 (Bold)
- **Color**: `#2C2C2C` (--neutral)
- **Line-height**: 1.3
- **Margin-bottom**: 16px

#### Option Label (Pill)
- **Font**: Adobe Clean
- **Size**: 13px
- **Weight**: 600
- **Color**: `#6B6B6B` (--subdued)
- **Background**: `#F5F5F5` (--gray-100)
- **Padding**: 6px 12px
- **Border-radius**: 12px
- **Letter-spacing**: 0.3px

#### Section Labels
- **Font**: Adobe Clean
- **Size**: 14px
- **Weight**: 400
- **Color**: `#2C2C2C` (--neutral)
- **Line-height**: 1.5

#### Body Text
- **Font**: Adobe Clean
- **Size**: 13px
- **Weight**: 400
- **Color**: `#6B6B6B` (--subdued)
- **Line-height**: 1.6

#### Links
- **Font**: Adobe Clean
- **Size**: 14px
- **Weight**: 400
- **Color**: `#1473E6` (--blue)
- **Text-decoration**: none (underline on hover)

---

## 3. Component Specifications

### Asset Info Bar

**Container**
- **Display**: flex, horizontal
- **Gap**: 12px between items
- **Padding**: 12px 16px
- **Background**: `#F5F5F5` (--gray-100)
- **Border-radius**: 8px
- **Margin-bottom**: 16px

**Info Item**
- **Display**: flex, horizontal
- **Align-items**: center
- **Gap**: 6px

**Icons**
- **Size**: 14x14px
- **Stroke-width**: 1.8px
- **Color**: `#6B6B6B` (--subdued)

**Divider**
- **Width**: 1px
- **Height**: 16px
- **Background**: `#D3D3D3` (--gray-300)

**Text**
- **Size**: 13px
- **Weight**: 400
- **Color**: `#2C2C2C` (--neutral)

---

### CTV Default Option

**Container**
- **Padding**: 16px
- **Border**: 2px solid `#D3D3D3` (--neutral) - default
- **Border**: 2px solid `#1473E6` (--blue) - selected
- **Border-radius**: 8px
- **Background**: white
- **Cursor**: pointer
- **Margin-top**: 16px

**Header Row**
- **Display**: flex, horizontal
- **Align-items**: center
- **Gap**: 12px

**TV Icon**
- **Size**: 18x18px
- **Color**: currentColor

**Label Text**
- **Size**: 14px
- **Weight**: 400
- **Color**: `#2C2C2C` (--neutral)
- **Flex**: 1

**Platform Logos**
- **Height**: 28px
- **Width**: auto
- **Object-fit**: contain

**Chevron Icon**
- **Size**: 12x12px
- **Color**: `#6B6B6B` (--gray-500)
- **Transition**: transform 0.2s ease
- **Transform**: rotate(180deg) when expanded

**Specs Grid (Collapsed by default)**
- **Display**: grid
- **Grid-columns**: 1fr 1fr
- **Gap**: 12px
- **Margin-top**: 16px
- **Padding-top**: 16px
- **Border-top**: 1px solid `#E1E1E1` (--gray-200)

**Spec Item**
- **Label**: 12px, 400 weight, `#6B6B6B` (--subdued), margin-bottom 4px
- **Value**: 14px, 600 weight, `#2C2C2C` (--neutral)

---

### Recommended Badge

**Container**
- **Display**: flex, horizontal
- **Align-items**: center
- **Gap**: 6px
- **Margin-top**: 4px

**Icon**
- **Size**: 16x16px
- **Circle stroke**: `#1473E6` (--blue), 1.5px
- **Checkmark stroke**: `#1473E6` (--blue), 1.5px

**Text**
- **Size**: 13px
- **Weight**: 400
- **Color**: `#6B6B6B` (--subdued)

---

### Custom Settings Option

**Container**
- **Padding**: 16px
- **Border**: 2px solid `#E1E1E1` (--gray-200) - default
- **Border**: 2px solid `#1473E6` (--blue) - selected
- **Border-radius**: 8px
- **Background**: white
- **Cursor**: pointer
- **Margin-top**: 12px

**Header Row**
- **Display**: flex, horizontal
- **Align-items**: center
- **Gap**: 12px

**Settings Icon**
- **Size**: 18x18px
- **Color**: currentColor

**Settings Grid (Hidden by default)**
- **Display**: grid
- **Grid-columns**: 1fr 1fr
- **Gap**: 8px (reduced from 16px)
- **Margin-top**: 12px
- **Padding-top**: 16px
- **Border-top**: 1px solid `#E1E1E1` (--gray-200)

**Form Field**
- **Label**: 14px, 400 weight, `#2C2C2C` (--neutral), margin-bottom 8px
- **Select wrapper**: position relative

**Select Input**
- **Width**: 100%
- **Height**: 32px
- **Padding**: 0 36px 0 12px
- **Border**: none
- **Border-radius**: 6px
- **Background**: `#F5F5F5` (--gray-100)
- **Font-size**: 14px
- **Color**: `#2C2C2C` (--neutral)
- **Font-weight**: 400
- **Cursor**: pointer
- **Appearance**: none

**Chevron (in select)**
- **Size**: 12x12px
- **Position**: absolute, right 12px, top 50%
- **Transform**: translateY(-50%)
- **Color**: `#6B6B6B` (--gray-500)
- **Pointer-events**: none

**Recommended Badge (under select)**
- **Display**: flex, horizontal
- **Gap**: 6px
- **Margin-top**: 8px
- **Font-size**: 13px
- **Color**: `#6B6B6B` (--subdued)

---

### Content Credentials Toggle

**Container**
- **Display**: flex, column
- **Gap**: 8px
- **Margin-top**: 24px
- **Margin-bottom**: 0

**Toggle Label**
- **Display**: flex, horizontal
- **Align-items**: center
- **Cursor**: pointer

**Toggle Input (checkbox)**
- **Display**: none (visually hidden)

**Toggle Switch**
- **Width**: 40px
- **Height**: 24px
- **Border-radius**: 12px
- **Background**: `#E1E1E1` (--gray-200) - unchecked
- **Background**: `#1473E6` (--blue) - checked
- **Position**: relative
- **Transition**: background 0.2s ease

**Toggle Knob (::after)**
- **Width**: 18px
- **Height**: 18px
- **Border-radius**: 50%
- **Background**: white
- **Position**: absolute
- **Top**: 3px
- **Left**: 3px - unchecked
- **Left**: 19px - checked
- **Transition**: left 0.2s ease
- **Box-shadow**: 0 1px 3px rgba(0,0,0,0.2)

**Toggle Text**
- **Font-size**: 14px
- **Weight**: 400
- **Color**: `#2C2C2C` (--neutral)
- **Margin-left**: 12px

**Learn More Link**
- **Font-size**: 14px
- **Color**: `#1473E6` (--blue)
- **Margin-left**: 52px (34px + 18px toggle width)
- **Text-decoration**: none
- **Hover**: underline

---

### Export Button

**Container**
- **Width**: auto
- **Min-width**: 100px
- **Height**: 36px
- **Padding**: 0 20px
- **Background**: `#2C2C2C` (--neutral)
- **Color**: #FFFFFF
- **Border**: none
- **Border-radius**: 60px (pill shape)
- **Font-size**: 14px
- **Font-weight**: 700
- **Cursor**: pointer
- **Display**: flex
- **Align-items**: center
- **Justify-content**: center
- **Gap**: 8px
- **Margin-top**: 24px
- **Transition**: background 0.15s

**Hover State**
- **Background**: `#464646` (--gray-800)

**Focus State**
- **Outline**: 2px solid `#1473E6` (--blue)
- **Outline-offset**: 2px

**Disabled State**
- **Background**: `#F5F5F5` (--gray-100)
- **Color**: `#BCBCBC` (--gray-400)
- **Cursor**: not-allowed

---

### Export Modal

**Container**
- **Display**: flex, column (when visible)
- **Width**: 380px
- **Padding**: 28px
- **Background**: white
- **Border-radius**: 12px
- **Box-shadow**: `0 8px 32px rgba(0,0,0,0.12)`
- **Gap**: 20px
- **Position**: fixed overlay (implementation specific)

**Title**
- **Font-size**: 18px
- **Weight**: 600
- **Color**: `#2C2C2C` (--neutral)
- **Margin**: 0

**Progress Container**
- **Display**: flex, horizontal
- **Justify-content**: space-between
- **Align-items**: center
- **Margin-bottom**: 4px

**Status Label**
- **Font-size**: 13px
- **Weight**: 400
- **Color**: `#6B6B6B` (--subdued)

**Percentage**
- **Font-size**: 13px
- **Weight**: 400
- **Color**: `#6B6B6B` (--subdued)

**Progress Bar Container**
- **Width**: 100%
- **Height**: 6px
- **Background**: `#E1E1E1` (--gray-200)
- **Border-radius**: 3px
- **Overflow**: hidden

**Progress Bar Fill**
- **Height**: 100%
- **Background**: `#1473E6` (--blue)
- **Border-radius**: 3px
- **Transition**: width 0.1s linear

**Cancel/Close Button**
- **Align-self**: flex-end
- **Height**: 36px
- **Padding**: 0 20px
- **Background**: white
- **Color**: `#2C2C2C` (--neutral)
- **Border**: 2px solid `#2C2C2C` (--neutral)
- **Border-radius**: 60px
- **Font-size**: 14px
- **Font-weight**: 700
- **Cursor**: pointer
- **Display**: flex
- **Align-items**: center
- **Justify-content**: center
- **Transition**: all 0.15s

**Cancel/Close Button Hover**
- **Background**: `#F5F5F5` (--gray-50)
- **Border-color**: `#464646` (--gray-800)

---

## 4. Color Palette

### Primary Colors
```
--blue: #1473E6         // Primary actions, links, selected states
--neutral: #2C2C2C      // Primary text, buttons
--subdued: #6B6B6B      // Secondary text, icons
```

### Gray Scale
```
--gray-50: #FAFAFA      // Hover backgrounds
--gray-100: #F5F5F5     // Input backgrounds, disabled states
--gray-200: #E1E1E1     // Borders, dividers
--gray-300: #D3D3D3     // Secondary borders
--gray-400: #BCBCBC     // Disabled text
--gray-500: #6B6B6B     // Icons, secondary text
--gray-800: #464646     // Hover states for dark buttons
```

### Semantic Colors
```
--green: #2D9D78        // Success states
--red: #E34850          // Error states
```

### Background
```
--layer1: #FAFAFA       // Background layers for notes/cards
```

---

## 5. Spacing System

### Base Unit: 4px

**Spacing Scale**
```
4px   - Tight spacing (icon gaps)
6px   - Compact spacing (badge gaps)
8px   - Small spacing (form field gaps, margins)
12px  - Medium spacing (section gaps, padding)
16px  - Large spacing (major sections)
20px  - XL spacing (component separation)
24px  - XXL spacing (panel padding, major sections)
28px  - Modal padding
32px  - Section dividers
```

**Common Patterns**
- Gap between icons and text: 6-8px
- Gap between form fields: 8-12px
- Gap between sections: 16-24px
- Container padding: 16-24px
- Modal padding: 24-28px

---

## 6. Border Radius System

```
3px   - Small elements (progress bar fill)
6px   - Medium elements (inputs, badges)
8px   - Cards, containers
12px  - Panels, modals, option pills
60px  - Buttons (pill shape)
```

---

## 7. Elevation & Shadows

### Panel Shadow
```css
box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
```

### Modal Shadow
```css
box-shadow: 0 8px 32px rgba(0, 0, 0, 0.12);
```

### Toggle Knob Shadow
```css
box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
```

---

## 8. Interactive States

### Hover States
- **Links**: Underline appears
- **Buttons**: Background darkens slightly
- **Cards/Options**: Border color changes (gray → blue)
- **Inputs**: No visual change (native browser behavior)

### Focus States
- **Buttons**: 2px blue outline, 2px offset
- **Inputs**: Native browser focus ring
- **Toggle**: Blue outline around switch

### Active/Selected States
- **Option Cards**: Border changes from gray to blue (2px)
- **Toggle**: Background changes from gray to blue
- **Chevrons**: Rotate 180deg when expanded

### Disabled States
- **Buttons**: Gray background, lighter text, no cursor
- **Inputs**: Lighter background, lighter text

---

## 9. Animation & Transitions

### Timing Functions
- **Standard easing**: `ease` or `cubic-bezier(0.4, 0.0, 0.2, 1)`
- **Duration**: 0.15s - 0.2s for most interactions

### Specific Transitions
```css
/* Buttons */
transition: background 0.15s ease;

/* Borders */
transition: border-color 0.2s ease;

/* Chevron rotation */
transition: transform 0.2s ease;

/* Toggle switch */
transition: background 0.2s ease, left 0.2s ease;

/* Progress bar */
transition: width 0.1s linear;
```

---

## 10. Accessibility (Bluelines)

### ARIA Labels & Roles

#### Panel Structure
```html
<div class="panel" role="dialog" aria-modal="false" aria-labelledby="panel-title-1">
  <h2 id="panel-title-1">Export</h2>
</div>
```

#### Asset Info Bar
```html
<div class="asset-info" role="region" aria-label="Asset information">
```

#### Icons
- All decorative icons: `aria-hidden="true"`
- Functional icons: include `aria-label` or associated text

#### Toggle
```html
<label class="toggle-label">
  <input type="checkbox" id="content-credentials-toggle-1" class="toggle-input" checked>
  <span class="toggle-switch"></span>
  <span class="toggle-text">Apply Content Credentials</span>
</label>
```

---

### Keyboard Navigation

**Tab Order**
1. Option pill labels
2. CTV Default option (card)
3. Custom Settings option (card)
4. Form inputs (when visible)
5. Content Credentials toggle
6. Export button

**Interactive Elements**
- All clickable elements must be keyboard accessible
- Focus indicators must be visible (2px blue outline)
- Enter/Space activates buttons and toggles
- Arrow keys navigate within select inputs

---

### Focus Management

**Focus Indicators**
- **Minimum size**: 2px outline
- **Color**: `#1473E6` (--blue)
- **Offset**: 2px from element edge
- **Must be visible** against all backgrounds

**Focus Order**
- Logical top-to-bottom, left-to-right
- Modal traps focus when open
- Focus returns to triggering element on close

---

### Color Contrast Ratios

**WCAG AA Compliance (4.5:1 minimum for normal text)**

✅ **Pass**
- `#2C2C2C` on white: 12.6:1 (AAA)
- `#6B6B6B` on white: 5.7:1 (AA)
- `#1473E6` on white: 4.5:1 (AA)
- White on `#2C2C2C`: 12.6:1 (AAA)
- White on `#1473E6`: 4.5:1 (AA)

**Large Text (18px+ or 14px+ bold) - 3:1 minimum**
- All primary colors pass AAA for large text

---

### Screen Reader Considerations

**Hidden Content**
```css
/* Visually hide checkbox input but keep accessible */
.toggle-input {
  position: absolute;
  opacity: 0;
  pointer-events: none;
}
```

**Announcements**
- Toggle state changes announced automatically via native checkbox
- Dynamic content updates (modal appearance) announced via `role="dialog"`
- Progress updates announced as percentage changes

**Alt Text & Labels**
- Platform logos: `alt="Platform logos"` or decorative `alt=""`
- Icon-only buttons must have accessible labels
- Form inputs have associated `<label>` elements

---

### Touch Targets

**Minimum Size**: 44x44px (WCAG 2.1 AAA)

**Compliant Elements**
- Buttons: 36px height + padding = 44px+ touch area
- Toggle switch: 40x24px + label area
- Option cards: Full card clickable (>44px height)
- Select inputs: 32px height (acceptable for form controls)

**Spacing**
- Minimum 8px gap between adjacent touch targets

---

### Motion & Animation

**Respect Reduced Motion Preference**
```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

**No Flashing Content**
- No animations flash more than 3 times per second
- Progress bar updates are smooth, not strobing

---

## 11. Responsive Considerations

### Breakpoints
- **Mobile**: < 420px - Stack elements, reduce padding
- **Tablet**: 420-768px - Current design optimal
- **Desktop**: > 768px - Maintain max-width 420px

### Mobile Adaptations (< 420px)
- Reduce panel padding: 24px → 16px
- Stack grid items: 2 columns → 1 column
- Reduce font sizes slightly if needed
- Maintain minimum touch targets (44px)

---

## 12. Component States Summary

### CTV Default Option
1. **Default**: Gray border, chevron down
2. **Hover**: Cursor pointer
3. **Selected**: Blue border
4. **Expanded**: Chevron rotated 180deg, specs visible
5. **Selected + Expanded**: Blue border + specs visible

### Custom Settings Option
1. **Default**: Gray border, chevron hidden
2. **Hover**: Cursor pointer
3. **Selected**: Blue border, chevron visible
4. **Expanded**: Settings grid visible, chevron rotated 180deg
5. **Selected + Expanded**: Blue border + settings visible

### Export Button
1. **Idle**: Dark background, "Export" text
2. **Hover**: Darker background
3. **Focus**: Blue outline
4. **Loading**: Gray background, spinner icon
5. **Success**: Green background, checkmark, "Export complete"
6. **Error**: Red background, error icon, "Export failed"
7. **Disabled**: Light gray background, light gray text

### Toggle Switch
1. **Unchecked**: Gray background, knob left
2. **Checked**: Blue background, knob right
3. **Focus**: Blue outline
4. **Disabled**: Lighter colors, no cursor

---

## 13. Implementation Notes

### CSS Custom Properties
```css
:root {
  /* Colors */
  --blue: #1473E6;
  --neutral: #2C2C2C;
  --subdued: #6B6B6B;
  --gray-50: #FAFAFA;
  --gray-100: #F5F5F5;
  --gray-200: #E1E1E1;
  --gray-300: #D3D3D3;
  --gray-400: #BCBCBC;
  --gray-500: #6B6B6B;
  --gray-800: #464646;
  --green: #2D9D78;
  --red: #E34850;
  --layer1: #FAFAFA;

  /* Typography */
  --font: "Adobe Clean", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;

  /* Spacing */
  --spacing-xs: 4px;
  --spacing-sm: 8px;
  --spacing-md: 12px;
  --spacing-lg: 16px;
  --spacing-xl: 24px;

  /* Border Radius */
  --radius-sm: 6px;
  --radius-md: 8px;
  --radius-lg: 12px;
  --radius-pill: 60px;
}
```

### Z-Index Layering
```
1. Base content: z-index: 1
2. Option panels: z-index: 2
3. Modals/overlays: z-index: 1000
4. Tooltips: z-index: 1001
```

### Browser Support
- Modern browsers (Chrome 90+, Firefox 88+, Safari 14+, Edge 90+)
- CSS Grid support required
- CSS Custom Properties support required
- Flexbox support required

---

## 14. Design Tokens Export

### For Figma Integration
```json
{
  "colors": {
    "primary": {
      "blue": "#1473E6",
      "neutral": "#2C2C2C",
      "subdued": "#6B6B6B"
    },
    "gray": {
      "50": "#FAFAFA",
      "100": "#F5F5F5",
      "200": "#E1E1E1",
      "300": "#D3D3D3",
      "400": "#BCBCBC",
      "500": "#6B6B6B",
      "800": "#464646"
    },
    "semantic": {
      "success": "#2D9D78",
      "error": "#E34850"
    }
  },
  "typography": {
    "fontFamily": "Adobe Clean",
    "sizes": {
      "xs": "12px",
      "sm": "13px",
      "base": "14px",
      "lg": "18px",
      "xl": "20px"
    },
    "weights": {
      "regular": 400,
      "semibold": 600,
      "bold": 700
    },
    "lineHeights": {
      "tight": 1.3,
      "normal": 1.5,
      "relaxed": 1.6
    }
  },
  "spacing": {
    "xs": "4px",
    "sm": "8px",
    "md": "12px",
    "lg": "16px",
    "xl": "24px",
    "2xl": "28px",
    "3xl": "32px"
  },
  "borderRadius": {
    "sm": "3px",
    "md": "6px",
    "lg": "8px",
    "xl": "12px",
    "pill": "60px"
  },
  "shadows": {
    "panel": "0 2px 8px rgba(0, 0, 0, 0.08)",
    "modal": "0 8px 32px rgba(0, 0, 0, 0.12)",
    "toggle": "0 1px 3px rgba(0, 0, 0, 0.2)"
  }
}
```

---

## 15. Quality Checklist

### Visual Design
- [ ] All colors match design tokens
- [ ] Typography hierarchy is consistent
- [ ] Spacing follows 4px grid system
- [ ] Border radius values are consistent
- [ ] Shadows are applied correctly
- [ ] Icons are properly sized and aligned

### Interaction Design
- [ ] All interactive elements have hover states
- [ ] Focus states are visible and consistent
- [ ] Transitions are smooth and purposeful
- [ ] Loading states are clear
- [ ] Error states are informative
- [ ] Success states provide feedback

### Accessibility
- [ ] Color contrast ratios meet WCAG AA
- [ ] Touch targets are minimum 44x44px
- [ ] Keyboard navigation works completely
- [ ] Screen reader labels are present
- [ ] Focus order is logical
- [ ] ARIA roles and labels are correct
- [ ] Reduced motion is respected

### Responsive
- [ ] Layout adapts to mobile screens
- [ ] Text remains readable at all sizes
- [ ] Touch targets remain accessible
- [ ] No horizontal scrolling on mobile

### Performance
- [ ] Images are optimized
- [ ] Animations are performant (GPU accelerated)
- [ ] No layout shifts during interactions
- [ ] Smooth 60fps animations

---

## Version History
- **v1.0** - Initial specification (2026-02-25)

---

## Contact & Feedback
For questions or clarifications about this specification, please contact the design team.
