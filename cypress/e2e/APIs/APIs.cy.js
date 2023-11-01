describe('Pruebas en API con Cypress', () => {

    it('El endpoint "posts" responde con status 200', () => {
        cy.request({
            url: 'https://jsonplaceholder.typicode.com/posts'
        }).then((respuesta) => {
            expect(respuesta.status).to.eq(200)
        })
    })

    it('El endpoint "posts" tiene 100 entradas', () => {
        cy.visit('https://jsonplaceholder.typicode.com')
        cy.request('/posts')
            .its('body')
            .should('have.length', 100)
    })

    it('El post número 1, tiene por título "sunt aut facere repellat provident occaecati excepturi optio reprehenderit"', () => {
        cy.visit('https://jsonplaceholder.typicode.com')
        cy.request('/posts/1')
            .its('body')
            .should('have.property', 'title', 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit')
    })

    it('Ejemplo de un request del tipo POST', () => {
        cy.request('POST', 'https://jsonplaceholder.typicode.com/posts', {
            userId: 'Pato',
            id: '1',
            title: 'Un cuento chino',
            body: 'Los cosos que escribo'
        }).then(
            (response) => {
                // response.body serializa automáticamente en JSON
                expect(response.body).to.have.property('title', 'Un cuento chino')
            }
        )
    })

    it('El PUT request funciona correctamente para el endpoint', () => {
        cy.request('PUT', 'https://jsonplaceholder.typicode.com/posts/2', {
            title: 'Relatos Salvajes',
            body: 'Una película argentina'
        }).then((respuesta) => {
            expect(respuesta.body).to.have.property('title', 'Relatos Salvajes')
        })

    })

    it('El DELETE request funciona correctamente para el endpoint', () => {
        cy.request('DELETE', 'https://jsonplaceholder.typicode.com/posts/1')
    })

    it.only('Simula una solicitud GET a /posts con Stub', () => {
        // Datos de ejemplo para simular la respuesta del servidor
        const samplePosts = [
            {
                userId: 1,
                id: 1,
                title: 'El Carpincho del día',
                body: 'Esto es falso',
            },
            {
                userId: 2,
                id: 2,
                title: 'Argentina para el mundo',
                body: 'Free Range Tester data falsa',
            },
        ];

        // Creación del Stub para simular la respuesta del servidor
        cy.intercept('GET', 'https://jsonplaceholder.typicode.com/posts', samplePosts).as('getPosts');


        // Visita la página de la aplicación donde se realiza la solicitud a la API
        cy.visit('https://jsonplaceholder.typicode.com')
        cy.get('body > div > main > table:nth-child(9) > tbody > tr:nth-child(1) > td:nth-child(2) > a').click();

        // Espera a que se complete la solicitud interceptada
        cy.wait('@getPosts');

        // Realiza las verificaciones necesarias en la interfaz de usuario utilizando los datos de ejemplo
        cy.get('.post-title').eq(0).should('contain', 'Ejemplo de título 1');
        cy.get('.post-content').eq(0).should('contain', 'Ejemplo de contenido del post 1');
        cy.get('.post-title').eq(1).should('contain', 'Ejemplo de título 2');
        cy.get('.post-content').eq(1).should('contain', 'Ejemplo de contenido del post 2');
    });

})