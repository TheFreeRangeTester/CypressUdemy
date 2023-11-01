describe('Validaciones implícitas y explícitas',()=>{

    beforeEach(() => {
        cy.visit("https://the-internet.herokuapp.com/")
    })

    it('Validaciones implícitas',()=>{
        cy.contains('Inputs')
        .click()
        cy.get('h3')
        .should('have.text','Inputs')
        cy.get('.example')
        .should('have.class','example')
        .and('be.visible')
        
    }) 

    it('Validaciones explícitas',()=>{
        cy.contains('Inputs').click()
        cy.get('h3')
        expect('Inputs').to.equals('Inputs')
        
    })

    it('Espera que las promesas se resuelvan', () => {
  let waited = false

  function waitOneSecond() {
    // Devuelve una promesa que se da por resuelta al pasar 1 segundo
    return new Cypress.Promise((resolve, reject) => {
      setTimeout(() => {
        // Ponemos el waited en true
        waited = true
        // resuelve con el string 'foo'
        resolve('foo')
      }, 1000)
    })
  }

  cy.wrap(null).then(() => {
    // Devuelve una promesa a cy.then que
    // es esperada (waited) hasta que resuelve.
    return waitOneSecond().then((str) => {
      expect(str).to.eq('foo')
      expect(waited).to.be.true
    })
  })
})
})