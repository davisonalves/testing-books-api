const getBook = require('../requests/getBook');
describe('GET books', () => {
    
    it('Should return status 200', () => {
        getBook(2)
        .expect(200)
    });
    it('Should return body contract', () => {
        getBook(2)
        .then(response => {
            expect(typeof response.body.firstname).toEqual('string');
            expect(typeof response.body.lastname).toEqual('string');
            expect(typeof response.body.totalprice).toEqual('number');
            expect(typeof response.body.depositpaid).toEqual('boolean');
            expect(typeof response.body.bookingdates).toEqual('object');
            expect(typeof response.body.bookingdates.checkin).toEqual('string');
            expect(typeof response.body.bookingdates.checkout).toEqual('string');
        });
    });
});