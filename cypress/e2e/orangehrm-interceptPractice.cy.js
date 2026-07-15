describe('OrangeHRM Login using Intercept', () => {

    it('Login berhasil Menggunakan Intercept', () => {

        cy.intercept('POST','**/auth/validate').as('loginRequest')

        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

        cy.get('input[name="username"]').type('Admin')
        cy.get('input[name="password"]').type('admin123')

        cy.get('button[type="submit"]').click()

        cy.wait('@loginRequest')

        cy.url().should('include','dashboard')

    })
    // TC002
    it('TC002 - Login with invalid username', () => {
        cy.intercept('POST','**/auth/validate').as('invalidUsername')

        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.get('input[name="username"]').type('Admin123')
        cy.get('input[name="password"]').type('admin123')
        cy.get('button[type="submit"]').click()

        cy.wait('@invalidUsername')

        cy.contains('Invalid credentials').should('be.visible')
    })

})