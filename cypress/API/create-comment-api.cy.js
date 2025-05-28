import { apiUrl } from "../support/urls";

describe("Create comment using API request", () => {
  it("Verify that the comment can be created with API request", () => {

    //Step 1: Login with API request and get a token
    cy.apiLogin().then(() => {
      const token = Cypress.env("token");

      //Step 2: Generate a random post title and unique comment
      const randomNumber = Math.floor(Math.random() * 10000);
      const postTitle = `Test post #${randomNumber}`;
      const uniqueComment = `Test comment #${randomNumber}`;

      //Step 3: Create a post and get a post ID
      cy.apiCreatePost(postTitle).then(() => {
        cy.apiGetPost(postTitle, token).then((myPost) => {
          const postId = myPost.post_id;

          //Step 4: Create a comment and verify response status code
          cy.apiCreateComment(postId, uniqueComment, token).then((response) => {
            expect(response.status).to.eq(200);

            //Step 5: Verify that the comment was created successfully
            cy.apiGetComment(postId, uniqueComment, token).then(
              (foundComment) => {
                expect(foundComment.text).to.eq(uniqueComment);
              }
            );
          });
        });
      });
    });
  });
});
