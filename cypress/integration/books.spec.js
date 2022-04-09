describe('Testing api books', () => {
    context('GET all books', () => {
        let response
        before(() => {
            cy.geetBook(1).then(res => {
                response = res;
            });
        });
        it('Should return status 200', () => {
            expect(response.status).to.equal(200);
        });
        it('Should return body contract', () => {
            expect(response.body.firstname).to.be.a('string');
            expect(response.body.lastname).to.be.a('string');
            expect(response.body.totalprice).to.be.a('number');
            expect(response.body.depositpaid).to.be.a('boolean');
            expect(response.body.bookingdates).to.be.a('object');
            expect(response.body.bookingdates.checkin).to.be.a('string');
            expect(response.body.bookingdates.checkout).to.be.a('string');
        });
    });
});