describe('Login with valid credentials', () => {

  //Step 1: Visit login page ( root URL)
  beforeEach(() => {
    cy.visit('/')
  })
  it('Verify that the URL is correct', () => {

    //Step 2: Verify that the URL is correct
    cy.url().should('eql', 'https://constel-social-network.vercel.app/login')

    //Step 3: Cypress command for login flow
    cy.login('martinsaric94@gmail.com', 'constel123')
  })
})