const route = require('express').Router()
const controller = require('../controller/todo_Controller')

route.get('/', controller.findAll)
route.get('/:id', controller.findById)
route.post('/add', controller.add)
route.put('/:id', controller.edit)
route.delete('/:id', controller.delete)

module.exports = route
