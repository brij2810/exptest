# How to Set Up .env File

## Quick Setup (3 Steps)

### Step 1: Get Your Figma Access Token

1. **Open Figma** → Go to your account
2. **Click** on your profile picture (top right)
3. **Select** "Settings" or "Account Settings"
4. **Scroll down** to "Personal Access Tokens" section
5. **Click** "Create new token"
6. **Give it a name** (e.g., "exptest-workflow")
7. **Copy the token** (you'll only see it once!)

### Step 2: Create .env File

**Option A: Using Command Line (Windows PowerShell)**
```powershell
# Navigate to project folder
cd d:\exptest

# Create .env file
New-Item -Path .env -ItemType File

# Open in notepad
notepad .env
```

**Option B: Using VS Code / Editor**
1. Create a new file named `.env` in the root folder (`d:\exptest`)
2. Copy the content from `.env.example`
3. Fill in your values

**Option C: Copy Template**
```powershell
# Copy the example file
Copy-Item .env.example .env

# Edit it
notepad .env
```

### Step 3: Fill In Your Values

Open `.env` file and replace:

```env
FIGMA_FILE_KEY=0H4f6exqpIfdYHQhiBheBo
FIGMA_ACCESS_TOKEN=paste_your_token_here
FIGMA_NODE_ID=8190-20277
```

## 📋 Example .env File

```env
FIGMA_FILE_KEY=0H4f6exqpIfdYHQhiBheBo
FIGMA_ACCESS_TOKEN=figd_abc123xyz789your_actual_token_here
FIGMA_NODE_ID=8190-20277
```

## 🔍 Where to Find Values

### FIGMA_FILE_KEY
- **From Figma URL:**
  ```
  https://www.figma.com/design/0H4f6exqpIfdYHQhiBheBo/...
                              ^^^^^^^^^^^^^^^^^^^^
                              This is your File Key
  ```
- **Already set:** `0H4f6exqpIfdYHQhiBheBo` ✅

### FIGMA_ACCESS_TOKEN
- **Get from:** Figma → Account Settings → Personal Access Tokens
- **Format:** `figd_` followed by random characters
- **Example:** `figd_abc123xyz789...`

### FIGMA_NODE_ID
- **From Figma URL:**
  ```
  https://...?node-id=8190-20277
                        ^^^^^^^^^^
                        This is your Node ID
  ```
- **Already set:** `8190-20277` ✅

## ✅ Verify Setup

After creating `.env`, test it:

```bash
npm run figma:check
```

If you see:
- ✅ "Checking for Figma design changes..." = Success!
- ❌ "FIGMA_ACCESS_TOKEN not set" = Check your .env file

## 🔒 Security Notes

- ✅ `.env` is already in `.gitignore` (won't be committed)
- ✅ Never share your token publicly
- ✅ Tokens can be revoked and recreated anytime
- ✅ Each token has full access to your Figma account

## 🐛 Troubleshooting

### "FIGMA_ACCESS_TOKEN not set"
- Check `.env` file exists in root folder
- Verify token is on one line (no line breaks)
- Make sure there are no extra spaces

### "Invalid token"
- Token might be expired or revoked
- Create a new token in Figma
- Update `.env` file

### File not found
- Make sure `.env` is in `d:\exptest\` (root folder)
- Not in `d:\exptest\scripts\` or other subfolder
- File name must be exactly `.env` (not `.env.txt`)

## 📝 Quick Reference

| Variable | Where to Get | Example |
|----------|-------------|---------|
| `FIGMA_FILE_KEY` | Figma URL | `0H4f6exqpIfdYHQhiBheBo` |
| `FIGMA_ACCESS_TOKEN` | Figma Settings | `figd_abc123...` |
| `FIGMA_NODE_ID` | Figma URL node-id | `8190-20277` |

---

**Once .env is set up, you're ready to use the automated workflow!** 🚀

