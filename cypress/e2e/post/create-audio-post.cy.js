describe('Create an audio post', () => {

    it('Verify that the user can create an audio post', () => {

        const randomNumber = Math.floor(Math.random() * 10000);
        const audioPostTitle = `Audio post #${randomNumber}`;

        cy.visit('/login')
        cy.login('martinsaric94@gmail.com', 'constel123')

        cy.createAudioPost(audioPostTitle).then(() => {

            cy.intercept('GET', 'https://api.hr.constel.co/api/v1/posts').as('getAudioPost')
            cy.visit('/home')
            cy.wait('@getAudioPost')
            cy.get('[class="home__main__feed__post card"]')
            .should('be.visible')
            .and('contain', audioPostTitle)
        })

        cy.apiLogin().then(() => {
            const token = Cypress.env('token')

            cy.apiGetPost(audioPostTitle, token).then((myPost) => {
                const postId = myPost.post_id

                cy.apiDeletePost(postId, token).then((response) => {
                    expect(response.status).to.eq(200)
                })
            })
        })
    })
})