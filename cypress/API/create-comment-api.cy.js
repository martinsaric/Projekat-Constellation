import { apiURL } from "../support/urls";

describe("Create comment using API request", () => {
  it("Verify that the comment can be created with API request", () => {
    cy.apiLogin().then(() => {
      const token = Cypress.env("token");

      const randomNumber = Math.floor(Math.random() * 10000);
      const postTitle = `Test post #${randomNumber}`;
      const uniqueComment = `Test comment #${randomNumber}`;

      cy.apiCreatePost(postTitle).then(() => {
        cy.apiGetPost(postTitle, token).then((myPost) => {
          const postId = myPost.post_id;

          cy.apiCreateComment(postId, uniqueComment, token).then((response) => {
            expect(response.status).to.eq(200);

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
