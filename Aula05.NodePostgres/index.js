const express = require('express')
const { Pool } = require('pg')

const pool = new Pool({
  host: 'localhost',
  port: 5432, // default port for postgres
  user: 'postgres',
  password: '', //senha do seu banco de dados CODIFICAÇÃO: 5599
  database: 'aula_conexao_node_pg'
})

const app = express()

app.use(express.json())

app.get('/', async (req, res) => {
    const { pagina, porPagina } = req.query
  try {
    // const query = 'SELECT * FROM empresas WHERE id = $1'
    // const params = [id] // mostra a empresa com id 1

    // const query = 'update empresas set site = $1 where id = $2'
    // const params = ['yahoo.com', 2] // edita o site da empresa com id 1
    // -- inner join

    // const query = `
    // select e.id as empresaId, f.id as filialId, e.nome, f.pais, pess.nome as funcionario
    // from empresas e 
    // join filiais f on e.id = f.empresa_id
    // join pessoas pess on e.id = pess.empresa_id;
    // `
    
    // // -- left join
    
    // const query = `
    // select e.id as empresaId, f.id as filialId, e.nome, f.pais 
    // from empresas e 
    // left join filiais f on e.id = f.empresa_id;
    // `
    
    // // -- right join
    
    // const query = `
    // select e.id as empresaId, f.id as filialId, e.nome, f.pais 
    // from empresas e 
    // right join filiais f on e.id = f.empresa_id;
    // `
    
    // // -- full join
    
    // const query = `
    // select e.id as empresaId, f.id as filialId, e.nome, f.pais 
    // from empresas e 
    // full join filiais f on e.id = f.empresa_id;
    // `

    const query = 'select * from pessoas order by id asc limit $1 offset $2'
    
    const { rowCount } = await pool.query('select * from pessoas')

    const offset = pagina === 1 ? 0 : (pagina -1) * porPagina

    const resultado = await pool.query(query, [porPagina, offset])
    const result = {
      pagina,
      porPagina,
      total: rowCount,
      registros: resultado.rows
    }

    return res.json(result)

  } catch (error) { 
    console.log(error.message)
}
})


app.listen(3000, () => {
  console.log('Server is running on port 3000')
})