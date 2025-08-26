describe('login', () => {
    it('Should Login', () => {
        //arrange
        cy.visit('/')
        //act
        cy.login()
        //assert
        cy.url().should('eq', 'https://www.saucedemo.com/inventory.html')
        cy.screenshot()
    })


    it('Should fail, wrong email', () => {
        //arrange
        cy.visit('/')
        //act
        cy.login('wrong_user')
        //assert
        cy.get('[data-test="error"]').should('contain', 'Epic sadface: Username and password do not match any user in this service')
        cy.url().should('eq', 'https://www.saucedemo.com/')
        cy.screenshot()
    })


    it('Should fail, wrong password', () => {
        //arrange
        cy.visit('/')
        //act
        cy.login('standard_user' ,'wrong_pass');
        //assert
        cy.get('[data-test="error"]').should('contain', 'Epic sadface: Username and password do not match any user in this service')
        cy.url().should('eq', 'https://www.saucedemo.com/')
        cy.screenshot()
    })
    

    it('Should fail, locked out', () => {
        //arrange
        cy.visit('https://www.saucedemo.com')
        //act
        cy.login('locked_out_user')
        //assert
        cy.get('[data-test="error"]').should('contain', 'Epic sadface: Sorry, this user has been locked out.')
        cy.url().should('eq', 'https://www.saucedemo.com/')
        cy.screenshot()
    })


})
