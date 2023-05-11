describe("Visit homepage", () => {
  it("should show account dropdown if logged in", () => {
    cy.visit("/home");
    cy.get('[data-test="homepage-title"]').should("exist");
  });
});

export {};
