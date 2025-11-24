# Quick Start: Automated Figma Workflow

## 🎯 One-Time Setup

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Create `.env` file:**
   ```env
   FIGMA_FILE_KEY=0H4f6exqpIfdYHQhiBheBo
   FIGMA_ACCESS_TOKEN=your_token_here
   FIGMA_NODE_ID=8190-20277
   ```

3. **Get Figma Token:**
   - Figma → Account Settings → Personal Access Tokens
   - Create new token → Copy to `.env`

## 🚀 Daily Usage

### Option 1: Manual Check
```bash
npm run figma:check        # Check for changes
npm run figma:review       # Prepare AI review
# Copy .ai-review-prompt.txt content → Send to AI
# Review changes → Approve → AI implements
npm run deploy             # Deploy to GitHub
```

### Option 2: Auto-Watch (Recommended)
```bash
npm run figma:watch        # Runs continuously
# When changes detected → Follow prompts
```

## 📋 Workflow Steps

1. ✅ **Figma Changes** → Script detects automatically
2. ✅ **AI Review** → Lists all changes in conversation
3. ✅ **Your Approval** → Review and approve
4. ✅ **AI Implements** → Updates code automatically
5. ✅ **Local Testing** → Server runs automatically
6. ✅ **GitHub Push** → Deployed automatically

## 💡 Pro Tips

- Run `figma:watch` in background terminal
- Check `.ai-review-prompt.txt` for change details
- Review AI's change list before approving
- Test locally before deploying

---

**That's it!** Your workflow is now automated! 🎉

