/**
 * Figma Design Sync Script
 * Detects changes in Figma design and prepares for AI review
 */

const fs = require('fs');
const path = require('path');

// Figma API configuration
const FIGMA_FILE_KEY = process.env.FIGMA_FILE_KEY || '0H4f6exqpIfdYHQhiBheBo';
const FIGMA_ACCESS_TOKEN = process.env.FIGMA_ACCESS_TOKEN;
const FIGMA_NODE_ID = process.env.FIGMA_NODE_ID || '8190-20277';

// File to store last known version
const VERSION_FILE = path.join(__dirname, '../.figma-version.json');

async function fetchFigmaDesign() {
  if (!FIGMA_ACCESS_TOKEN) {
    console.error('FIGMA_ACCESS_TOKEN not set');
    process.exit(1);
  }

  const url = `https://api.figma.com/v1/files/${FIGMA_FILE_KEY}`;
  
  try {
    const response = await fetch(url, {
      headers: {
        'X-Figma-Token': FIGMA_ACCESS_TOKEN,
      },
    });

    if (!response.ok) {
      throw new Error(`Figma API error: ${response.statusText}`);
    }

    const data = await response.json();
    return {
      version: data.version,
      lastModified: data.lastModified,
      document: data.document,
    };
  } catch (error) {
    console.error('Error fetching Figma design:', error);
    throw error;
  }
}

function getLastKnownVersion() {
  if (fs.existsSync(VERSION_FILE)) {
    return JSON.parse(fs.readFileSync(VERSION_FILE, 'utf8'));
  }
  return null;
}

function saveVersion(versionData) {
  fs.writeFileSync(VERSION_FILE, JSON.stringify(versionData, null, 2));
}

async function checkForChanges() {
  console.log('🔍 Checking for Figma design changes...');
  
  const currentDesign = await fetchFigmaDesign();
  const lastVersion = getLastKnownVersion();

  if (!lastVersion) {
    console.log('📝 No previous version found. Saving current version...');
    saveVersion({
      version: currentDesign.version,
      lastModified: currentDesign.lastModified,
      timestamp: new Date().toISOString(),
    });
    console.log('✅ Initial version saved. Future changes will be detected.');
    return false;
  }

  if (currentDesign.version !== lastVersion.version) {
    console.log('🆕 Design changes detected!');
    console.log(`   Previous version: ${lastVersion.version}`);
    console.log(`   Current version: ${currentDesign.version}`);
    console.log(`   Last modified: ${currentDesign.lastModified}`);
    
    // Create changes summary
    const changes = {
      previousVersion: lastVersion.version,
      currentVersion: currentDesign.version,
      lastModified: currentDesign.lastModified,
      detectedAt: new Date().toISOString(),
      nodeId: FIGMA_NODE_ID,
    };

    // Save changes file for AI to read
    const changesFile = path.join(__dirname, '../.figma-changes.json');
    fs.writeFileSync(changesFile, JSON.stringify(changes, null, 2));
    
    console.log('📋 Changes saved to .figma-changes.json');
    console.log('🤖 Ready for AI review...');
    
    return true;
  }

  console.log('✅ No changes detected. Design is up to date.');
  return false;
}

// Run if called directly
if (require.main === module) {
  checkForChanges()
    .then((hasChanges) => {
      process.exit(hasChanges ? 1 : 0);
    })
    .catch((error) => {
      console.error('Error:', error);
      process.exit(1);
    });
}

module.exports = { checkForChanges, fetchFigmaDesign };

