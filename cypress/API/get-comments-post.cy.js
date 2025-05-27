//imported urls from support/urls.js file
import { apiURL } from "../support/urls";

describe("Get comments from post using API request", () => {
  it("Verify that the comments can be retrieved from post with API request", () => {
    //Step 1: Login with API request and get the token
    cy.apiLogin().then(() => {
      const token = Cypress.env("token");

      //Step 2: Generate random post title and unique comment
      const randomNumber = Math.floor(Math.random() * 10000);
      const uniqueComment = `Test comment #${randomNumber}`;
      const postTitle = `Test post #${randomNumber}`;

      //Step 3: Create a new post using API request and validate the response status
      cy.apiCreatePost(postTitle).then((response) => {
        expect(response.status).to.eq(200);

        //Step 4: Get the post and ID
        cy.apiGetPost(postTitle, token).then((myPost) => {
          const postId = myPost.post_id;

          //Step 5: Create a new comment using API request and validate the response status
          cy.apiCreateComment(postId, uniqueComment, token).then((response) => {
            console.log("Comment response:", response.body);
            expect(response.status).to.eq(200);

            //Step 6: Get the comments from the post
            cy.request({
              method: "GET",
              url: apiURL.getComments(postId),
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }).then((response) => {
              //Step 7: Validate the comment is present in the response
              const comments = response.body.comments;
              const myComment = comments.find(
                (comment) => comment.text === uniqueComment
              );
              expect(myComment).to.not.be.undefined;

              //Step 8: Get the comment ID so it can be deleted
              const commentId = myComment.comment_id;

              //Step 9: Delete the comment and validate it
              cy.apiDeleteComment(postId, commentId, token).then((response) => {
                expect(response.status).to.eq(200);
              });
            });
          });
        });
      });
    });
  });
});
