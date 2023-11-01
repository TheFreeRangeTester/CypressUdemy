const testData = require('../../fixtures/titulos.json')

testData.forEach((testData)=>{
    describe('El título es el correcto para cada subpágina en Free Range Testers',()=>{

        it('Valida que '+testData.Title +' sea el título de '+testData.Location, () => {
            cy.visit(testData.Location)
            cy.title().should('include',testData.Title)
        });
    })
})