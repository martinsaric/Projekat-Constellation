import { apiUrl } from "../support/urls";

describe("Create post with API request", () => {
  it("Verify that the post can be created with API request", () => {

    //Step 1: Login with API request and get a token
    cy.apiLogin().then(() => {
      const token = Cypress.env("token");

      //Step 2: Generate a random post title
      const randomNumber = Math.floor(Math.random() * 10000);
      const postTitle = `Test post #${randomNumber}`;

      //Step 3: Create a post with API request and verify response status code
      cy.apiCreatePost(postTitle).then((response) => {
        expect(response.status).to.eq(200);

        //Step 4: Get the post ID
        cy.apiGetPost(postTitle, token).then((myPost) => {
          const postId = myPost.post_id;

          //Clean Up
          //Step 5: Delete the post
          cy.apiDeletePost(postId, token).then((response) => {
            expect(response.status).to.eq(200);
          });
        });
      });
    });
  });
});
