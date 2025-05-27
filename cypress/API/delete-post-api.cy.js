describe('Delete post using API request', () => {

    it('Verify that the post can be deleted with API request', () => {

        cy.apiLogin().then(() => {
            const token = Cypress.env('token')

            const randomNumber = Math.floor(Math.random() * 10000)
            const postTitle = `Test post #${randomNumber}`

            cy.apiCreatePost(postTitle).then(() => {

                cy.apiGetPost(postTitle, token).then((myPost) => {
                    const postId = myPost.post_id

                    cy.apiDeletePost(postId, token).then((response) => {
                        expect(response.status).to.eq(200)
                    })

                })
            })
        })


    })

})