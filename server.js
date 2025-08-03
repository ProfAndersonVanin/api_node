import express from 'express'
const app = express()
app.use(express.json())

const usuarios = []

//Criando uma rota

app.post('/usuarios', (req,res)=>{
    //console.log(req)
    usuarios.push(req.body)
    //res.send('OK feito POST')
    res.status(201).json(req.body)
})

app.get('/usuarios', (req,res)=>{
    //res.send('Deu certo!')
    //res.json(usuarios)
    res.status(200).json(usuarios)
})

//Porta de resposta
app.listen(3000)