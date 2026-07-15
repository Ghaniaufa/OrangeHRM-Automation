import LoginPage from '../pages/LoginPage'
import data from '../fixtures/loginData.json'

const login = new LoginPage()

describe('OrangeHRM Login POM', () => {
    //TC001
    it('TC001 - Login Success', () => {

        login.visit()
        login.inputUsername(data.validUser)
        login.inputPassword(data.validPassword)
        login.clickLogin()
        login.verifyDashboard()

    })
    //TC002
    it('TC002 Empty Username',()=>{

        login.visit()
        login.inputUsername(data.empty)
        login.inputPassword(data.validPassword)
        login.clickLogin()
        cy.contains('Required').should('be.visible')

    })
    //TC003
    it('TC003 Empty Password',() => {

        login.visit()
        login.inputUsername(data.validPassword)
        login.inputPassword(data.empty)
        login.clickLogin()
        cy.contains('Required').should('be.visible')
    })
    //TC004
    it('TC004 Empty Username and Password',() => {

        login.visit()
        login.inputUsername(data.empty)
        login.inputPassword(data.empty)
        login.clickLogin()
        cy.contains('Required').should('be.visible')
    })


})