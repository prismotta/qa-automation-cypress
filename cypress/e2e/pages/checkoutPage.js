class CheckoutPage {

  iniciarCheckout() {
    cy.contains('Checkout').click()
  }

  preencherFirstName(nome) {
    cy.get('#first-name').clear().type(nome)
  }

  preencherLastName(sobrenome) {
    cy.get('#last-name').clear().type(sobrenome)
  }

  preencherPostalCode(cep) {
    cy.get('#postal-code').clear().type(cep)
  }

  continuar() {
    cy.get('#continue').click()
  }

  finalizar() {
    cy.get('#finish').click()
  }

  cancelar() {
    cy.contains('Cancel').click()
  }

  validarMensagemErro() {
    cy.get('.error-message-container')
      .should('be.visible')
  }

  validarCompraFinalizada() {
    cy.contains('Thank you for your order!')
      .should('be.visible')
  }

  validarResumoCompra() {
    cy.get('.summary_info')
      .should('be.visible')
  }

}

export default new CheckoutPage()