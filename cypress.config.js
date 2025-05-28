const { defineConfig } = require("cypress");

module.exports = defineConfig({

  //Added reporter to the config outside e2e
  reporter: 'cypress-mochawesome-reporter',
  
  e2e: {
    
    baseUrl: "https://constel-social-network.vercel.app/",
    setupNodeEvents(on, config) { 
      //Another part of adding reported, inside of setupNodeEvents
      require('cypress-mochawesome-reporter/plugin')(on);
      
    },
     
    video: true,
    videoCompression: 32,  // Medium compression 
    videoUploadOnPass: false,  // Video will not be upload if tests pass
    screenshotOnRunFailure: true,  // Screenshot will be made if test fail

    //To avoid web security and restrictions for smooth testing
    chromeWebSecurity: false,

    //To see both folders on the cypress runner
    specPattern: [
      'cypress/e2e/**/*.cy.{js,ts}',
      'cypress/api/**/*.cy.{js,ts}'
    ]
  },
});
