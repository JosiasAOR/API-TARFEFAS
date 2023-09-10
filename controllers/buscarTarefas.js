const database = require('../model/dbase')


exports.exibirTarefas=(req, res) => {
database.query(`SELECT * FROM tarefas ;`).then(

(resultado)=>{
    res.status(200).send({tarefas: resultado.rows});
}, (erro)=>{
    res.status(500).send({erro: erro})
}


)
}

exports.exibirTarefasParcial=(req, res) => {
   const parcial = req.params.id
database.query(`SELECT * FROM tarefas WHERE titulo LIKE '%${parcial}%' ;`).then(

(resultado)=>{
    res.status(200).send({tarefas: resultado.rows});
}, (erro)=>{
    res.status(500).send({erro: erro})
}


)
}
exports.exibirTarefaPeloId=(req, res) => {
   const id = req.params.id
database.query(`SELECT * FROM tarefas WHERE id = ${id};`).then(

(resultado)=>{
    res.status(200).send({tarefas: resultado.rows});
}, (erro)=>{
    res.status(500).send({erro: erro})
}


)
}