Cypress.Commands.add('login', (usuario, senha) => {
  cy.get('#user-name').type(usuario)
  cy.get('#password').type(senha)
  cy.get('#login-button').click()
})