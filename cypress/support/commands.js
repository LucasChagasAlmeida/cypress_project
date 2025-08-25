Cypress.Commands.add('login', (login='standard_user', password='secret_sauce') => {
    cy.get('[data-test="username"]').type(login)
    cy.get('[data-test="password"]').type(password)
    cy.get('[data-test="login-button"]').click()
})