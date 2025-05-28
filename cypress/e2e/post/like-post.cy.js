describe("Liking a post functionality", () => {
  let postTitle;

  it("Verify that the user can like a post", () => {
    //Step 1: Visit the login page and login
    cy.visit("/login");
    cy.login("martinsaric94@gmail.com", "constel123");

    //Step 2: Create a new post
    cy.createNewPost().then((title) => {
      postTitle = title;

      //Step 3: Validating that the new post is visible
      cy.visit("/home");
      cy.contains(postTitle).should("be.visible");

      //Couldn't find more stable selector for the like button
      //Step 4: Like the post
      cy.contains(postTitle)
        .parents('div[class="home__main__feed__post__body"]')
        .find("button")
        .filter((index, el) => {
          return el.querySelector('svg[data-icon="heart"]');
        })
        .click();

      //Step 5: Validating that the like count is increased by 1
      cy.contains(postTitle)
        .parent('div[class="home__main__feed__post__body"]')
        .find("button")
        .should("contain.text", "1");
    });

    //Step 6: Login with API to get token
    cy.apiLogin().then(() => {
      const token = Cypress.env("token");

      //Step 7: Get the created post ID
      cy.apiGetPost(postTitle, token).then((myPost) => {
        const postId = myPost.post_id;

        //Step 8: Unlike the post (It can't be deleted with like)
        cy.apiUnLikePost(postId, token).then(() => {

          //Clean Up
          //Step 9: Delete the post
          cy.apiDeletePost(postId, token).then((response) => {
            expect(response.status).to.eq(200)
          });
        });
      });
    });
  });
});
