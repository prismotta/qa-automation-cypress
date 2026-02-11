import loginPage from '../pages/loginPage'
import inventoryPage from '../pages/inventoryPage'
import checkoutPage from '../pages/checkoutPage'

describe('Casos de Teste - Checkout', () => {

  beforeEach(() => {
    loginPage.acessar()
    loginPage.login('standard_user', 'secret_sauce')

    inventoryPage.adicionarPrimeiroProduto()
    inventoryPage.acessarCarrinho()
  })

  it('CT-CHECKOUT-01 — Iniciar checkout', () => {

    checkoutPage.iniciarCheckout()
    cy.url().should('include', 'checkout-step-one')

  })

  it('CT-CHECKOUT-02 — Finalizar checkout com dados válidos', () => {

    checkoutPage.iniciarCheckout()
    checkoutPage.preencherFirstName('Pris')
    checkoutPage.preencherLastName('Motta')
    checkoutPage.preencherPostalCode('12345')
    checkoutPage.continuar()
    checkoutPage.finalizar()

    checkoutPage.validarCompraFinalizada()

  })

  it('CT-CHECKOUT-03 — Sem First Name', () => {

    checkoutPage.iniciarCheckout()
    checkoutPage.preencherLastName('Motta')
    checkoutPage.preencherPostalCode('12345')
    checkoutPage.continuar()

    checkoutPage.validarMensagemErro()

  })

  it('CT-CHECKOUT-04 — Sem Last Name', () => {

    checkoutPage.iniciarCheckout()
    checkoutPage.preencherFirstName('Pris')
    checkoutPage.preencherPostalCode('12345')
    checkoutPage.continuar()

    checkoutPage.validarMensagemErro()

  })

  it('CT-CHECKOUT-05 — Sem Postal Code', () => {

    checkoutPage.iniciarCheckout()
    checkoutPage.preencherFirstName('Pris')
    checkoutPage.preencherLastName('Motta')
    checkoutPage.continuar()

    checkoutPage.validarMensagemErro()

  })

  it('CT-CHECKOUT-06 — Cancelar checkout', () => {

    checkoutPage.iniciarCheckout()
    checkoutPage.cancelar()

    cy.url().should('include', 'cart')

  })

  it('CT-CHECKOUT-07 — Validar resumo da compra', () => {

    checkoutPage.iniciarCheckout()
    checkoutPage.preencherFirstName('Pris')
    checkoutPage.preencherLastName('Motta')
    checkoutPage.preencherPostalCode('12345')
    checkoutPage.continuar()

    checkoutPage.validarResumoCompra()

  })

})