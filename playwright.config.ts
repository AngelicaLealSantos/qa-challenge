import { defineConfig } from '@playwright/test';

export default defineConfig({
    testDir: 'tests',
    timeout: 30000,// Tempo para execução dos testes
    workers: process.env.CI ? 1 : undefined,
    retries: process.env.CI ? 2 : 0,
    use: {
        headless: true,
        viewport: { width: 1280, height: 720 },
        video: 'on-first-retry',
        trace: 'on-first-retry',
    },
    reporter: [['html', { outputFolder: 'html-report' }]], // Gera relatório em formato HTML
});