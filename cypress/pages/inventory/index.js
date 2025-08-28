import {elements as el} from "./elements"

class inventoryPage {
    verifyLink()
    {
        cy.url().should('eq', el.url)
    }

    addProduct(itemName){
        cy.get(el.addToCart(itemName)).click()
    }

    removeProduct(itemName){
        cy.get(el.removeFromCart(itemName)).click()
    }

}


export default new inventoryPage()