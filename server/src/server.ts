import express from 'express'

const app = express()

app.get('/', (request, response) => {
  console.log('Acesso com sucesso!')
})

app.listen(3333, console.log('server is running'))
