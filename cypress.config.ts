import { defineConfig } from "cypress";

export default defineConfig({
  env: {
    homeUrl: "/",
    signInUrl: "auth/signin",
    authErrorUrl: "auth/error",
    authEmail: "philemon@test.com",
    authPassword: "MyPassword1!",
    apiUrlGraph: "http://rxgwmcva4r.laravel-sail.site:8080/graphql"
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
    testIsolation: false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
