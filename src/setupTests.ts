import { afterEach } from 'vitest';
import { cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/vitest';
import { config } from 'dotenv';

// Load environment variables from .env.test
config({ path: '.env.test' });

afterEach(() => {
    cleanup();
  });