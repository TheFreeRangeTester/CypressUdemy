describe('Tablas estáticas y dinámicas', function () {
   
    it('Validamos texto en una tabla estática', function (){
        //Navegando a la web con tablita.
        cy.visit('https://sqengineer.com/practice-sites/practice-tables-selenium/')
        //Ubicamos la primer columna
        cy.get('#table1 > tbody > tr > td:nth-child(1)').each(($elm, index, $list)=> {
            //Agarramos el texto de cada elemento en la columna 1
            const t = $elm.text();
            //Le ponemos qué estamos buscando que incluya
            if(t.includes('Selenium')){
                //De acá vamos al elemento que le sigue en el DOM. 
                cy.get('#table1 > tbody > tr > td:nth-child(1)').eq(index).next().then(function(p){
                    //Y tomamos el texto del elemento próximo.
                    const r = p.text()
                    //Hacemos una validación de texto sobre este elemento
                    expect(r).to.contains('Commercial');
                })
            }
        })
    })

    it('Validamos una tabla dinámica', function(){
        cy.visit('https://chercher.tech/practice/dynamic-table')
        cy.contains('td', 'facebook.com')
        .prev()
        .find('input')
        .check()
    })

    it('Validamos una tabla dinámica ejemplo 2', function(){
        cy.visit('https://sqengineer.com/practice-sites/practice-tables-selenium/')
        cy.contains('td', 'Ranorex')
        .next()
        .should('have.text','Commercial')
    })
});