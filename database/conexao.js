const mysql = require('mysql')

const conexao = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '2K3l3t0yd!',
    database: 'compra'
});

module.exports = conexao