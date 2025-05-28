import { apiUrl } from "../support/urls";

describe("Creating new post", () => {
  it("Verify that the user can create a new post", () => {
    //Step 1: Login with valid credentials
    cy.visit("/login");
    cy.login("martinsaric94@gmail.com", "constel123");

    //Step 2: Create logic to genereate random number for post title
    const randomNumber = Math.floor(Math.random() * 10000);
    const postTitle = `Test Post #${randomNumber}`;

    //Step 3: Create a new post
    cy.get('div[class="card-body"]').should("be.visible");
    cy.get(`input[placeholder="What's happening"]`).type(postTitle);
    cy.contains('button[type="button"]', "New post").click();

    //Step 4: Verify that the post is created
    cy.visit("/home");
    cy.contains(postTitle).should("be.visible");

    //Step 5: Login with API to get token
    cy.apiLogin().then(() => {
      const token = Cypress.env("token");

      //Step 6: Get the created post ID
      cy.apiGetPost(postTitle, token).then((myPost) => {
        const postId = myPost.post_id;


        //Clean Up
        //Step 7: Delete the post
        cy.apiDeletePost(postId, token).then((response) => {
          expect(response.status).to.eq(200);
        })
        .catch((error) => {
          console.error("Error deleting post:", error);
        });
      });
    });
  });
});
