import { apiURL } from "../support/urls"

describe('Like post using API request', () => {


    it('Verify that the post can be liked with API request', () => {

        cy.apiLogin().then(() => {

            const token = Cypress.env('token')

            cy.apiCreatePost('Test 2 API').then((response) => {
            console.log(response.body)
            expect(response.status).to.eq(200)
            expect(response.body.status).to.eq('ok')

            cy.request({
                method: 'POST',
                url: apiURL.likePost,
                headers: {
                    Authorization: `Bearer ${token}`,
                }
            })
        })

    })
})
})