describe("Post form button changes", () => {
  beforeAll(() => {
    cy.viewport(375, 812);
  });

  it("Verify that the ", () => {
    cy.login("martinsaric94@gmail.com", "constel123");

    cy.contains('[type="button"]', "Record audio")
      .should("be.visible")
      .and("have.css", "background-color", "rgb(21, 126, 255)");
  });
});
