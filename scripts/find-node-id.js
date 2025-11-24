/**
 * Find Node ID from Figma URL
 * Helps extract Node ID from Figma URLs for multiple pages/components
 */

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function question(prompt) {
  return new Promise((resolve) => {
    rl.question(prompt, resolve);
  });
}

function extractNodeId(url) {
  // Try different patterns
  const patterns = [
    /node-id=([\d:-]+)/i,           // node-id=123-456 or node-id=123:456
    /node_id=([\d:-]+)/i,           // node_id=123-456
    /#([\d:-]+)/,                    // #123-456
  ];

  for (const pattern of patterns) {
    const match = url.match(pattern);
    if (match) {
      return match[1];
    }
  }

  return null;
}

async function findNodeId() {
  console.log('🔍 Figma Node ID Finder\n');
  console.log('This tool helps you find Node IDs for different pages/components.\n');

  const url = await question('Paste your Figma URL here: ');

  if (!url || !url.includes('figma.com')) {
    console.log('\n❌ Invalid Figma URL. Please try again.');
    rl.close();
    return;
  }

  const nodeId = extractNodeId(url);

  if (nodeId) {
    console.log('\n✅ Node ID found!');
    console.log(`\n📋 Node ID: ${nodeId}\n`);
    console.log('📝 Add this to your .env file:');
    console.log(`   FIGMA_NODE_ID=${nodeId}\n`);
    
    // Show both formats
    const dashFormat = nodeId.replace(':', '-');
    const colonFormat = nodeId.replace('-', ':');
    
    if (dashFormat !== nodeId) {
      console.log('💡 Alternative formats:');
      console.log(`   FIGMA_NODE_ID=${dashFormat}`);
      console.log(`   FIGMA_NODE_ID=${colonFormat}\n`);
    }
  } else {
    console.log('\n❌ Could not find Node ID in URL.');
    console.log('\n💡 Make sure:');
    console.log('   1. You selected a frame/component in Figma');
    console.log('   2. The URL contains "node-id=" or "#"');
    console.log('   3. You copied the full URL from browser address bar\n');
    console.log('📝 Example URL format:');
    console.log('   https://www.figma.com/design/...?node-id=123-456\n');
  }

  rl.close();
}

// Run if called directly
if (require.main === module) {
  findNodeId().catch((error) => {
    console.error('❌ Error:', error);
    rl.close();
    process.exit(1);
  });
}

module.exports = { extractNodeId, findNodeId };
