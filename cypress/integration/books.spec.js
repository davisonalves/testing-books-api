describe('Testing CRUD from api books', () => {
    context('GET all books', () => {
        let schema
        let response
        before(() => {
            cy.getAllBooks().then(res => {
                response = res;
            });
            cy.fixture('schemaGetAllBooks').then(data => {
                schema = data;
            });
        });
        it('Health check', () => {
            expect(response.status).to.equal(200);
        });
        it('Contract', () => {
            expect(response.body[0].id).to.be.a('number');
            expect(response.body[0].title).to.be.a('string');
            expect(response.body[0].description).to.be.a('string');
            expect(response.body[0].pageCount).to.be.a('number')
            expect(response.body[0].excerpt).to.be.a('string');
            expect(response.body[0].publishDate).to.be.a('string');
        });
    });
});