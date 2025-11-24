/**
 * Load Environment Variables
 * Helper to load .env file if it exists
 */

const fs = require('fs');
const path = require('path');

const ENV_FILE = path.join(__dirname, '../.env');

function loadEnv() {
  if (!fs.existsSync(ENV_FILE)) {
    return;
  }

  const envContent = fs.readFileSync(ENV_FILE, 'utf8');
  const lines = envContent.split('\n');

  lines.forEach((line) => {
    const trimmed = line.trim();
    
    // Skip comments and empty lines
    if (trimmed.startsWith('#') || !trimmed.includes('=')) {
      return;
    }

    const [key, ...valueParts] = trimmed.split('=');
    const value = valueParts.join('=').trim();

    // Remove quotes if present
    const cleanValue = value.replace(/^["']|["']$/g, '');

    if (key && cleanValue) {
      process.env[key.trim()] = cleanValue;
    }
  });
}

// Auto-load when module is required
loadEnv();

// Auto-load if called directly
if (require.main === module) {
  console.log('✅ Environment variables loaded from .env');
  console.log('   FIGMA_FILE_KEY:', process.env.FIGMA_FILE_KEY || 'not set');
  console.log('   FIGMA_ACCESS_TOKEN:', process.env.FIGMA_ACCESS_TOKEN ? '***set***' : 'not set');
  console.log('   FIGMA_NODE_ID:', process.env.FIGMA_NODE_ID || 'not set');
}

module.exports = { loadEnv };

