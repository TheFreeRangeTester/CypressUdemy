describe("Sesiones y cookies",()=>{

  /* it('Sin sesión guardada',()=>{
    cy.visit('https://the-internet.herokuapp.com/login')
    cy.get('#username').type('tomsmith')
    cy.get('#password').type('SuperSecretPassword!')
    cy.get('form').contains('Login').click()
    cy.url().should('contain', '/secure')
  }) */

  /* it("Con sesión guardada",()=>{  
    cy.session('Tom',() => {
    cy.visit('https://the-internet.herokuapp.com/login')
    cy.get('#username').type('tomsmith')
    cy.get('#password').type('SuperSecretPassword!')
    cy.get('form').contains('Login').click()
    cy.url().should('contain', '/secure')
    cy.getCookies().should('have.length',5).then((cookies)=>{
        expect(cookies[0]).to.have.property('name','optimizelyPendingLogEvents')
    })
    })
  }) */

  /* it("Ejemplo getCookies y clearCookies",()=>{  
    cy.session('Tom',() => {
    cy.visit('https://the-internet.herokuapp.com/login')
    cy.get('#username').type('tomsmith')
    cy.get('#password').type('SuperSecretPassword!')
    cy.get('form').contains('Login').click()
    cy.url().should('contain', '/secure')
    cy.getCookies().should('have.length',5).then((cookies)=>{
        expect(cookies[0]).to.have.property('name','optimizelyPendingLogEvents')
    })
    })
    cy.clearCookies()
    cy.getCookies().should('have.length',5)
  }) */

  /* it("Ejemplo getCookie y clearCookie",()=>{  
    cy.session('Tom',() => {
    cy.visit('https://the-internet.herokuapp.com/login')
    cy.get('#username').type('tomsmith')
    cy.get('#password').type('SuperSecretPassword!')
    cy.get('form').contains('Login').click()
    cy.url().should('contain', '/secure')
    cy.getCookie('optimizelyPendingLogEvents').should('exist')
    cy.getCookie('optimizelyPendingLogEvents').should('not.be.null')
    cy.clearCookie('optimizelyPendingLogEvents')
    cy.getCookie('optimizelyPendingLogEvents').should('not.exist')
  })
}) */

it('Setear Cookie',()=>{
    cy.visit('https://the-internet.herokuapp.com/login')
    cy.get('#username').type('tomsmith')
    cy.get('#password').type('SuperSecretPassword!')
    cy.get('form').contains('Login').click()
    cy.url().should('contain', '/secure')
    cy.getCookie('CookieLoca').should('not.exist')
    cy.setCookie('CookieLoca','Oreo')
    cy.getCookie('CookieLoca').should('have.property','value','Oreo')
  })

})