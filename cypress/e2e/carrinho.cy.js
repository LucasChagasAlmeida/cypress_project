import loginpage from '../pages/login'
import inventoryPage from '../pages/inventory'
import header from '../pages/header'
import cartPage from '../pages/cart'

describe('carrinho', () => {
  beforeEach(() => {
      //arrange
      cy.visit('/')
      loginpage.login()
    })

    afterEach(() => {
        cy.screenshot()
    })


  it('Should add to backpack', () => {
    //act
    inventoryPage.addProduct('Sauce Labs Backpack')
    //assert
    header.checkCartAmount(1)
    header.goToCart()
    cartPage.verifyLink()
    cartPage.checkItem('Sauce Labs Backpack')
    
  })


  it('Should remove from backpack, main page', () => {
    //act
    inventoryPage.addProduct('Sauce Labs Backpack')
    header.checkCartAmount(1)
    inventoryPage.removeProduct('Sauce Labs Backpack')
    //assert
    header.checkCartAmount(0)
  })

  it('Should remove from backpack, backpack page', () => {
    //act
    inventoryPage.addProduct('Sauce Labs Backpack')
    header.goToCart()
    cartPage.verifyLink()
    cartPage.removeItem('Sauce Labs Backpack')
    //assert
    header.checkCartAmount(0)
    cartPage.checkItemRemoved('Sauce Labs Backpack')
  })
})