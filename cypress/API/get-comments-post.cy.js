import { apiURL } from "../support/urls"

describe('Get comments from post using API request', () => {
  
    it('Verify that the comments can be retrieved from post with API request', () => {
    
        cy.apiLogin().then(() => {
        const token = Cypress.env('token')
        const randomNumber = Math.floor(Math.random() * 10000)
        const uniqueComment = `Test comment #${randomNumber}`
        const postTitle = `Test post #${randomNumber}`

        cy.apiCreatePost(postTitle).then((response) => {
            expect(response.status).to.eq(200)

            cy.apiGetPost(postTitle, token).then((myPost) => {
            const postId = myPost.post_id

            cy.apiCreateComment(postId, uniqueComment, token).then((response) => {
                 console.log('Comment response:', response.body)
                expect(response.status).to.eq(200)

                cy.request({
                method: 'GET',
                url: apiURL.getComments(postId),
                headers: {
                    Authorization: `Bearer ${token}`
                }
                }).then((response) => {
                const comments = response.body.comments
                const myComment = comments.find(comment => comment.text === uniqueComment)
                expect(myComment).to.not.be.undefined;
            })
          })
        })
      })
    })
  })
})
