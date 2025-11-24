# AI Workflow Interaction Template

When you receive a Figma change notification, follow this process:

## Step 1: Receive Change Notification

User sends: "Check Figma for changes" or you detect `.figma-changes.json`

## Step 2: Fetch Figma Design

```typescript
// Use MCP Figma tool
mcp_figma-desktop_get_design_context({
  nodeId: "8190:20277", // From .figma-changes.json
  clientLanguages: "typescript,html,css",
  clientFrameworks: "react"
})
```

## Step 3: Compare & List Changes

**IMPORTANT:** List changes in conversation, NOT in .md file!

Format:
```
## 🔍 Design Changes Detected

### 📦 Components
- [ ] Header component: Padding changed from 8px to 10px
- [ ] Button component: New variant added
- [ ] Table component: Border color updated

### 🎨 Tokens
- [ ] New color: --color-accent-blue (#3B82F6)
- [ ] Typography: Font size changed for h1 (20px → 24px)

### 📐 Layout
- [ ] Sidebar width: 250px → 260px
- [ ] Card spacing: 16px → 20px

### 🆕 New Components Needed
- [ ] Tooltip component
- [ ] Dropdown component variant

### 🔄 Modified Components
- [ ] Button: Added hover state
- [ ] Input: Border radius changed

### ❌ Removed
- [ ] Old badge component (replaced with new)

## ✅ Ready for Implementation
```

## Step 4: Wait for Approval

**DO NOT implement until user says:**
- "Yes, implement these changes"
- "Go ahead"
- "Approve"
- "Implement"

## Step 5: Implement Changes

After approval:
1. Update components
2. Update tokens
3. Update styles
4. Create missing components
5. Test locally

## Step 6: Confirm Completion

```
✅ All changes implemented
✅ Components updated
✅ Tokens synced
✅ Local server running on http://localhost:3000
✅ Ready for deployment
```

## Step 7: Deploy (if requested)

User runs: `npm run deploy`
- Commits changes
- Pushes to GitHub
- Cleans up temp files

---

**Remember:**
- ✅ List changes in conversation
- ✅ Wait for explicit approval
- ✅ Test before deploying
- ✅ Use existing component patterns
- ✅ Follow design system tokens

