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
       it('TC002 Get Category by ID',()=>{

    cy.request('GET',
    'https://api.escuelajs.co/api/v1/categories/1')

    .then((response)=>{

        expect(response.status).to.eq(200)

        expect(response.body.id).to.eq(1)

        expect(response.body).to.have.property('name')

    })

    })
       it('TC003 Get Category by ID',()=>{

    cy.request('GET',
    'https://api.escuelajs.co/api/v1/categories/2')

    .then((response)=>{

        expect(response.status).to.eq(200)

        expect(response.body.id).to.eq(2)

        expect(response.body).to.have.property('name')

    })
    

    })
    it('TC004 Create Category',()=>{

    cy.fixture('category').then((data)=>{

        cy.request({

            method:'POST',

            url:'https://api.escuelajs.co/api/v1/categories',

            body:data

        }).then((response)=>{

            expect(response.status).to.eq(201)

            expect(response.body.name).to.eq(data.name)

            expect(response.body).to.have.property('id')

        })

    })

})
it('TC005 Update Category',()=>{

    cy.request({

        method:'PUT',

        url:'https://api.escuelajs.co/api/v1/categories/10',

        body:{

            name:'Basketball',

            image:'https://picsum.photos/640/640?r=200'

        }

    }).then((response)=>{

        expect(response.status).to.eq(200)

        expect(response.body.name).to.eq('Basketball')

    })

})
    


})
