import { defineConfig } from 'vitest/config';
import { config } from 'dotenv';

// Load environment variables from .env.test when running tests
if (process.env.NODE_ENV === 'test') {
  config({ path: '.env.test' });
} else {
  config();
}

export default defineConfig({
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/setUpTests.ts',
  },
});