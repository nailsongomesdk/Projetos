const porta = 3003

const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const bancoDeDados = require('./bancoDeDados')

app.use(bodyParser.urlencoded({extends: true}))

app.get('/produtos', (req, res) =>{
    res.send(bancoDeDados.getProdutos())
})

//buscar um produto
app.get('/produtos/:id', (req, res) =>{
    res.send(bancoDeDados.getProduto(req.params.id))
})

//inserir um produto
app.post('/produtos', (req, res) => {
    const produto = bancoDeDados.salvarProduto({
        nome: req.body.nome,
        preco: req.body.preco
    })

    res.send(produto)
})

//alterar um produto
app.put('/produtos/:id', (req, res) => {
    const produto = bancoDeDados.salvarProduto({
        id: req.params.id,
        nome: req.body.nome,
        preco: req.body.preco
    })

    res.send(produto)
})

//deletar um produto
app.delete('/produtos/:id', (req, res) =>{
    const produto = bancoDeDados.excluirProduto(req.params.id)
    res.send(produto)
})

app.listen(porta, () => {
    console.log(`Servidor executando na porta ${porta}`)
})