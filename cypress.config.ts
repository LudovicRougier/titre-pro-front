import { defineConfig } from "cypress";

export default defineConfig({
  component: {
    specPattern: "src/**/*.component.cy.{js,jsx,ts,tsx}",
    devServer: {
      framework: "next",
      bundler: "webpack",
    },
  },

  e2e: {
    baseUrl: "http://localhost:3000/",
    specPattern: "test/e2e/*.cy.ts",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
