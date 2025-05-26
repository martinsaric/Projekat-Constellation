describe('Create post with API request', () => {

    it('Verify that the post can be created with API request', () => {

        cy.apiLogin()
         const token = Cypress.env('token')

        cy.request({
            method: 'POST',
            url: 'https://api.hr.constel.co/api/v1/posts',
            headers: {
                Authorization: `Bearer ${token}`
            },
            body: {
                content: 'Testing post with API request'
            }
        }).then((response) => {
            expect(response.status).to.eq(201)
            expect(response.body.content).to.eq('Testing post with API request')
        })
    })

})