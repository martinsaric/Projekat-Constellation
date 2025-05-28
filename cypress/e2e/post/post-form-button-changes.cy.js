describe("Post form button changes", () => {

  //Step 1: Before all tests, set screen size to mobile
  beforeEach(() => {
    cy.viewport(375, 812);
  });

  it("Verify that the ", () => {

    //Step 2: Login with valid credentials
    cy.login("martinsaric94@gmail.com", "constel123");

    //Step 3: Verify that the "Record audio" button is 
    // visible and has the correct background color
    cy.contains('[type="button"]', "Record audio")
      .should("be.visible")
      .and("have.css", "background-color", "rgb(21, 126, 255)")
      .and("have.text", "Record audio");
  });
});
