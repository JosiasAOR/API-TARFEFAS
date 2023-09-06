const database = require("../model/dbase");

exports.deletarTarefa = (req, res) => {
  const idTarefa = req.params.id;

  const query = `
        DELETE FROM tarefas WHERE id = $1;
    `;

  const values = [idTarefa];

  database
    .query(query, values)
    .then((resultado) => {
      if (resultado.rowCount === 0) {
        res
          .status(404)
          .send({ erro: "Tarefa não encontrada ou já foi excluída." });
      } else {
        res.status(200).send({ sucess: "Tarefa excluída." }); 
      }
    })
    .catch((erro) => {
      res.status(500).send({ erro: erro });
    });
};
