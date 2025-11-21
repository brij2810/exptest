# How to View the Subscription Page Locally

## Setup Instructions

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start the development server:**
   ```bash
   npm run dev
   ```

3. **View in browser:**
   - The page will automatically open at `http://localhost:3000`
   - Or manually navigate to `http://localhost:3000` in your browser

## What You'll See

The Subscription page includes:
- **Header** with search bar, notifications, help, and profile
- **Sidebar** with navigation menu (Setup, Security, Domain Manager, Billing & Usage)
- **Main Content** with:
  - Subscription card showing "Trial Workspace 1"
  - Product table (CMS, AI Search, Discovery, Merchandising)
  - Add-on features card

## File Structure

- `pages/Subscription.tsx` - Main Subscription page component
- `components/Header.tsx` - Header component
- `components/Sidebar.tsx` - Sidebar navigation component
- `components/Table.tsx` - Table component for products
- `App.tsx` - Root app component
- `index.tsx` - React entry point
- `index.html` - HTML template

## Build for Production

```bash
npm run build
```

The built files will be in the `dist` folder.

