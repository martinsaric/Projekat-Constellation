const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://constel-social-network.vercel.app/",
    setupNodeEvents(on, config) {
      
    },
     


    chromeWebSecurity: false,

    specPattern: [
      'cypress/e2e/**/*.cy.{js,ts}',
      'cypress/api/**/*.cy.{js,ts}'
    ]
  },
});
