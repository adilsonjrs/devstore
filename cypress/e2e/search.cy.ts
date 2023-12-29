describe('procurar produtos', () => {

  it('deve ser possível buscar um produto e adicionar ao carrinho', () => {
    cy.searchByQuery('moletom')
    cy.location('pathname').should('include', '/search')
    cy.location('search').should('include', 'q=moletom')
    cy.get('a[href^="/product"]').should('exist')
  })

  it('redicrecionamento automatico caso não tenha parametros na busca', () => {
    cy.on('uncaught:exception', () => { return false })
    cy.visit('/search')
    cy.location('pathname').should('equal', '/')
  })
})