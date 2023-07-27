describe('Home', () => {
  it('Visits the initial project page', () => {
    cy.visit('/')
    cy.contains('Welcome to lov-dee!')
    cy.contains('Search')
    
  })
})
