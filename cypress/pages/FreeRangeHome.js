class FreeRangeHome {
    //Locators
    empezarButton(){
        return cy.get('#comp-krjarw4p > [data-testid="linkElement"] > ._1Qjd7:visible')
    }

    //Acciones sobre los elementos
    clickABotonEmpezar(){
        this.empezarButton().click()
    }

    //Navegación
    navigateToHome(){
        cy.visit('https://www.freerangetesters.com/')
    }

    ejemploCallback(){
        cy.get("boton1").click().then(() =>{
            cy.get("boton2").click()
        })
    }

    // Define la acción que se pasará como callback
    action = () => {
        cy.get('button').click();
    }

    // Define la función que recibirá el callback
    performActionWithCallback = (callback) => {
        cy.visit('https://example.com');
        callback();
    }

    // Llamada a la función con el callback
    performActionWithCallback(action);




    
}

export default FreeRangeHome
