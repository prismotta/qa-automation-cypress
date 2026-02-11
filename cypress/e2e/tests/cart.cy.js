describe('Casos de Teste - Carrinho', () => {

  beforeEach(() => {
    cy.visit('https://www.saucedemo.com')
    cy.login('standard_user', 'secret_sauce')
  })

  it('CT-CART-01 — Adicionar produto ao carrinho', () => {

    cy.get('.inventory_item').first().within(() => {
      cy.contains('Add to cart').click()
    })

    cy.get('.shopping_cart_badge')
      .should('have.text', '1')

    cy.get('.shopping_cart_link').click()

    cy.get('.cart_item')
      .should('have.length', 1)

  })

  it('CT-CART-02 — Remover produto do carrinho', () => {

    cy.get('.inventory_item').first().within(() => {
      cy.contains('Add to cart').click()
    })

    cy.get('.shopping_cart_link').click()

    cy.contains('Remove').click()

    cy.get('.cart_item')
      .should('not.exist')

  })

})