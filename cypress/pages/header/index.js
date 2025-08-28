import {elements as el} from "./elements"

class header{

    checkCartAmount(amount){
        if(amount>0){
            cy.get(el.cartLink).should('be.visible').and('have.text', amount.toString())    
        }
        else if(amount == 0){
            cy.get(el.cartBadge).should('not.exist')

        }
        
    }

    goToCart(){
        cy.get(el.cartLink).click()
    }
}

export default new header()