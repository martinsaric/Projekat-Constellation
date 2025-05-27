describe('Delete post using API request', () => {

    it('Verify that the post can be deleted with API request', () => {

        //Step 1: Login with API and get the token
        cy.apiLogin().then(() => {
            const token = Cypress.env('token')

            //Step 2: Generate random post title
            const randomNumber = Math.floor(Math.random() * 10000)
            const postTitle = `Test post #${randomNumber}`

            //Step 3: Create a new post
            cy.apiCreatePost(postTitle).then(() => {

                //Step 4: Get the post ID
                cy.apiGetPost(postTitle, token).then((myPost) => {
                    const postId = myPost.post_id

                    //Step 5: Delete the post
                    cy.apiDeletePost(postId, token).then((response) => {
                        expect(response.status).to.eq(200)
                    })

                })
            })
        })


    })

})