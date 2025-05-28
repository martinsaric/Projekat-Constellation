import { apiURL } from "../support/urls";

describe("Create an audio post", () => {
  it("Verify that the user can create an audio post", () => {

    //Step 1: Generate a random audio post title
    const randomNumber = Math.floor(Math.random() * 10000);
    const audioPostTitle = `Audio post #${randomNumber}`;

    //Step 2: Visit login page and allow access to the microphone
    cy.visit("/login", {  onBeforeLoad(win) {
        cy.stub(win.navigator.mediaDevices, "getUserMedia").resolves(new MediaStream());
      }
    });

    //Step 3: Login with valid credentials
    cy.login("martinsaric94@gmail.com", "constel123");

    //Step 4: Create an audio post and intercept the API request
    cy.createAudioPost(audioPostTitle).then(() => {
      cy.intercept("GET", "https://api.hr.constel.co/api/v1/posts").as(
        "getAudioPost"
      );
      cy.visit("/home");
      cy.wait("@getAudioPost");
      cy.get('[class="home__main__feed__post card"]')
        .should("be.visible")
        .and("contain", audioPostTitle);
    });

    //Step 5: Login with API and get a token
    cy.apiLogin().then(() => {
      const token = Cypress.env("token");

      //Step 6: Get a post ID
      cy.apiGetPost(audioPostTitle, token).then((myPost) => {
        const postId = myPost.post_id;


        //Clean Up
        //Step 7: Delete the post with API request
        cy.apiDeletePost(postId, token).then((response) => {
          expect(response.status).to.eq(200);
        })
        .catch((error) => {
          console.error("Error deleting post:", error);
        })
      });
    });
  });
});
