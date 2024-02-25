const { defineConfig } = require('cypress');

module.exports = defineConfig({
    e2e: {
        loginUrl: 'https://auth.abtasty.com/login',
        baseURL: 'https://www.abtasty.com/',
        specPattern: 'cypress/autotests/**/*.cy.{js,jsx}',
        setupNodeEvents(on, config) {
            require('cypress-mochawesome-reporter/plugin')(on);
        }
    },
    reporter: 'cypress-mochawesome-reporter',
    reporterOptions: {
        charts: true,
        embeddedScreenshots: true,
        inlineAssets: true,
        saveAllAttempts: false
    },
    watchForFileChanges: false
});
