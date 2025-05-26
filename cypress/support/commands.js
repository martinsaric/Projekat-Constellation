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
        //Step 1: Visit the home page
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
        cy.get('input[placeholder="Write a comment"]').type('New comment added')
        cy.get('[id="createInputSubmitBtn"]').click()
      })
