import { defineUnlighthouseConfig } from 'unlighthouse/config'

export default defineUnlighthouseConfig({
  site: 'http://localhost:3000',
  // Fail the build if SEO score is below 100
  // Other categories (performance, accessibility, best-practices) will be audited but won't fail the build
  ci: {
    budget: {
      seo: 100,
    },
  },
  // Output path for reports
  outputPath: './.unlighthouse',
})
