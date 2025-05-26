describe('Create an audio post', () => {

    it('Verify that the user can create an audio post', () => {

        const randomNumber = Math.floor(Math.random() * 10000);
        const audioPostTitle = `Audio post #${randomNumber}`;

        cy.visit('/login')
        cy.login('martinsaric94@gmail.com', 'constel123')

        
        cy.get('div.card-body').should('be.visible');
        cy.get('input[placeholder="What\'s happening"]').type(audioPostTitle);
        cy.get('[id="startRecordingButton"]').click()
        cy.get('[class="vizualizerSection "]')
        .should('be.visible')
        cy.get('[aria-label="Stop voice recording button"]')
        .should('be.visible')
        .and('have.css', 'background-color', 'rgb(220, 53, 69)')
        cy.wait(2000)
        cy.get('[aria-label="Stop voice recording button"]').click()
        cy.get('[aria-label="Pause voice recording"]')
        .should('have.css', 'background-color', 'rgb(21, 126, 255)')
        cy.contains('button[type="button"]', 'New post').click();

        cy.get('[class="home__main__feed__post card"]')
        .should('be.visible')
        .and('contain', audioPostTitle)
    })
    
});