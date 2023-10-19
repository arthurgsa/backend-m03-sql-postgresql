const express = require('express')
const { Client } = require('pg')

const app = express()

app.use(express.json())

// app.get('/', async (req, res) => { // rota para listar todas as empresas usando client
//   const client = new Client({
//     host: 'localhost',
//     port: 5432, // default port for postgres
//     user: 'postgres',
//     password: '', //senha do seu banco de dados CODIFICAÇÃO: 5599
//     database: 'aula_conexao_node_pg'
//   })

//   try {
//     await client.connect()

//     const resultado = await client.query('SELECT * FROM empresas')

//     await client.end()

//     return res.json(resultado.rows)
//   } catch (error) {
//     console.log(error.message)
//   }

// })

app.listen(3000, () => {
  console.log('Server is running on port 3000')
})