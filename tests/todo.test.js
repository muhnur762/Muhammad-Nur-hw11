const app = require('../index')
const request = require('supertest')

describe('Todo Unit Test', () => {

test('Test GET /todo', (done) => {
    request(app)
        .get('/todo')
        .expect('Content-Type', /json/)
        .expect(200)
        .then(response => {
        expect(response.body.data.length).toBe("success")
        done()
    }).catch(done)
})
})