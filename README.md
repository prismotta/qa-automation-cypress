# QA Automation - Cypress

Projeto de automação de testes E2E e API utilizando Cypress com padrão Page Object.

## Tecnologias

- Cypress
- JavaScript
- Node.js
- Git

## Estrutura do Projeto

cypress/
  e2e/
    pages/
    tests/

## Casos Automatizados

### Login
- CT-LOGIN-01 — Login com credenciais válidas
- CT-LOGIN-02 — Login com senha inválida
- CT-LOGIN-03 — Login com campos obrigatórios em branco

### Carrinho
- CT-CART-01 — Adicionar produto ao carrinho
- CT-CART-02 — Remover produto do carrinho

### Checkout
- CT-CHECKOUT-01 — Iniciar checkout
- CT-CHECKOUT-02 — Finalizar checkout com dados válidos
- CT-CHECKOUT-03 — Checkout sem preencher First Name
- CT-CHECKOUT-04 — Checkout sem preencher Last Name
- CT-CHECKOUT-05 — Checkout sem preencher Postal Code
- CT-CHECKOUT-06 — Cancelar checkout
- CT-CHECKOUT-07 — Validar resumo da compra

### API
- GET /posts — Validação de status 200
- POST /posts — Validação de status 201
- Rota inválida — Validação de status 404

## Como executar o projeto

Instalar dependências:

npm install

Executar Cypress:

npx cypress open

## Autora

Priscila Motta