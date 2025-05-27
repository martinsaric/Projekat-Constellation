describe('Mic permission rejected', () => {
    

    it('User denied microphone access', () => {

        cy.visit('/login', {
            onBeforeLoad(win) {
        cy.stub(win.navigator.mediaDevices, "getUserMedia").rejects(new Error("Permission denied"));
        }
        })
        
        cy.login('martinsaric94@gmail.com', 'constel123')

        cy.get('[id="startRecordingButton"]').click( {force: true });

        cy.get('[id="startRecordingButton"]').should('be.disabled');

  

    })
})