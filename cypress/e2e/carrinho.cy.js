describe('carrinho', () => {
  it('Should add to backpack', () => {
    //arrange
    cy.visit('/')
    cy.login()
    
    //act
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
    
    //assert
    cy.get('[data-test="shopping-cart-link"]').should('be.visible').and('have.text', '1')
  })


  it('Should remove from backpack, main page', () => {
    //arrange  
    cy.visit('/')
    cy.login()
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
    
    //act
    cy.get('[data-test="remove-sauce-labs-backpack"]').click() 

    //assert
    cy.get('.shopping_cart_badge').should('not.exist')
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').should('exist')
  })

  it('Should remove from backpack, backpack page', () => {
    //arrange  
    cy.visit('/')
    cy.login()
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
    
    //act
    cy.get('[data-test="shopping-cart-link"]').click() 
    cy.get('[data-test="remove-sauce-labs-backpack"]').click()

    //assert
    cy.get('.shopping_cart_badge').should('not.exist')
    cy.get('[data-test="inventory-item"]').should('not.exist')
    cy.get('[data-test="continue-shopping"]').should('be.visible')
  })
})