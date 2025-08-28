import {elements as el} from "./elements"


class loginpage{

    visitPage(){
        cy.visit('/')
    }

    login(login='standard_user', password='secret_sauce'){
        cy.get(el.username).type(login)
        cy.get(el.password).type(password)
        cy.get(el.loginbutton).click()
    }

    checkErrorCredentials(){
        cy.get(el.errorBar).should('contain', el.errorCredentials)
    }

    checkUrl(){
        cy.url().should('eq', el.url) 
    }

    checkErrorLockedOut(){
        cy.get(el.errorBar).should('contain', el.errorLockedOut)

    }
}

export default new loginpage()