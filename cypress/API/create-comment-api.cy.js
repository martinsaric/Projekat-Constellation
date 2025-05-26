import { apiURL } from "../support/urls"

describe('Create comment using API request', () => {

    it('Verify that the comment can be created with API request', () => {

        cy.apiLogin().then(() => {
            const token = Cypress.env('token')

            cy.request({
                method: 'POST',
                url: apiURL.createComment,
                headers: {
                    Authorization: `Bearer ${token}`,
                },
                body: {
                    content: 'Test comment API'
                }

            }).then((response) => {
                expect(response.status).to.eq(200)
            })
        })
        
    });

})