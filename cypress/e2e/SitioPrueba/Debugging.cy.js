describe('Utilidades para debugging con Cypress',()=>{

    it('Ejemplo de cy.log',()=>{
    cy.visit('https://the-internet.herokuapp.com/login')
    cy.log('Escribe el username')
    cy.get('#username').type('tomsmith')
    cy.log('Escribe el password')
    cy.get('#password').type('SuperSecretPassword!')
    cy.log('Hace click en el botón de login')
    cy.get('form').contains('Login').click()
    cy.url().should('contain', '/secure')
    })

    it('Ejemplo de cy.pause',()=>{
    cy.visit('https://the-internet.herokuapp.com/login')
    cy.get('#username').type('tomsmith').pause()
    cy.get('#password').pause().type('SuperSecretPassword!')
    cy.get('form').contains('Login').click()
    cy.url().should('contain', '/secure').pause()
    })

    it('Ejemplo de cy.debug',()=>{
    cy.visit('https://the-internet.herokuapp.com/login')
    cy.get('#username').type('tomsmith')
    cy.get('#password').debug().type('SuperSecretPassword!')
    cy.get('form').contains('Login').click()
    cy.url().should('contain', '/secure')
    })
})