/* eslint-disable cypress/no-unnecessary-waiting */
describe("homepage", () => {
  before(() => {
    cy.intercept("POST", "/api/auth/callback/credentials?").as("Login");

    cy.clearCookies();
    cy.visit("/");
    cy.get('[data-test="sign-in"]').click();
    cy.get('[data-test="auth-email"]').type(Cypress.env("authEmail"));
    cy.get('[data-test="auth-password"]').type(Cypress.env("authPassword"));
    cy.get('[data-test="auth-submit"]').click();
    cy.url().should("include", Cypress.env("homeUrl"));
    cy.wait("@Login");
  });

  it("find the input, write a sentence, press enter and get results", () => {
    cy.intercept("POST", Cypress.env("apiUrlGraph")).as("GraphQlPostCall");
    cy.get('[data-test="emotion-input"]').should("exist");
    cy.get('[data-test="emotion-input"]').type(
      "I like movies about outdoors adventures"
    );
    cy.wait(1000);
    cy.get('[data-test="emotion-input"]').type("{enter}");
    cy.wait("@GraphQlPostCall");
    cy.get('[data-test="emotion-suggestions"]').should("be.visible");
  });

  it("click on movie to see its details", () => {
    cy.get('[data-test="emotion-movie-poster"]').should("be.visible");
    cy.get('[data-test="emotion-movie-poster"]').eq(0).click();
    cy.url().should("include", "/movie");
  });

  it("click on history to see mood history, and see a couple of cards", () => {
    cy.intercept("POST", Cypress.env("apiUrlGraph")).as("GraphQlPostCall");
    cy.get('[data-test="navbar-history"]').should("be.visible");
    cy.get('[data-test="navbar-history"]').click();
    cy.url().should("include", "/mood/history");
    cy.wait("@GraphQlPostCall");
    cy.get('[data-test="emotion-card"]').should("be.visible");
  });

  it("click on card options, then click on details to access mood details", () => {
    cy.get('[data-test="emotion-card-options"]').eq(0).click();
    cy.get('[data-test="emotion-card-dropdown"]').find("button").eq(0).click();
  });

  it("click back on history to see mood history, and delete card", () => {
    cy.intercept("POST", Cypress.env("apiUrlGraph")).as("GraphQlPostCall");
    cy.get('[data-test="navbar-history"]').should("be.visible");
    cy.get('[data-test="navbar-history"]').click();
    cy.url().should("include", "/mood/history");
    cy.get('[data-test="emotion-card"]').should("be.visible");

    cy.get('[data-test="emotion-card-options"]').eq(0).click();
    cy.get('[data-test="emotion-card-dropdown"]').find("button").eq(1).click();

    cy.get('[data-test="emotion-card-modal-delete"]')
      .find("button")
      .eq(2)
      .click();
  });
});

export {};
