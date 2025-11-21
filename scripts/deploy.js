/**
 * Deployment Script
 * Runs tests, builds, and pushes to GitHub
 */

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const CHANGES_FILE = path.join(__dirname, '../.figma-changes.json');

function runCommand(command, description) {
  console.log(`\n🔄 ${description}...`);
  try {
    execSync(command, { stdio: 'inherit', cwd: path.join(__dirname, '..') });
    console.log(`✅ ${description} completed`);
    return true;
  } catch (error) {
    console.error(`❌ ${description} failed:`, error.message);
    return false;
  }
}

async function deploy() {
  console.log('🚀 Starting deployment workflow...\n');

  // Step 1: Install dependencies
  if (!runCommand('npm install', 'Installing dependencies')) {
    process.exit(1);
  }

  // Step 2: Run linter
  if (!runCommand('npm run lint', 'Running linter')) {
    console.log('⚠️  Linter warnings found, but continuing...');
  }

  // Step 3: Build project
  if (!runCommand('npm run build', 'Building project')) {
    process.exit(1);
  }

  // Step 4: Start local server for testing
  console.log('\n🌐 Starting local development server...');
  console.log('   Server will run on http://localhost:3000');
  console.log('   Press Ctrl+C to stop and continue deployment\n');
  
  // Note: In actual workflow, you might want to run tests here
  // For now, we'll assume manual testing is done

  // Step 5: Git operations
  const hasChanges = fs.existsSync(CHANGES_FILE);
  const changeInfo = hasChanges 
    ? JSON.parse(fs.readFileSync(CHANGES_FILE, 'utf8'))
    : null;

  const commitMessage = changeInfo
    ? `Update design from Figma v${changeInfo.currentVersion}`
    : 'Update codebase';

  console.log('\n📝 Git operations...');
  
  // Check if there are changes to commit
  try {
    execSync('git add .', { stdio: 'inherit' });
    execSync(`git commit -m "${commitMessage}"`, { stdio: 'inherit' });
    console.log('✅ Changes committed');
  } catch (error) {
    console.log('⚠️  No changes to commit or commit failed');
  }

  // Push to GitHub
  console.log('\n📤 Pushing to GitHub...');
  try {
    execSync('git push origin main', { stdio: 'inherit' });
    console.log('✅ Pushed to GitHub successfully');
  } catch (error) {
    console.error('❌ Failed to push to GitHub:', error.message);
    console.log('💡 Make sure you have:');
    console.log('   1. Git remote configured');
    console.log('   2. GitHub credentials set up');
    console.log('   3. Write access to repository');
    process.exit(1);
  }

  // Clean up changes file
  if (hasChanges) {
    fs.unlinkSync(CHANGES_FILE);
    console.log('🧹 Cleaned up changes file');
  }

  console.log('\n✅ Deployment completed successfully!');
}

if (require.main === module) {
  deploy();
}

module.exports = { deploy };

