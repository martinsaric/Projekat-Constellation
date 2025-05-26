describe('Liking a post functionality', () => {


    it('Verify that the user can like a post', () => {

        //Step 1: Visit the login page and login
        cy.visit('/login')
        cy.login('martinsaric94@gmail.com', 'constel123')

        //Step 2: Create a new post
        cy.createNewPost().then(postTitle => {

            //Step 3: Validating that the new post is visible
            cy.visit('/home')
            cy.contains(postTitle).should('be.visible')

            //Step 4: Like the post
            cy.contains(postTitle)
            .parents('div[class="home__main__feed__post__body"]')
            .find('button')
            .filter((index, el) => {
                return el.querySelector('svg[data-icon="heart"]')
            })
            .click()

            //Step 5: Validating that the like count is increased by 1
            cy.contains(postTitle)
            .parent('div[class="home__main__feed__post__body"]')
            .find('button')
            .should('contain.text', '1')
        })

    })
});