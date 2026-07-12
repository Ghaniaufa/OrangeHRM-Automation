describe('OrangeHRM Login Feature', () => {

    beforeEach(() => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')
        cy.url().should('include', '/auth/login')
    })


})