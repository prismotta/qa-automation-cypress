describe('Casos de Teste - Login', () => {

  beforeEach(() => {
    cy.visit('https://www.saucedemo.com')
  })

  it('CT-LOGIN-01 — Login com sucesso', () => {
    cy.login('standard_user', 'secret_sauce')
    cy.url().should('include', '/inventory')
  })

  it('CT-LOGIN-02 — Login inválido', () => {
    cy.login('usuario_errado', 'senha_errada')
    cy.get('.error-message-container')
      .should('be.visible')
  })

  it('CT-LOGIN-03 — Campos obrigatórios em branco', () => {
    cy.get('#login-button').click()
    cy.get('.error-message-container')
      .should('be.visible')
  })

})