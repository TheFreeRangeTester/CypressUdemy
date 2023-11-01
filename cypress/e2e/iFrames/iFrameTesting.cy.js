describe('Trabajando con pantallas modales',()=>{

    it('Valido el texto de un elemento dentro del iframe',()=>{
        cy.visit('https://webdriveruniversity.com/IFrame/index.html')
        cy.get('#frame')
        .iframe('body #button-find-out-more > b')
        .should('include.text','Find Out More!')
    })
    

})