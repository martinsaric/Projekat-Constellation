import { apiURL } from "../support/urls"

describe('Get comments from post using API request', () => {

    it('Verify that the comments can be retrieved from post with API request', () => {

        cy.apiLogin().then(() => {
            const token = Cypress.env('token')

            cy.request({
                method: 'GET',
                url: apiURL.getComments,
                headers: {
                    Authorization: `Bearer ${token}`,
                }

            })

    })

})
})