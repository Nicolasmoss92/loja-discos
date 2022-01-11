const Compra = require('../models/compra');

module.exports = app => {
    app.get('/compra', (req, res) => {
        Compra.lista(res)
    })

    app.get('/compra/:id', (req, res) => {
        const id = parseInt(req.params.id)

        Compra.buscaPorId(id,res)
     })

    app.post('/compra', (req, res) => {
        const compra = req.body

        Compra.adiciona(compra)
    })

    app.put('/compra/:id', (req, res) => {
        const id = parseInt(req.params.id)
        const valores = req.body

        Compra.altera(id, valores, res)

    })

    app.delete('/compra/:id', (req, res) => {
        const id = parseInt(req.params.id)

        Compra.deleta(id, res)
    })
}
