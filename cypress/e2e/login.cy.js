describe('Login', () => {
  it('Login com dados válidos deve permitir acesso ao sistema', () => {
    cy.visit('http://localhost:4000/')
    cy.get('#username').click().type('andressa.ferreira')
    cy.get('#senha').click().type('123456')
    cy.get('#login-section > .btn').click()

    // assert
    cy.contains('h4', 'Realizar Transferência').should('be.visible')
  })
})