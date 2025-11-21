/**
 * AI Review Script
 * Prepares design changes for AI assistant review
 */

const fs = require('fs');
const path = require('path');
const { fetchFigmaDesign } = require('./figma-sync');

const CHANGES_FILE = path.join(__dirname, '../.figma-changes.json');
const REVIEW_FILE = path.join(__dirname, '../.ai-review-prompt.txt');

async function prepareAIReview() {
  if (!fs.existsSync(CHANGES_FILE)) {
    console.log('❌ No changes file found. Run figma:check-changes first.');
    return;
  }

  const changes = JSON.parse(fs.readFileSync(CHANGES_FILE, 'utf8'));
  const figmaUrl = `https://www.figma.com/design/0H4f6exqpIfdYHQhiBheBo/test-Experro---Generic-flow---Global-Settings--Copy-?node-id=${changes.nodeId}&m=dev`;

  const prompt = `
# Figma Design Changes Detected

## Change Information
- **Previous Version:** ${changes.previousVersion}
- **Current Version:** ${changes.currentVersion}
- **Last Modified:** ${changes.lastModified}
- **Detected At:** ${changes.detectedAt}
- **Figma URL:** ${figmaUrl}
- **Node ID:** ${changes.nodeId}

## Action Required

Please review the Figma design and:
1. ✅ Compare with current implementation
2. ✅ List all changes (UI components, tokens, layout, styling)
3. ✅ Identify missing components
4. ✅ Check token differences
5. ✅ Wait for approval before implementing

## Current Project Structure
- Components: \`components/\`
- Pages: Each page in its own folder (e.g., \`Subscription/\`)
- Tokens: \`tokens/\` and \`typography/\`
- Design System: Following existing patterns

## Instructions
- List changes in conversation (not .md file)
- Check all UI components
- Verify all tokens
- After approval, implement changes
- Test locally
- Push to GitHub

Ready for review! 🚀
`;

  fs.writeFileSync(REVIEW_FILE, prompt);
  console.log('✅ AI review prompt created at .ai-review-prompt.txt');
  console.log('\n📋 Copy the content and send to AI assistant for review.');
}

if (require.main === module) {
  prepareAIReview();
}

module.exports = { prepareAIReview };

