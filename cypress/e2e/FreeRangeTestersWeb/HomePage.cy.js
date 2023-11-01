describe.only('Home de www.freerangetesters.com', () => {
    beforeEach(() => {
        cy.visit('https://www.freerangetesters.com/')
    })

    it('The page has Free Range Testers as title', () => {
        cy.title()
            .should('include', 'Free Range Testers')
    })

    it('There are 12 trainings displayed in the section Cursos', () => {
        cy.get('#comp-l02x1m8d2label').click()
        cy.get('[data-testid="linkElement"] > .M3I7Z2')
            .should('have.length', 12)
    })

    it('There is a contact form with the fields Name, Last Name, Email and Comments', () => {
        cy.get('#input_comp-l1ed927d')
            .should('exist')
            .and('have.attr', 'name', 'nombre')
        cy.get('#input_comp-l1ed927n')
            .should('exist')
            .and('have.attr', 'name', 'apellido')
        cy.get('#input_comp-l1ed927s')
            .should('exist')
            .and('have.attr', 'name', 'email')
        cy.get('#textarea_comp-l1ed9283')
            .should('exist')
    })

    it('There is a link to the Blog in the navigation bar', () => {
        cy.get('#comp-l02x1m8d1label')
            .should('have.text', 'Blog')
    })

    it('There is a CTA button called Empezá a aprender! in the Home page', () => {
        cy.get('#comp-krjarw4p > [data-testid="linkElement"]')
            .should('have.text', 'Empezá a aprender!')
    })


})