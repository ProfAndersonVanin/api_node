import express from 'express'

import pkg from '@prisma/client'
const { PrismaClient } = pkg
const prisma = new PrismaClient()

const app = express()
app.use(express.json())

//Criando uma rota

app.put('/cadastro/:id', async (req,res)=>{

    //console.log(req.params.id)
    await prisma.usuario.update({
        where:{
            id:req.params.id
        },
        data:{
            email: req.body.email,
            nome: req.body.nome,
            idade: req.body.idade
        }

    })

    res.status(201).json({"message":"Usuario Atualizado"})
})


app.delete('/cadastro/:id', async (req,res)=>{

    //console.log(req.params.id)
    await prisma.usuario.delete({
        where:{
            id:req.params.id
        }
    })

    res.status(201).json({"message":"Usuario Removido"})
})


app.post('/cadastro',async (req,res)=>{
    
    await prisma.usuario.create({
        data:{
            email: req.body.email,
            nome: req.body.nome,
            idade: req.body.idade
        }
    })

    res.status(201).json(req.body)
})

app.get('/cadastro', async (req,res)=>{
    
    const lista_usuarios = await prisma.usuario.findMany()

    res.status(200).json(lista_usuarios)
})

//Porta de resposta
app.listen(3000)