# Quick Guide: Finding Node ID for Multiple Pages

## 🎯 The Easiest Way

### Step 1: Open Figma
- Go to your Figma project
- Navigate to the **specific page** you want

### Step 2: Select Your Frame/Component
- Click on the **frame** or **component** you want to monitor
- Make sure it's **selected** (has blue outline)

### Step 3: Check Browser URL
Look at your browser's address bar:

```
https://www.figma.com/design/0H4f6exqpIfdYHQhiBheBo/Project-Name?node-id=8190-20277
                                                                    ^^^^^^^^^^
                                                                    COPY THIS!
```

**That's your Node ID!** (e.g., `8190-20277`)

## 📋 Example: Multiple Pages

### Page 1: Subscription
- URL: `...?node-id=8190-20277`
- Node ID: `8190-20277`

### Page 2: Dashboard  
- URL: `...?node-id=1234-5678`
- Node ID: `1234-5678`

### Page 3: Settings
- URL: `...?node-id=9876-5432`
- Node ID: `9876-5432`

**Each page has a different Node ID!**

## 🛠️ Use Our Tool

```bash
npm run find:nodeid
```

Then paste your Figma URL - it will extract the Node ID automatically!

## 💡 Pro Tips

1. **Right-click** on frame → "Copy link" → Paste URL → Extract Node ID
2. **Bookmark** your pages with their Node IDs for easy reference
3. **Switch** Node IDs in `.env` when monitoring different pages

## 🔄 Switching Between Pages

When you want to monitor a different page:

1. Get Node ID from that page's URL
2. Update `.env`:
   ```env
   FIGMA_NODE_ID=new-node-id-here
   ```
3. Run: `npm run figma:check`

---

**That's it!** Each page/component has its own unique Node ID in the URL! 🎯

