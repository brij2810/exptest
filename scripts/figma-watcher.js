/**
 * Figma Design Watcher
 * Continuously monitors Figma for changes
 */

// Load environment variables from .env file
try {
  require('./load-env.js');
} catch (e) {
  // .env file might not exist yet, that's OK
}

const { checkForChanges } = require('./figma-sync');
const { prepareAIReview } = require('./ai-review');

const CHECK_INTERVAL = 1000; // 1 second in milliseconds

async function watchFigma() {
  console.log('👀 Starting Figma design watcher...');
  console.log(`   Checking every ${CHECK_INTERVAL / 1000} second(s)`);
  console.log('   ⚠️  Note: Very frequent checks may hit API rate limits');
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

