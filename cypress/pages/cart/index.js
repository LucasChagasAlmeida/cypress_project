import {elements as el} from "./elements"

class cartPage{
    verifyLink(){
        cy.url().should('eq', el.url)
    }

    checkItem(itemName){
        cy.contains(itemName).should('be.visible')
    }

    removeItem(itemName){
        cy.get(el.removeFromCart(itemName)).click()
    }


    checkItemRemoved(itemName){
        cy.get(itemName).should('not.exist')
    }

}


export default new cartPage()