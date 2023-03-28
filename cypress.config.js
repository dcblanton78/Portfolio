const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: '92x6sp',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
