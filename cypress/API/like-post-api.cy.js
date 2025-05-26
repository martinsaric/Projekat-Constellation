describe('Like post using API request', () => {


    it('Verify that the post can be liked with API request', () => {

        cy.apiLogin().then(() => {
            cy.apiCreatePost('Test 2 API').then((response) => {
            console.log(response.body)
            expect(response.status).to.eq(200)
            expect(response.body.status).to.eq('ok')

            cy.request({
                method: 'POST',
                url: 'https://api.hr.constel.co/api/v1/posts/17fe1186-4cb5-44fa-836d-9297a092481d/like',
                headers: {
                    Authorization: `Bearer ${token}`,
                }
            })
        })

    })
})
})