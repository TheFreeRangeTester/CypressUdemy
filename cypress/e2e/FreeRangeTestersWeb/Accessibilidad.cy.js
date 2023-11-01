/// <reference types="cypress" />
import 'cypress-axe';

describe('Pruebas de accesibilidad en el sitio Free Range Testers', () => {
    it.only('Debería cumplir con los estándares de accesibilidad', () => {
        cy.visit('https://www.freerangetesters.com');
        cy.injectAxe()
        cy.checkA11y()
    })
})