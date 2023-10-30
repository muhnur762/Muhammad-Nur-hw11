const app = require('../app')
const request = require('supertest')

describe('Unit Test', () => {
    test('Get /todo', (done) => {
        request(app)
            .get('/todo/')
            // .expect('Content-Type', /json/)
            // .expect(200)
            .then(response => {
               const {body, status} = response
            expect(status).toBe(200)
            done()
        }).catch(done)
    })

    test('Post /todo/add', (done) => {
        const newTodo = {
            title: "Todo title",
            description: "description todo"
        }
        
        request(app)
            .post('/todo/add')
            .send(newTodo)
            .expect('Content-Type', /json/)
            .then(response => {
                const {body, status} = response
                console.log(status)
                expect(body.message).toBe('Todo Berhasil Ditambahkan!')
                done()
            })
            .catch(done)
    })

    test('Get /todo/', (done) => {
        request(app)
            .get(`/todo/1`)
            .expect('Content-Type', /json/)
            .expect(200)
            .then(response => { 
                const {body, status} = response
              expect(body.data.title).toBe("Berangkat Sekolah")
              done()
        }).catch(done)
    })

    test('Put /todo/', (done) => {
        const id = 1
        const updatedTodo = {
            title: "Todo Updated",
        }
        
        request(app)
            .put(`/todo/${id}`)
            .send(updatedTodo)
            .expect('Content-Type', /json/)
            .expect(200)
            .then(response => {
                const {body, status} = response
                expect(body.message).toBe('Todo Berhasil di Edit!')
                expect(response.body.data).toHaveProperty('title', 'Todo Updated')
                done()
            })
            .catch(done)
    })

    test('Delete /todo/', (done) => {
        const id = 6

        request(app)
            .delete(`/todo/${id}`)
            .expect('Content-Type', /json/)
            .expect(200)
            .then(response => {
                const {body, status} = response
                expect(body.message).toBe("Todo Berhasil di Hapus!")
                done()
        })
        .catch(done)
    })
})