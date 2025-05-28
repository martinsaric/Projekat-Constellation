describe("Create a comment", () => {
  it("Verify that the user can create a comment", () => {
    //Step 1: Cypress command to login with the user credentials
    cy.login("martinsaric94@gmail.com", "constel123");

    //Step 2: Cypress command to create a new post
    cy.createNewPost().then((postTitle) => {
      //Step 3: Cypress command to create a new comment
      cy.createNewComment(postTitle).then((uniqueComment) => {
        //Step 4: Verify that the comment count has changed to 1
        cy.contains(postTitle)
          .parents('div[class="home__main__feed__post__body"]')
          .find("button")
          .should("contain.text", "1");

        //Step 5: Verify that the comment is visible on the page
        cy.get('div[class="post__comments"]').should(
          "contain.text",
          uniqueComment
        );


        //Clean Up
        //Step 6: Delete the comment
        cy.contains('button[type="button"]', "Delete")
          .should("be.visible")
          .click();

        //Step 7: Validating that the comment is deleted
        cy.get('div[class="post__comments"]').should(
          "not.contain.text",
          uniqueComment
        );
      });
    });
  });
});
