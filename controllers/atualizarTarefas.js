const database = require('../model/dbase');

exports.atualizarTarefa = (req, res) => {
    const idUC = req.params.id;
    const novosDados = req.body;  // Novos dados do professor

    const query = `
        UPDATE tarefas SET titulo = $1, descricao = $2, status =$4 WHERE id = $3;
    `;

    const values = [
        novosDados.titulo,
        novosDados.descricao,
        novosDados.status,
        idUC
    ];

    database.query(query, values)
        .then(() => {
            res.status(200).send({ mensagem: 'Tarefa atualizada com sucesso.' });
        })
        .catch(erro => {
            res.status(500).send({ erro: erro });
        });
};
