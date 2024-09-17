import { test, expect, devices } from '@playwright/test';

// Use the iPhone 11 device for mobile emulation
test.use({ ...devices['iPhone 15'] });