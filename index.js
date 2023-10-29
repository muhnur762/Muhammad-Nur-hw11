const express = require('express')
const app = express()
const port = 3000

const route = require('./routes')

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/todo', route)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
