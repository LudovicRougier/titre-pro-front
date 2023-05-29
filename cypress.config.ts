import { defineConfig } from "cypress";

export default defineConfig({
  env: {
    homeUrl: "/",
    signInUrl: "auth/signin",
    authErrorUrl: "auth/error",
    authUsername: "atuny0",
    authPassword: "9uQFF1Lh",
  },
  component: {
    specPattern: "src/**/*.component.cy.{js,jsx,ts,tsx}",
    devServer: {
      framework: "next",
      bundler: "webpack",
    },
  },
  e2e: {
    baseUrl: "http://localhost:3000/",
    specPattern: "cypress/e2e/*.cy.ts",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
