describe('OrangeHRM Login', () => {

    it('Login berhasil', () => {

        cy.intercept('POST','**/auth/validate').as('loginRequest')

        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

        cy.get('input[name="username"]').type('Admin')
        cy.get('input[name="password"]').type('admin123')

        cy.get('button[type="submit"]').click()

        cy.wait('@loginRequest')

        cy.url().should('include','dashboard')

    })
    

})