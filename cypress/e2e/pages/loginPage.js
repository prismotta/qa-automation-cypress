class LoginPage {

  acessar() {
    cy.visit('https://www.saucedemo.com')
  }

  login(usuario, senha) {
    cy.get('#user-name').clear().type(usuario)
    cy.get('#password').clear().type(senha)
    cy.get('#login-button').click()
  }

}

export default new LoginPage()