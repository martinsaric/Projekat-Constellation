describe("Login with API request", () => {
  it("Verify that the user can login with API request", () => {
    //Step 1: Login with API request
    cy.apiLogin().then((response) => {
      expect(response.status).to.eq(200);
    });
  });
});
