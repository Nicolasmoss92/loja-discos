class Tabelas {
    init(conexao) {
        this.conexao = conexao
        this.compra()
        this.itens_compra()

    }

    compra(){
        const sql = 'CREATE TABLE IF NOT EXISTS Compra (id int NOT NULL AUTO_INCREMENT, id_cliente int(10), data_compra datetime NOT NULL, forma_pagamento varchar(10), soma_total float(10), valor_final float(20), PRIMARY KEY (id))'

        this.conexao.query(sql, erro => {
            if (erro) {
                console.log(erro)
            } else {
                console.log('Tabela Compra criada com sucesso')
            }
        })
    }

    itens_compra(){   //itens compra relaciona as tabelas de compra e item
        const sql = 'CREATE TABLE IF NOT EXISTS Itens_compra (id int NOT NULL AUTO_INCREMENT, id_compra int(10), id_item int(10), quantidade varchar(10), preco_total float(10), PRIMARY KEY (id))'

        this.conexao.query(sql, erro => {
            if (erro) {
                console.log(erro)
            } else {
                console.log('Tabela itens_compra criada com sucesso')
            }
        })
    }
}

module.exports = new Tabelas