import { apiURL } from "../support/urls"

describe('Create comment using API request', () => {

    it('Verify that the comment can be created with API request', () => {

        cy.apiLogin().then(() => {
            const token = Cypress.env('token')

            cy.apiCreatePost('Test API gorilla').then((response) => {
                console.log(response.body);


                cy.request({
                    method: 'GET',
                    url: 'https://api.hr.constel.co/api/v1/posts',
                    headers: {
                        Authorization: `Bearer ${token}`,
                    }
                })


                cy.request({
                method: 'POST',
                url: apiURL.createComment,
                headers: {
                    Authorization: `Bearer ${token}`,
                },
                body: {
                    text: 'Test comment API'
                }

            }).then((response) => {
                expect(response.status).to.eq(200)
            })
            })

           
        })
        
    });

})