describe("Create a post without added text", () => {
  it("User can't create a post without added text", () => {
    cy.visit("/");
    cy.login("martinsaric94@gmail.com", "constel123");

    cy.get(`input[placeholder="What's happening"]`)
      .clear()
      .should("have.value", "");
    cy.contains("button", "New post").should("be.disabled");

    cy.get(`input[placeholder="What's happening"]`).type("Test post");
    cy.contains("button", "New post").should("be.enabled");
  });
});
