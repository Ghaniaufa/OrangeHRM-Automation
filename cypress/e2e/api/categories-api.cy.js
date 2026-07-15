describe('Categories API', () => {

    it('TC001 Get All Categories', () => {

        cy.request('GET',
        'https://api.escuelajs.co/api/v1/categories')

        .then((response)=>{
            //Melihat response status
            expect(response.status).to.eq(200)
            //melihat method menjadi array
            expect(response.body).to.be.an('array')
            //melihat id
            expect(response.body[0]).to.have.property('id')

        })

    })

})