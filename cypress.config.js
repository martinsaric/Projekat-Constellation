const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    reporter: 'cypress-mochawesome-reporter',
    baseUrl: "https://constel-social-network.vercel.app/",
    setupNodeEvents(on, config) { 
      require('cypress-mochawesome-reporter/plugin')(on);
      
    },
     


    chromeWebSecurity: false,

    specPattern: [
      'cypress/e2e/**/*.cy.{js,ts}',
      'cypress/api/**/*.cy.{js,ts}'
    ]
  },
});
