# Debugging Blank Page Issue

## Steps to Debug:

1. **Open Browser Console** (F12 or Right-click > Inspect > Console)
   - Check for any JavaScript errors
   - Look for import/module errors
   - Check if CSS files are loading

2. **Check Network Tab**
   - Verify all CSS files are loading (200 status)
   - Check if any files are 404 (not found)

3. **Common Issues:**

   a. **CSS Variables not loading:**
      - Make sure `tokens/colors.css` is imported in App.tsx
      - Check if CSS variables are defined in :root

   b. **Component imports failing:**
      - Verify all component paths are correct
      - Check if components are exported properly

   c. **Vite not running:**
      - Run `npm run dev` in terminal
      - Check if server is running on port 3000

4. **Quick Test:**
   - Add a simple div with text to see if React is rendering
   - Check if console.log statements appear

## Files to Check:

- `App.tsx` - Root component
- `index.tsx` - Entry point
- `Subscription/Subscription.tsx` - Main page
- `tokens/colors.css` - CSS variables
- Browser console for errors

