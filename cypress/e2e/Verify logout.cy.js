describe('Logout', () => {

    //Step 1: Visit the login page (root URL)
    beforeEach(() => {
      cy.visit('/')
    })

    it('Verify that the user can logout', () => {

    //Step 2: Login with valid credentials
    cy.login('martinsaric94@gmail.com', 'constel123')

      //Step 3: Click on the logout button
      cy.contains('a[role="button"]', 'Log out').click()

      //Step 4: Verify that the user is redirected to the login page
      cy.url().should('eq', 'https://constel-social-network.vercel.app/login')
    })
})