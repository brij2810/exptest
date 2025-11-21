/**
 * Figma Design Watcher
 * Continuously monitors Figma for changes
 */

const { checkForChanges } = require('./figma-sync');
const { prepareAIReview } = require('./ai-review');

const CHECK_INTERVAL = 15 * 60 * 1000; // 15 minutes in milliseconds

async function watchFigma() {
  console.log('👀 Starting Figma design watcher...');
  console.log(`   Checking every ${CHECK_INTERVAL / 1000 / 60} minutes`);
  console.log('   Press Ctrl+C to stop\n');

  // Initial check
  await checkAndNotify();

  // Set up interval
  const interval = setInterval(async () => {
    await checkAndNotify();
  }, CHECK_INTERVAL);

  // Handle graceful shutdown
  process.on('SIGINT', () => {
    console.log('\n\n🛑 Stopping watcher...');
    clearInterval(interval);
    process.exit(0);
  });
}

async function checkAndNotify() {
  try {
    const hasChanges = await checkForChanges();
    
    if (hasChanges) {
      console.log('\n📢 Changes detected! Preparing for AI review...');
      await prepareAIReview();
      console.log('\n💡 Next steps:');
      console.log('   1. Review .ai-review-prompt.txt');
      console.log('   2. Send prompt to AI assistant');
      console.log('   3. Review changes list');
      console.log('   4. Approve implementation');
      console.log('   5. Run: npm run deploy\n');
    }
  } catch (error) {
    console.error('❌ Error checking for changes:', error.message);
  }
}

if (require.main === module) {
  watchFigma();
}

module.exports = { watchFigma };

