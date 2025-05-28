describe("Create a post without added text", () => {
  it("User can't create a post without added text", () => {

    //Step 1: Visit the base URL and login with valid credentials
    cy.visit("/");
    cy.login("martinsaric94@gmail.com", "constel123");

    //Step 2: Verify that the "New post" button is disabled when the input is empty
    cy.get(`input[placeholder="What's happening"]`)
      .clear()
      .should("have.value", "");
    cy.contains("button", "New post").should("be.disabled");

    //Step 3: Verify that the "New post" button is enabled when text is added
    cy.get(`input[placeholder="What's happening"]`).type("Test post");
    cy.contains("button", "New post").should("be.enabled");
  });
});
