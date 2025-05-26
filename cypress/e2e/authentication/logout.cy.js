describe('Logout', () => {

    it('Verify that the user can logout', () => {

      //Step 1: Visit the login page (root URL)
      cy.visit('/login')
      //Step 2: Login with valid credentials
      cy.login('martinsaric94@gmail.com', 'constel123')

      //Step 3: Cypress command for logout flow
      cy.logout()
        

      //Step 4: Verify that the user is redirected to the login page
      cy.url().should('eq', 'https://constel-social-network.vercel.app/login')
    })
  })