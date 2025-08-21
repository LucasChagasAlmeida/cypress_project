describe('login', () => {
    it('realizar login com sucesso', () => {
        //arrange
        cy.visit('https://www.saucedemo.com')
        //act
        cy.get('[data-test="username"]').type('standard_user')
        cy.get('[data-test="password"]').type('secret_sauce')
        cy.get('[data-test="login-button"]').click()
        //assert
        cy.url().should('eq', 'https://www.saucedemo.com/inventory.html')
    })


    it('falhar no login, credenciais inválidas', () => {
        //arrange
        cy.visit('https://www.saucedemo.com')
        //act
        cy.get('[data-test="username"]').type('invalid_user')
        cy.get('[data-test="password"]').type('inexisting_sauce')
        cy.get('[data-test="login-button"]').click()
        //assert
        cy.get('[data-test="error"]').should('contain', 'Epic sadface: Username and password do not match any user in this service')
    
        cy.url().should('eq', 'https://www.saucedemo.com/')
    
    })


    


})
