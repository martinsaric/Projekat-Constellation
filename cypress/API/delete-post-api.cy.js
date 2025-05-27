describe('Delete post using API request', () => {

    it('Verify that the post can be deleted with API request', () => {

        cy.apiLogin().then(() => {
            const token = Cypress.env('token')

            cy.request({
                method: 'DELETE',
                url: 'https://api.hr.constel.co/api/v1/posts/17fe1186-4cb5-44fa-836d-9297a092481d',
                headers: {
                    Authorization: `Bearer ${token}`,
                }
            }).then((response) => {
                expect(response.status).to.eq(200)
            })

        })


    })

})