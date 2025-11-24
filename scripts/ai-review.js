/**
 * AI Review Script
 * Prepares design changes for AI assistant review
 */

const fs = require('fs');
const path = require('path');

// Load environment variables from .env file
try {
  require('./load-env.js');
} catch (e) {
  // .env file might not exist yet, that's OK
}

const { fetchFigmaDesign } = require('./figma-sync');

const CHANGES_FILE = path.join(__dirname, '../.figma-changes.json');
const REVIEW_FILE = path.join(__dirname, '../.ai-review-prompt.txt');

async function prepareAIReview() {
  if (!fs.existsSync(CHANGES_FILE)) {
    console.log('❌ No changes file found. Run "npm run figma:check" first.');
    return;
  }

  const changes = JSON.parse(fs.readFileSync(CHANGES_FILE, 'utf8'));
  const figmaUrl = `https://www.figma.com/design/0H4f6exqpIfdYHQhiBheBo/test-Experro---Generic-flow---Global-Settings--Copy-?node-id=${changes.nodeId}&m=dev`;

  // Build structural differences section if detected
  let structuralDiffSection = '';
  if (changes.structuralDiff && changes.codeComparison) {
    const comp = changes.codeComparison;
    structuralDiffSection = `
## ⚠️ Structural Differences Detected

The script detected differences between the code implementation and Figma design:

${comp.hasAddonCard ? '- **Extra Component:** Code contains "Add-on features" section that may not be in the Figma design\n' : ''}${comp.designComponentCount && comp.codeComponentCount ? `- **Component Count Mismatch:** Design has ${comp.designComponentCount} components, Code has ${comp.codeComponentCount} top-level components\n` : ''}${comp.cardSections > 1 ? `- **Multiple Card Sections:** Code has ${comp.cardSections} card sections detected\n` : ''}
**Action Required:** Please verify if these components should exist in the design or need to be removed.
`;
  }

  // Build version change section
  let versionChangeSection = '';
  if (changes.versionChanged) {
    versionChangeSection = `
## 🆕 Version Change Detected
- **Previous Version:** ${changes.previousVersion}
- **Current Version:** ${changes.currentVersion}
- **Last Modified:** ${changes.lastModified}
`;
  }

  const prompt = `
# Figma Design Changes Detected

## Change Information
- **Previous Version:** ${changes.previousVersion}
- **Current Version:** ${changes.currentVersion}
- **Last Modified:** ${changes.lastModified}
- **Detected At:** ${changes.detectedAt}
- **Figma URL:** ${figmaUrl}
- **Node ID:** ${changes.nodeId}
${versionChangeSection}${structuralDiffSection}
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

