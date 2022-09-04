const { defineConfig } = require('cypress')

module.exports = defineConfig({
  video: false,
  defaultCommandTimeout: 5000,
  pageLoadTimaout: 8000,
  waitForAnimations: true,
  reporter: 'mochawesome',
  chromeWebSecurity: false,
  reporterOptions: {
    reportDir: 'cypress/reports',
    overwrite: false,
    html: true,
    json: false,
  },
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.cy.js')(on, config)
    },
    specPattern: 'cypress/**/*.cy.{js,jsx,ts,tsx}',
  },
})

