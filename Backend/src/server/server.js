const express = require('express')
const app = express()
const routes = require('../routes/routes')
const cors = require('cors')

const port = process.env.PORT || 4000

app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(cors())


app.use('/', routes)

const server = app.listen(port, (err) => {
    if(err) throw err;
    console.log(`server escuchando en el puesto ${port}`)
})

module.exports = server