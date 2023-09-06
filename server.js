const express = require('express')
const port = 3000
const bodyParser = require('body-parser')
const tarefasRoutes = require('./routes/tarefas')

const app = express()
app.use(bodyParser.json())

// Cadastrando as rotas
app.use('/', tarefasRoutes)

app.listen(port, () => {
    console.log(`API de Tarefas: ${port}`)
})
