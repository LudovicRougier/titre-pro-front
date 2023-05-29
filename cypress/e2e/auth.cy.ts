describe("Auth", () => {
  it("should be redirected to /auth/signin if unauthenticated", () => {
    cy.visit("/home");
    cy.url().should("include", Cypress.env("signInUrl"));
  });

  it("should be redirected to /auth/signin upon clicking on sign-in", () => {
    cy.visit("/");
    cy.get('[data-test="sign-in"]').should("be.visible").click();
    cy.url().should("include", Cypress.env("signInUrl"));
  });

  it("should be redirected to /auth/error if incorrect credentials", () => {
    cy.visit("/");
    cy.get('[data-test="sign-in"]').should("be.visible").click();
    cy.get('[data-test="auth-username"]')
      .should("be.visible")
      .should("have.value", "");
    cy.get('[data-test="auth-password"]')
      .should("be.visible")
      .should("have.value", "");
    cy.get('[data-test="auth-submit"]').should("be.visible").click();
    cy.url().should("include", Cypress.env("authErrorUrl"));
  });

  it("should be redirected to homepage if successful login", () => {
    cy.visit("/");
    cy.get('[data-test="sign-in"]').should("be.visible").click();
    cy.get('[data-test="auth-username"]')
      .should("be.visible")
      .should("have.value", "")
      .type(Cypress.env("authUsername"));
    cy.get('[data-test="auth-password"]')
      .should("be.visible")
      .should("have.value", "")
      .type(Cypress.env("authPassword"));
    cy.get('[data-test="auth-submit"]').should("be.visible").click();
    cy.url().should("include", Cypress.env("homeUrl"));
    cy.get('[data-test="authentificated"]').should("be.visible");
  });
});

export {};
