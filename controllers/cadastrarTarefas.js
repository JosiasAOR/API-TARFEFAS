const database = require('../model/dbase')

exports.cadastroTarefas=(req, res) => {
    console.log('eu to chegando aqui')

const query =
"INSERT INTO tarefas (titulo,descricao,status) VALUES ($1,$2,$3);"
const values = [req.body.titulo, req.body.descricao, req.body.status]
console.log(values)
database.query(query, values).then(
    ()=>{
        res.status(200).send({mensagem: 'gravou com sucesso'});
    },
    (erro)=>{
        res.status(erro).send({erro: "erro"});
    }
)

}
/////////////////////////////

