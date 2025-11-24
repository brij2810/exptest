# Quick .env Setup Guide

## 🚀 Easiest Way: Use Setup Script

```bash
npm run setup:env
```

This will:
1. Ask you for your Figma Access Token
2. Use default values for File Key and Node ID
3. Create `.env` file automatically

## 📝 Manual Setup (Alternative)

### Step 1: Create .env File

**In VS Code:**
1. Right-click in root folder (`d:\exptest`)
2. New File → Name it `.env`

**Or using PowerShell:**
```powershell
New-Item -Path .env -ItemType File
notepad .env
```

### Step 2: Add This Content

```env
FIGMA_FILE_KEY=0H4f6exqpIfdYHQhiBheBo
FIGMA_ACCESS_TOKEN=your_token_here
FIGMA_NODE_ID=8190-20277
```

### Step 3: Get Your Figma Token

1. Go to **Figma** → Click your profile (top right)
2. Select **"Settings"**
3. Scroll to **"Personal Access Tokens"**
4. Click **"Create new token"**
5. Name it (e.g., "exptest")
6. **Copy the token** (starts with `figd_`)
7. Paste it in `.env` file replacing `your_token_here`

### Step 4: Save and Test

Save `.env` file, then test:
```bash
npm run figma:check
```

## ✅ That's It!

Your `.env` file should look like:
```env
FIGMA_FILE_KEY=0H4f6exqpIfdYHQhiBheBo
FIGMA_ACCESS_TOKEN=figd_abc123xyz789...
FIGMA_NODE_ID=8190-20277
```

## 🔒 Security

- ✅ `.env` is in `.gitignore` (won't be committed)
- ✅ Never share your token
- ✅ Keep it private

---

**Need help?** See `SETUP_ENV.md` for detailed instructions.

