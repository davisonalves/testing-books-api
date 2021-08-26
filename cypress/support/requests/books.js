Cypress.Commands.add('getAllBooks', () =>{ 
    cy.request({
    method: 'GET',
    url: '/Books',
    });
});