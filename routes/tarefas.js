const express = require('express')
const router = express.Router()
const controller = require('../controllers/buscarTarefas')
const controller2 = require('../controllers/cadastrarTarefas')
const controller3 = require('../controllers/deletarTarefas')
const controller4 = require('../controllers/atualizarTarefas')
const controller5 = require('../controllers/mudarStatus')

router.get('/tarefas/:id', controller.exibirTarefasParcial)
router.get('/tarefas/', controller.exibirTarefas)
router.post('/adicionar-tarefa', controller2.cadastroTarefas)
router.delete('/deletar/:id', controller3.deletarTarefa)
router.put('/atualizar/:id', controller4.atualizarTarefa)
router.put('/status/:id', controller5.statusTarefa)


module.exports = router