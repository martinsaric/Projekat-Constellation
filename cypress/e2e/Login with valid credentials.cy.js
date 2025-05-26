describe('Login with valid credentials', () => {

  //Step 1: Visit login page ( root URL)
  beforeEach(() => {
    cy.visit('/')
  })
  it('Verify that the URL is correct', () => {

    //Step 2: Verify that the URL is correct
    cy.url().should('eql', 'https://constel-social-network.vercel.app/login')

    //Step 3: Enter the valid email and password
    cy.get('input[placeholder="Enter email here..."]').type('martinsaric94@gmail.com')
    cy.get('input[placeholder="Enter password here..."]').type('constel123')

    //Step 4: Click on the "Submit" (login) button
    cy.get('button[id="loginSubmitBtn"]').click()
  })
})