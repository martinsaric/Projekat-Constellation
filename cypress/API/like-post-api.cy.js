import { apiURL } from "../support/urls";

describe("Like post using API request", () => {
  it("Verify that the post can be liked with API request", () => {
    //Step 1: Login with API request
    cy.apiLogin().then(() => {
      //Step 2: Generate a random post title
      const randomNumber = Math.floor(Math.random() * 10000);
      const postTitle = `Test post #${randomNumber}`;
      const token = Cypress.env("token");

      //Step 3: Create a new post using API request and
      //validate the response status
      cy.apiCreatePost(postTitle).then((response) => {
        console.log(response.body);
        expect(response.status).to.eq(200);
        expect(response.body.status).to.eq("ok");

        //Step 4: Get the post ID
        cy.apiGetPost(postTitle, token).then((myPost) => {
          const postId = myPost.post_id;

          //Step 5: Like the post using API request and validate
          // the response status
          cy.apiLikePost(postId, token).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body.status).to.eq("ok");

            //Step 6: Unlike the post because it can't be deleted while it's liked
            cy.apiUnLikePost(postId, token).then((response) => {
              expect(response.status).to.eq(200);


              //Clean Up
              //Step 7: Delete the post using API request and validate
              cy.apiDeletePost(postId, token).then((response) => {
                expect(response.status).to.eq(200);
              });
            });
          });
        });
      });
    });
  });
});
