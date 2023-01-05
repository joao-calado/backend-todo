const port = 3000

const bodyParser = require('body-parser') // parser do corpo da requisição (form/json)
const express = require('express') // nosso servidor web que roda em cima do node
const server = express() // criando uma instancia do express
const allowCors = require('./cors')

//Aplicando alguns middlewares para nossa requisição
// 1º Middleware
server.use(bodyParser.urlencoded({extended: true}))
/*
sempre que chegar uma requisição que usa esse padrão 
"urlencoded" (padrão utilizando para submissão de formulários)
quem vai fazer o parser é o bodyParser.

Modo extended habilitado vai suportar mais tipos de dados do 
que o padrão do urlencoded
*/
//2ª Middleware
server.use(bodyParser.json())

server.listen(port, function() {
    console.log(`BACKEND is running on port ${port}.`)
})

server.use(allowCors)

module.exports = server