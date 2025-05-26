describe('Create post with API request', () => {

    it('Verify that the post can be created with API request', () => {

        cy.apiLogin().then(() => {
            cy.apiCreatePost('Test 2 API').then((response) => {
            console.log(response.body)
            expect(response.status).to.eq(200)
            expect(response.body.status).to.eq('ok')
        })
       
        })

    })
})