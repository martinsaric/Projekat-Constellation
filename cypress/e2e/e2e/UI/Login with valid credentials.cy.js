describe('Login with valid credentials', () => {

  //Step 1: Visit login page ( root URL)
  beforeEach(() => {
    cy.visit('/login')
  })
  it('Verify that the URL is correct', () => {

    //Step 2: Verify that the URL is correct
    cy.url().should('eql', 'https://constel-social-network.vercel.app/login')

    //Step 3: Cypress command for login flow
    cy.login('martinsaric94@gmail.com', 'constel123')

    //Step 4: Success message validation after login
    cy.get('[class="toast-header"]')
    .should('to.have.text','Login Successful')
    cy.get('[class="text-light toast-body"]')
    .should('to.have.text',`Welcome back! You've successfully logged in to your account.`)
  })
})