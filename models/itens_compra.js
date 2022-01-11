const uploadDeArquivo = require('../arquivos/uploadDeArquivos')
const conexao = require('../infraestrutura/conexao')

class Itens_compra {
    buscaPorId(id, res) {
        const sql = `SELECT * FROM Itens_compra WHERE id=${id}`
        conexao.query(sql, (erro, resultados) => {
            const item = resultados[0]
            if(erro) {
                res.status(400).json(erro)
            } else {
                res.status(200).json(itens_compra)
            }
        })
    }
}

module.exports = new Itens_compra() 