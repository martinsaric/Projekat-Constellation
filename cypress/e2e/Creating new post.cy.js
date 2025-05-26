describe('Creating new post', () => {

    beforeEach(() => {
        cy.visit('/login')
        cy.login('martinsaric94@gmail.com', 'constel123')
        
    })

    it('Verify that the user can create a new post', () => {
        
        const randomNumber = Math.floor(Math.random() * 10000)
        const postTitle = `Test Post #${randomNumber}`


        cy.get('div[class="card-body"]')
        .should('be.visible')
        cy.get(`input[placeholder="What's happening"]`)
        .type(postTitle)
        cy.contains('button[type="button"]', 'New post').click()

        cy.visit('/home')
        cy.contains(postTitle).should('be.visible')
    })
    
});