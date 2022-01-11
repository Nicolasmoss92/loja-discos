const Compra = require('../models/compra');

module.exports = app => {
    app.get('/itens/:id', (req, res) => {
        const id = parseInt(req.params.id)
        Compra.listaItensCompra(id, res)
    })

    app.post('/itens', (req, res) => {
        const itens = req.body

        Compra.adicionaItensCompra(itens)
    })

    app.put('/itens/:id', (req, res) => {
        const id = parseInt(req.params.id)
        const valores = req.body

        Compra.altera(id, valores, res)
            
    })

  /*   app.delete('/itens/:id', (req, res) => {
        const id = parseInt(req.params.id)

        Itens_compra.deleta(id, res)
    }) */
}
