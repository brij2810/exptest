/**
 * Setup .env File Script
 * Helps create .env file with Figma configuration
 */

const fs = require('fs');
const path = require('path');
const readline = require('readline');

const ENV_FILE = path.join(__dirname, '../.env');
const ENV_EXAMPLE = path.join(__dirname, '../.env.example');

// Default values (already known)
const DEFAULT_FILE_KEY = '0H4f6exqpIfdYHQhiBheBo';
const DEFAULT_NODE_ID = '8190-20277';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function question(prompt) {
  return new Promise((resolve) => {
    rl.question(prompt, resolve);
  });
}

async function setupEnv() {
  console.log('🔧 Setting up .env file for Figma workflow...\n');

  // Check if .env already exists
  if (fs.existsSync(ENV_FILE)) {
    const overwrite = await question('⚠️  .env file already exists. Overwrite? (y/n): ');
    if (overwrite.toLowerCase() !== 'y') {
      console.log('❌ Setup cancelled.');
      rl.close();
      return;
    }
  }

  console.log('\n📋 Please provide the following information:\n');

  // File Key (with default)
  const fileKey = await question(`Figma File Key [${DEFAULT_FILE_KEY}]: `);
  const finalFileKey = fileKey.trim() || DEFAULT_FILE_KEY;

  // Access Token (required)
  console.log('\n💡 To get your Figma Access Token:');
  console.log('   1. Go to Figma → Account Settings');
  console.log('   2. Scroll to "Personal Access Tokens"');
  console.log('   3. Click "Create new token"');
  console.log('   4. Copy the token\n');
  
  const accessToken = await question('Figma Access Token (required): ');
  if (!accessToken.trim()) {
    console.log('\n❌ Access Token is required! Setup cancelled.');
    rl.close();
    return;
  }

  // Node ID (with default)
  const nodeId = await question(`Figma Node ID [${DEFAULT_NODE_ID}]: `);
  const finalNodeId = nodeId.trim() || DEFAULT_NODE_ID;

  // Create .env content
  const envContent = `# Figma API Configuration
# Generated automatically - DO NOT commit this file to Git

# Figma File Key (from Figma URL)
FIGMA_FILE_KEY=${finalFileKey}

# Figma Personal Access Token
# Get it from: Figma → Account Settings → Personal Access Tokens
FIGMA_ACCESS_TOKEN=${accessToken.trim()}

# Figma Node ID (specific page/component to monitor)
# From Figma URL: ...?node-id=8190-20277
FIGMA_NODE_ID=${finalNodeId}
`;

  // Write .env file
  fs.writeFileSync(ENV_FILE, envContent);
  console.log('\n✅ .env file created successfully!');
  console.log(`   Location: ${ENV_FILE}\n`);

  // Verify
  console.log('📝 Configuration saved:');
  console.log(`   File Key: ${finalFileKey}`);
  console.log(`   Access Token: ${accessToken.substring(0, 10)}...`);
  console.log(`   Node ID: ${finalNodeId}\n`);

  console.log('🧪 Testing configuration...');
  console.log('   Run: npm run figma:check\n');

  rl.close();
}

// Run if called directly
if (require.main === module) {
  setupEnv().catch((error) => {
    console.error('❌ Error:', error);
    rl.close();
    process.exit(1);
  });
}

module.exports = { setupEnv };

