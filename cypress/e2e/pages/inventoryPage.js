class InventoryPage {

  adicionarPrimeiroProduto() {
    cy.get('.inventory_item').first().within(() => {
      cy.contains('Add to cart').click()
    })
  }

  acessarCarrinho() {
    cy.get('.shopping_cart_link').click()
  }

}

export default new InventoryPage()