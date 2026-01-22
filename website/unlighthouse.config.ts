import { defineUnlighthouseConfig } from 'unlighthouse/config'

// Base configuration shared by both desktop and mobile scans
const baseConfig = {
  site: 'http://localhost:3000',
  // Fail the build if SEO score is below 100
  // Other categories (performance, accessibility, best-practices) will be audited but won't fail the build
  ci: {
    budget: {
      seo: 100,
    },
  },
  puppeteerClusterOptions: {
    maxConcurrency: 2,
  },
  scanner: {
    throttle: true,
    exclude: [
      '/zh-CN/.*',
      '/ko-KR/.*',
      '/id-ID/.*',
      '/ja-JP/.*',
      '/ru-RU/.*',
      '/es-ES/.*',
      '/de-DE/.*',
      '/hi-IN/.*',
    ],
  },
}

// Default to mobile (can be overridden via CLI flags)
export default defineUnlighthouseConfig({
  ...baseConfig,
  // Output path for reports (will be device-specific)
  outputPath: './.unlighthouse',
  scanner: {
    ...baseConfig.scanner,
    device: 'mobile', // Default to mobile
  },
})
