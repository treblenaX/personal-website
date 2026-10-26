import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './playwright-tests',
  testMatch: ['**/*.spec.ts'],
  timeout: 30000,
  workers: 1,
  reporter: [
    ['line'],
    ['html', { outputDir: 'test-report' }],
  ],
  use: {
    baseURL: 'http://localhost:4321',
    trace: {
      retries: 0,
      screenshots: 'on',
      snapshots: 'on',
    },
  },
  webServer: {
    command: 'npm run dev',
    url: 'http://localhost:4321/',
    reuseExistingServer: !process.env.CI,
  },
  retries: 1,
  workers: 1,
});