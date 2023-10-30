const { Todo } = require('../models')

class TodoController {
  // Menampilkan Seluruh Data
  static findAll (req, res, next) {
    Todo.findAll()
      .then(data => {
        res.status(200).json({ data })
      })
      .catch(err => {
        next(err)
      })
  }

  // Menampilkan todo berdasarkan Id
  static findById (req, res, next) {
    Todo.findOne({
      where: {
        id: req.params.id
      }
    })
      .then(data => {
        if (!data) {
          res.status(404).json({ message: 'Todo Tidak Ada' })
        } else {
          res.status(200).json({ data })
        }
      })
      .catch(err => {
        res.status(500).json({ message: '<<< Error', error: err })
      })
  }

  // Tambah todo
  static add (req, res, next) {
    console.log(req.body)
    Todo.create({
      title: req.body.title,
      description: req.body.description
    })
      .then(data => {
        res.status(201).json({ data, message: 'Todo Berhasil Ditambahkan!' })
      })
      .catch(err => {
        res.status(501).json({ message: '<<< Error add', error: err })
      })
  }

  // edit todo
  static edit (req, res, next) {
    const updatedTodo = {
      title: req.body.title,
      description: req.body.description

    }

    Todo.findByPk(req.params.id)
      .then(data => {
        if (!data) {
          throw ({ status: 404, msg: 'Tidak Ada' })
        } else {
          return Todo.update(updatedTodo, { where: { id: req.params.id } })
        }
      })
      .then(data => {
        res.status(200).json({ data: updatedTodo, message: 'Todo Berhasil di Edit!' })
      })
      .catch(err => {
        res.status(500).json({ message: '<<< Error', error: err })
      })
  }

  static delete (req, res, next) {
    Todo.findByPk(req.params.id)
      .then(data => {
        if (!data) {
          res.status(404).json({ status: 404, message: 'Tidak ada!' })
        } else {
          return Todo.destroy({ where: { id: req.params.id } })
        }
      })
      .then(data => {
        res.status(200).json({ message: 'Todo Berhasil di Hapus!' })
      })
      .catch(err => {
        next(err)
      })
  }
}

module.exports = TodoController
