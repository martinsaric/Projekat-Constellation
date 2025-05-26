const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://constel-social-network.vercel.app/login",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
