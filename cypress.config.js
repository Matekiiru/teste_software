const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "http://localhost:3000",
    supportFile: "cypress/support/e2e.js",
  },

  component: {
    devServer: {
      framework: "next",
      bundler: "webpack",
    },
  },
});
