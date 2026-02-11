describe('Testes de API - JSONPlaceholder', () => {

  it('Deve retornar 200 no GET /posts', () => {
    cy.request('GET', 'https://jsonplaceholder.typicode.com/posts')
      .then((response) => {
        expect(response.status).to.eq(200)
        expect(response.body).to.have.length.greaterThan(0)
      })
  })

  it('Deve criar um post com sucesso (POST)', () => {
    cy.request('POST', 'https://jsonplaceholder.typicode.com/posts', {
      title: 'Teste Cypress',
      body: 'Aprendendo API',
      userId: 1
    }).then((response) => {
      expect(response.status).to.eq(201)
      expect(response.body).to.have.property('id')
    })
  })

  it('Deve retornar 404 para rota inválida', () => {
    cy.request({
      method: 'GET',
      url: 'https://jsonplaceholder.typicode.com/rota-invalida',
      failOnStatusCode: false
    }).then((response) => {
      expect(response.status).to.eq(404)
    })
  })

})