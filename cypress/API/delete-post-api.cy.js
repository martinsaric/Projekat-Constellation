describe('Delete post using API request', () => {

    it('Verify that the post can be deleted with API request', () => {

        cy.apiLogin().then(() => {
            const token = Cypress.env('token')

            const postId = 'b4953385-f347-41d0-9b77-02d460928517'

            cy.request({
                method: 'DELETE',
                url: `https://api.hr.constel.co/api/v1/posts/${postId}`,
                headers: {
                    Authorization: `Bearer ${token}`,
                }
            }).then((response) => {
                expect(response.status).to.eq(200)
            })

        })


    })

})