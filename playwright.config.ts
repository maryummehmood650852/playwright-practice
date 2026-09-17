import dotenv from 'dotenv';

dotenv.config();


import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',

  fullyParallel: true,

  reporter: [
    ['html'],
    ['playwright-zephyr', {
      host: 'https://maryummehmood650852.atlassian.net/',
      authorizationToken: 'ATATT3xFfGF0c4i4j7abm4bBqUYbmcYMlGSIz9wxGTLO-90SPBPMKbba8E9Yhcre6HZsDp3Zv7PgmG8KeJ6DKpC8t9IfwqKzZd386be6qDDKyoWjFVwS71LUPb-asAeWBZ_7fUgnvlm3wejpu_loZkGywzTR3fm0Mn0fR2OF_gi0ImOTuH_E_1M=97CAE704', // 👈 Yahan apna lamba API token paste karein
      projectKey: 'SCRUM', 
    }]
  ],

  use: {
    headless: true,
    trace: 'on-first-retry',
  },

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
});