describe('OrangeHRM Login Feature', () => {

    beforeEach(() => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.url().should('include', '/auth/login')
    })

    // TC001
    it('TC001 - Login with valid username and password', () => {
        cy.get('input[name="username"]').type('Admin')
        cy.get('input[name="password"]').type('admin123')
        cy.get('button[type="submit"]').click()

        cy.url().should('include', '/dashboard')
        cy.contains('Dashboard').should('be.visible')
    })

    // TC002
    it('TC002 - Login with invalid username', () => {
        cy.get('input[name="username"]').type('Admin123')
        cy.get('input[name="password"]').type('admin123')
        cy.get('button[type="submit"]').click()

        cy.contains('Invalid credentials').should('be.visible')
    })

    // TC003
    it('TC003 - Login with invalid password', () => {
        cy.get('input[name="username"]').type('Admin')
        cy.get('input[name="password"]').type('admin12345')
        cy.get('button[type="submit"]').click()

        cy.contains('Invalid credentials').should('be.visible')
    })

    // TC004
    it('TC004 - Login with invalid username and password', () => {
        cy.get('input[name="username"]').type('user')
        cy.get('input[name="password"]').type('password')
        cy.get('button[type="submit"]').click()

        cy.contains('Invalid credentials').should('be.visible')
    })

    // TC005
    it('TC005 - Login with empty username', () => {
        cy.get('input[name="password"]').type('admin123')
        cy.get('button[type="submit"]').click()

        cy.contains('Required').should('be.visible')
    })

    // TC006
    it('TC006 - Login with empty password', () => {
        cy.get('input[name="username"]').type('Admin')
        cy.get('button[type="submit"]').click()

        cy.contains('Required').should('be.visible')
    })

    // TC007
    it('TC007 - Login with empty username and password', () => {
        cy.get('button[type="submit"]').click()

        cy.contains('Required').should('be.visible')
    })

    // TC008
    it('TC008 - Username is case sensitive', () => {
        cy.get('input[name="username"]').type('admin')
        cy.get('input[name="password"]').type('admin123')
        cy.get('button[type="submit"]').click()

        cy.contains('Invalid credentials').should('be.visible')
    })

    // TC009
    it('TC009 - Password is case sensitive', () => {
        cy.get('input[name="username"]').type('Admin')
        cy.get('input[name="password"]').type('Admin123')
        cy.get('button[type="submit"]').click()

        cy.contains('Invalid credentials').should('be.visible')
    })

    // TC010
    it('TC010 - Login with leading and trailing spaces', () => {
        cy.get('input[name="username"]').type(' Admin ')
        cy.get('input[name="password"]').type(' admin123 ')
        cy.get('button[type="submit"]').click()

        cy.contains('Invalid credentials').should('be.visible')
    })

    // TC011
    it('TC011 - Verify Forgot Password link', () => {
        cy.contains('Forgot your password?').click()

        cy.url().should('include', '/requestPasswordResetCode')
        cy.contains('Reset Password').should('be.visible')
    })

    // TC012
    it('TC012 - Verify login page components', () => {
        cy.get('input[name="username"]').should('be.visible')
        cy.get('input[name="password"]').should('be.visible')
        cy.get('button[type="submit"]').should('be.visible')
        cy.contains('Forgot your password?').should('be.visible')
    })

})