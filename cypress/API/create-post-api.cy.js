describe("Create post with API request", () => {
  it("Verify that the post can be created with API request", () => {
    cy.apiLogin().then(() => {
      const token = Cypress.env("token");
      const randomNumber = Math.floor(Math.random() * 10000);
      const postTitle = `Test post #${randomNumber}`;

      cy.apiCreatePost(postTitle).then((response) => {
        expect(response.status).to.eq(200);
      });
    });
  });
});
