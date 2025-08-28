import loginpage from '../pages/login'
import inventoryPage from '../pages/inventory'


describe('login', () => {

    beforeEach(() => {
        //arrange
        cy.visit('/')
    })

    afterEach(() => {
        cy.screenshot(it.name)
    })


    it('Should Login', () => {
        //act
        loginpage.login()
        //assert
        inventoryPage.verifyLink()
    })


    it('Should fail, wrong email', () => {
        //act
        loginpage.login('wrong_user')
        //assert
        loginpage.checkErrorCredentials()
        loginpage.checkUrl()
    })


    it('Should fail, wrong password', () => {
        //act
        loginpage.login('standard_user' ,'wrong_pass');
        //assert
        loginpage.checkErrorCredentials()
        loginpage.checkUrl()
    })
    

    it('Should fail, locked out', () => {
        //act
        loginpage.login('locked_out_user')
        //assert
        loginpage.checkErrorLockedOut()
        loginpage.checkUrl()
    })


})
