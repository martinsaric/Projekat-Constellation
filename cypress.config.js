const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://constel-social-network.vercel.app/",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },

     specPattern: [
      'cypress/e2e/**/*.cy.{js,ts}',
      'cypress/api/**/*.cy.{js,ts}'
    ]
  },
});
