const moment = require('moment')
const axios = require('axios')
const conexao = require('../database/conexao')
const compra = require('../controllers/compra')


class Compra {

    adiciona(compra) {
        const sql = 'INSERT INTO Compra SET ?'
        conexao.query(sql, compra)
    }

    adicionaItensCompra(itens_compra) {
        const sql = 'INSERT INTO Itens_compra SET ?'
        conexao.query(sql, itens_compra)
    }

    lista(res) {
        const purchase = `SELECT *
        FROM itens_compra ic
        JOIN compra c ON c.id = ic.id_compra`

        conexao.query(purchase, (error, result) => {
            if (error) {
                res.status(400).json(error)
            } else {
                let finalList = []

                result.forEach(currentItem => {
                    const finalItem = finalList.find(finalItem => finalItem.id === currentItem.id_compra)

                    if (finalItem) {
                        // Current item object attributes destructured
                        const {
                            id_item,
                            quantidade,
                            preco_total
                        } = currentItem

                        finalItem.items = [
                            ...finalItem.items,
                            {
                                id: id_item,
                                quantidade,
                                preco_total,
                            }
                        ]
                    } else {
                        // Current purchase object attributes destructured
                        const {
                            id_compra,
                            id_cliente,
                            data_compra,
                            forma_pagamento,
                            soma_total,
                            valor_final
                        } = currentItem

                        // Current item object attributes destructured
                        const {
                            id_item,
                            quantidade,
                            preco_total
                        } = currentItem

                        finalList.push(
                            {
                                id: id_compra,
                                id_cliente,
                                data_compra,
                                forma_pagamento,
                                soma_total,
                                valor_final,
                                items: [
                                    {
                                        id: id_item,
                                        quantidade,
                                        preco_total,
                                    }
                                ]
                            }
                        )
                    }
                })

                res.status(200).json(finalList)
            }
        })
    }

    buscaPorId(id, res) {

        const sql = `SELECT c.id_cliente as 'cliente', c.data_compra, c.forma_pagamento,
        i.id_item as 'item', i.quantidade, i.preco_total
        FROM Compra as c, itens_compra as i
        where c.id = ${id} and i.id_compra = c.id`

        // busca no intens compra e retorna aqui a lista
        conexao.query(sql, (erro, resultados) => {
            const compra = resultados[0]   //descobrir como devolver a lista de itens
            if (erro) {
                res.status(400).json(erro)
            } else {
                res.status(200).json(compra)
            }
        })
    }

    altera(id, res) {

        const sql = 'UPDATE Itens_compra SET ? WHERE id_compra = ${id} '

        conexao.query(sql, id, (erro, resultados) => {
            if (erro) {
                res.status(400).json(erro)
            } else {
                res.status(200).json({ id })
            }
        })
    }

    deleta(id, res) {
        const sql = 'DELETE FROM Compra WHERE id=?'

        conexao.query(sql, id, (erro, res) => {
            if (erro) {
                res.status(400).json(erro)
            } else {
                res.status(200).json({ id })
            }
        })
    }

    listaItensCompra(id, res) {
        const sql = `SELECT * FROM Itens_compra WHERE id_compra=${id}`    //itens compra relaciona as tabelas de compra e item
        //transformar esse Json em uma lista de objetos de itens para add no objeto de compra
        conexao.query(sql, (erro, resultados) => {
            if (erro) {
                res.status(400).json(erro)
            } else {
                res.status(200).json(resultados)
            }
        })
    }
}

module.exports = new Compra()