/*********************
 * Objetivo: EndPoint das funções
 * Data: 01/06/2023
 * Autor: Mateus Alves da Silva
 * Versão: 1.0
 *********************/

const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

const app = express()

const funcoes = require('./modulo/functions.js')
const { query } = require('express')

app.use((request, response, next) => {
    response.header('Access-Control-Allow-Origin', '*')

    response.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')

    app.use(cors())

    next()
})



app.listen(8080, function() {
    console.log('servidor aguardando requisições na porta 8080')
})