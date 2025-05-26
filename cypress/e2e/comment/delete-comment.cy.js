describe('Delete a comment', () => {    


    it('Verify that the user can delete a comment', () => {

        //Step 1: Visit the login page and login
        cy.visit('/login')
        cy.login('martinsaric94@gmail.com', 'constel123')

        //Step 2: Create a new post
        cy.createNewPost().then(postTitle => {

            //Step 3: Create a new comment
            cy.createNewComment(postTitle).then(uniqueComment => {

            //Step 4: Newly added comment validation
            cy.contains(postTitle)
                .parents('div[class="home__main__feed__post__body"]')
                .find('button')
                .should('contain.text', '1')

            //Step 5: Validating that the comment is visible
            cy.get('div[class="post__comments"]')
                .should('contain.text', uniqueComment)

            //Step 6: Delete the comment
            cy.contains('button[type="button"]', 'Delete')
                .should('be.visible')
                .click()


            //Step 7: Validating that the comment is deleted
            cy.get('div[class="post__comments"]')
                .should('not.contain.text', uniqueComment)

            //Step 8: Validating that the comment count is reduced
            cy.contains(postTitle)
                 .parents('div[class="home__main__feed__post__body"]')
                 .find('button')
                 .should('contain.text', '0')

                
            })

        })
    })
    
});