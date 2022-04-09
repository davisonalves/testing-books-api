Cypress.Commands.add('geetBook', (bookId) =>{ 
    cy.request({
    method: 'GET',
    url: `/booking/${bookId}`,
    });
});