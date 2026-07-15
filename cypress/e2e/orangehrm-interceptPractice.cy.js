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
     // TC003
    it('TC003 - Login with invalid password', () => {
        cy.intercept('POST','**/auth/validate').as('invalidPassword')

        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

        cy.get('input[name="username"]').type('Admin')
        cy.get('input[name="password"]').type('admin12345')
        cy.get('button[type="submit"]').click()

        cy.wait('@invalidPassword')

        cy.contains('Invalid credentials').should('be.visible')
    })
    // TC004
    it('TC004 - Login with invalid username and password', () => {
        cy.intercept('POST','**/auth/validate').as('invalidUsernamePassword')

        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

        cy.get('input[name="username"]').type('user')
        cy.get('input[name="password"]').type('password')
        cy.get('button[type="submit"]').click()

        cy.wait('@invalidUsernamePassword')

        cy.contains('Invalid credentials').should('be.visible')
    })
    // TC008
    it('TC008 - Username is case sensitive', () => {
        cy.intercept('POST','**/auth/validate').as('Usersensitive')

        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

        cy.get('input[name="username"]').type('admin')
        cy.get('input[name="password"]').type('admin123')
        cy.get('button[type="submit"]').click()

        cy.wait('@Usersensitive')

        
        cy.url().should('include','dashboard')
    })

    // TC009
    it('TC009 - Password is case sensitive', () => {
        cy.intercept('POST','**/auth/validate').as('Passwordsensitive')

        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

        cy.get('input[name="username"]').type('Admin')
        cy.get('input[name="password"]').type('Admin123')
        cy.get('button[type="submit"]').click()

        cy.wait('@Passwordsensitive')

        cy.contains('Invalid credentials').should('be.visible')
    })

})