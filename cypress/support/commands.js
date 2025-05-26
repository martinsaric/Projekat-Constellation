// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })


// Command for login flow
Cypress.Commands.add('login', (email, password) => {
  cy.visit('/login')
  cy.get('input[placeholder="Enter email here..."]').type(email)
  cy.get('input[placeholder="Enter password here..."]').type(password)
  cy.get('button[id="loginSubmitBtn"]').click()
})

Cypress.Commands.add('logout', () => {
  cy.contains('a[role="button"]', 'Log out').click()
})

Cypress.Commands.add('createNewPost', () => {
  const randomNumber = Math.floor(Math.random() * 10000);
  const postTitle = `Test Post #${randomNumber}`;

  cy.get('div.card-body').should('be.visible');
  cy.get('input[placeholder="What\'s happening"]').type(postTitle);
  cy.contains('button[type="button"]', 'New post').click();

  return cy.wrap(postTitle)
});

Cypress.Commands.add('createNewComment', (postTitle) => {

        const randomNumber = Math.floor(Math.random() * 10000)
        const uniqueComment = `Test comment #${randomNumber}`;      //Step 1: Visit the home page
        cy.visit('/home')

        //Step 2: Find the selector for the "Comment" button and click on it
        cy.contains(postTitle)
        .parents('div[class="home__main__feed__post__body"]')
        .find('button')
        .filter((index, el) => {
            return el.querySelector('svg[data-icon="comment"]')
        })
        .click()

        //Step 3: Verify that the post window is visible
        cy.get('div[class="modal-content"]')
        .should('be.visible')

        //Step 4: Verify that the comment count shows 0 on the new post
        cy.contains(postTitle)
        .parents('div[class="home__main__feed__post__body"]')
        .find('button')
        .should('contain.text', '0')

        //Step 5: Type a comment and click on the "Submit" button
        cy.get('input[placeholder="Write a comment"]').type(uniqueComment)
        cy.get('[id="createInputSubmitBtn"]').click()

        return cy.wrap(uniqueComment);
      })


Cypress.Commands.add('createAudioPost', (audioPostTitle) => {

   cy.get('div.card-body').should('be.visible');
        cy.get('input[placeholder="What\'s happening"]').type(audioPostTitle);
        cy.get('[id="startRecordingButton"]').click()
        cy.get('[class="vizualizerSection "]')
        .should('be.visible')
        cy.get('[aria-label="Stop voice recording button"]')
        .should('be.visible')
        .and('have.css', 'background-color', 'rgb(220, 53, 69)')
        cy.wait(2000)
        cy.get('[aria-label="Stop voice recording button"]').click()
        cy.get('[aria-label="Pause voice recording"]')
        .should('have.css', 'background-color', 'rgb(21, 126, 255)')
        cy.contains('button[type="button"]', 'New post').click();


        return cy.then(() => audioPostTitle);
})

Cypress.Commands.add('apiLogin', () => {

  cy.request({
            method: 'POST',
            url: 'https://api.hr.constel.co/api/v1/login',
            body: {
                email: 'martinsaric94@gmail.com',
                password: 'constel123'
            }
            }).as('login').then((response) => {
                expect(response.status).to.eq(200)
                const token = response.body.token
                console.log(token)
                Cypress.env('token', token);
        })
})