# Automated Figma → AI → Implementation Workflow

This workflow automates the process of detecting Figma design changes, reviewing them with AI, and implementing updates.

## 🎯 Workflow Overview

```
Figma Design Changes
    ↓
MCP Server / Script Detects Changes
    ↓
AI Reviews & Lists Changes (in conversation)
    ↓
User Approves
    ↓
AI Implements Changes
    ↓
Local Server Testing
    ↓
Push to GitHub
```

## 📋 Setup Instructions

### 1. Install Dependencies

```bash
npm install
```

### 2. Configure Figma API Access

Create a `.env` file in the root directory:

```env
FIGMA_FILE_KEY=0H4f6exqpIfdYHQhiBheBo
FIGMA_ACCESS_TOKEN=your_figma_access_token_here
FIGMA_NODE_ID=8190-20277
```

**To get Figma Access Token:**
1. Go to Figma → Account Settings → Personal Access Tokens
2. Create a new token
3. Copy and paste into `.env` file

### 3. Configure GitHub (Optional - for automated workflows)

Add GitHub secrets:
- `FIGMA_FILE_KEY`
- `FIGMA_ACCESS_TOKEN`
- `FIGMA_NODE_ID`

## 🚀 Usage

### Manual Workflow

#### Step 1: Check for Changes
```bash
npm run figma:check
```

This will:
- Fetch current Figma design version
- Compare with last known version
- Save changes to `.figma-changes.json` if detected

#### Step 2: Prepare AI Review
```bash
npm run figma:review
```

This creates `.ai-review-prompt.txt` with:
- Change information
- Figma URL
- Instructions for AI review

#### Step 3: Send to AI Assistant
1. Open `.ai-review-prompt.txt`
2. Copy the content
3. Send to AI assistant (like me!)
4. AI will list all changes in conversation

#### Step 4: Review & Approve
- Review the changes list
- Check components, tokens, styling
- Give approval to proceed

#### Step 5: AI Implements
- AI implements all changes
- Updates components, tokens, styles
- Tests locally

#### Step 6: Deploy
```bash
npm run deploy
```

This will:
- Run linter
- Build project
- Start local server (for testing)
- Commit changes
- Push to GitHub

### Automated Workflow (Continuous Monitoring)

#### Start Watcher
```bash
npm run figma:watch
```

This will:
- Check Figma every 15 minutes
- Automatically detect changes
- Prepare AI review when changes found
- Run continuously until stopped (Ctrl+C)

### Full Workflow (One Command)
```bash
npm run workflow:full
```

Runs check + review preparation in one command.

## 📁 File Structure

```
exptest/
├── scripts/
│   ├── figma-sync.js      # Detects Figma changes
│   ├── figma-watcher.js   # Continuous monitoring
│   ├── ai-review.js       # Prepares AI review prompt
│   └── deploy.js          # Deployment automation
├── .github/
│   └── workflows/
│       └── figma-sync.yml # GitHub Actions workflow
├── .figma-version.json    # Last known version (auto-generated)
├── .figma-changes.json    # Detected changes (auto-generated)
└── .ai-review-prompt.txt  # AI review prompt (auto-generated)
```

## 🔄 Workflow Steps Explained

### 1. **Figma Change Detection**
- Script fetches current Figma file version
- Compares with stored version
- Detects if design was modified

### 2. **AI Review Preparation**
- Creates structured prompt with:
  - Change details
  - Figma URL
  - Current project structure
  - Review instructions

### 3. **AI Review Process**
- AI receives prompt
- Fetches Figma design via MCP
- Compares with current implementation
- Lists ALL changes:
  - ✅ UI Components (new/modified/removed)
  - ✅ Design Tokens (colors, typography)
  - ✅ Layout changes
  - ✅ Styling updates
  - ✅ Missing components

### 4. **User Approval**
- Review change list in conversation
- Approve or request modifications
- AI waits for explicit approval

### 5. **Implementation**
- AI implements all approved changes
- Updates components
- Updates tokens
- Updates styles
- Maintains code quality

### 6. **Testing**
- Local server starts automatically
- Manual testing recommended
- AI can run automated tests if configured

### 7. **Deployment**
- Git commit with descriptive message
- Push to GitHub
- Clean up temporary files

## 🛠️ Customization

### Change Check Interval
Edit `scripts/figma-watcher.js`:
```javascript
const CHECK_INTERVAL = 15 * 60 * 1000; // Change to desired interval
```

### Figma Node ID
Update in `.env` or `scripts/figma-sync.js`:
```javascript
const FIGMA_NODE_ID = 'your-node-id';
```

### GitHub Branch
Edit `scripts/deploy.js`:
```javascript
execSync('git push origin main', ...); // Change 'main' to your branch
```

## 📝 Example Workflow Session

```bash
# 1. Check for changes
$ npm run figma:check
🔍 Checking for Figma design changes...
🆕 Design changes detected!
   Previous version: 12345
   Current version: 12346
📋 Changes saved to .figma-changes.json

# 2. Prepare review
$ npm run figma:review
✅ AI review prompt created

# 3. Send prompt to AI (copy from .ai-review-prompt.txt)
# AI responds with change list:
# - Button padding changed from 8px to 10px
# - New color token added: --color-accent-blue
# - Header component updated
# ... etc

# 4. Approve: "Yes, please implement these changes"

# 5. AI implements changes

# 6. Deploy
$ npm run deploy
🚀 Starting deployment workflow...
✅ Changes committed
✅ Pushed to GitHub successfully
```

## 🔐 Security Notes

- Never commit `.env` file to Git
- Add `.env` to `.gitignore`
- Use GitHub Secrets for CI/CD
- Rotate Figma tokens regularly

## 🐛 Troubleshooting

### "FIGMA_ACCESS_TOKEN not set"
- Create `.env` file with your token
- Or set environment variable: `export FIGMA_ACCESS_TOKEN=your_token`

### "No changes detected"
- First run saves initial version
- Subsequent runs will detect changes
- Check Figma file was actually modified

### "Git push failed"
- Ensure Git remote is configured
- Check GitHub credentials
- Verify write access to repository

## 📚 Additional Resources

- [Figma API Documentation](https://www.figma.com/developers/api)
- [GitHub Actions Documentation](https://docs.github.com/en/actions)
- [MCP Server Documentation](https://modelcontextprotocol.io)

---

**Ready to automate your design workflow!** 🚀

