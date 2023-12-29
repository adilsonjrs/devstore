describe('adicionar produto ao carrinho', () => {
  beforeEach(() => {
    cy.visit('/')
  })
  it('deve ser possível navegar para a página do produto', () => {
    cy.get('a[href^="/product"]').first().click()
    cy.url().should('include', '/product')
    cy.contains('Adicionar ao carrinho').click()
    cy.contains('Cart (1)').should('exist')
  })

  it('Procurar produto e adicionar ao carrinho', () => {
    cy.searchByQuery('moletom')
    cy.get('a[href^="/product"]').first().click()
    cy.location('pathname').should('include', '/product')
    cy.contains('Adicionar ao carrinho').click()
    cy.contains('Cart (1)').should('exist')
  })

  it('Não adicione se clicar 2 vezes no adicionar', () => {
    cy.get('a[href^="/product"]').first().click()
    cy.url().should('include', '/product')
    cy.contains('Adicionar ao carrinho').click()
    cy.contains('Adicionar ao carrinho').click()
    cy.contains('Cart (1)').should('exist')
  })

})