const request = require('supertest');
const baseUrl = 'https://treinamento-api.herokuapp.com'

function getBook(bookId){
    return request(baseUrl)
    .get(`/booking/${bookId}`)
    .set('Accept', 'application/json')
}

module.exports = getBook