# UI Components

This directory contains all UI components from the Figma Design System.

## Components

### Accordion
Collapsible content sections with multiple variants.

**Props:**
- `type`: 'stroke' | 'card'
- `state`: 'default' | 'hover' | 'active' | 'disabled'
- `bottomDivider`: boolean
- `topDivider`: boolean
- `title`: string
- `content`: string
- `onToggle`: (isOpen: boolean) => void

### ActivityTimeline
Timeline component for displaying activity events.

**Props:**
- `detail`: boolean - Show detailed view with meeting info
- `icon`: React.ReactNode
- `title`: string
- `description`: string
- `link`: string
- `meetingId`: string
- `password`: string
- `onCopy`: () => void

### Activity
Activity feed item component with multiple variations.

**Props:**
- `variation`: '1' | '2' | '3' | '4' | '5' | '6'
- `avatar`: React.ReactNode
- `name`: string
- `action`: string
- `target`: string
- `timestamp`: string
- `message`: string

### Alert
Alert notification component with different types.

**Props:**
- `type`: 'error' | 'info' | 'success' | 'warning' | 'default'
- `title`: string
- `message`: string
- `onClose`: () => void

### Avatar
User avatar component with multiple sizes and styles.

**Props:**
- `type`: 'subtle' | 'fill' | 'icon' | 'image'
- `size`: '20px' | '24px' | '32px' | '48px' | '64px' | '80px' | '96px'
- `shape`: 'circular' | 'rounded'
- `pill`: boolean
- `status`: boolean
- `src`: string
- `alt`: string
- `initials`: string
- `icon`: React.ReactNode

### Badge
Badge component for labels and tags.

**Props:**
- `type`: 'fill' | 'subtle'
- `size`: 'small' | 'medium' | 'large' | 'extra-large'
- `color`: 'red' | 'blue' | 'yellow' | 'green' | 'pink' | 'lavender' | 'gray'
- `icon`: boolean
- `removable`: boolean
- `onRemove`: () => void
- `children`: React.ReactNode

### Banner
Banner component for top-of-page notifications.

**Props:**
- `type`: 'error' | 'info' | 'success' | 'warning' | 'default'
- `link`: boolean
- `icon`: boolean
- `message`: string
- `linkText`: string
- `linkUrl`: string

### Breadcrumbs
Navigation breadcrumb component.

**Props:**
- `type`: 'text' | 'folder' | 'subfolder' | 'page'
- `icon`: boolean
- `state`: 'default' | 'hover' | 'active' | 'focused' | 'disabled' | 'inactive'
- `label`: string
- `onClick`: () => void

## Usage

All components are exported from `./index.ts`:

```typescript
import { Accordion, Alert, Avatar, Badge } from './components';
```

## Styling

All components use CSS modules and reference design tokens from:
- `../tokens/colors.css` - Color tokens
- `../typography/tokens.css` - Typography tokens

Components follow the design system patterns and use CSS custom properties for theming.

