const { Pool } = require('pg')

const pool = new Pool({
	host: 'localhost',
	port: 5432,
	user: 'postgres',
	password: '', //senha do seu banco de dados CODIFICAÇÃO: 5599
	database: 'aula_autenticacao_criptografia',
})

module.exports = pool
