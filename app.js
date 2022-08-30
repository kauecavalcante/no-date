const express = require('express');

const app = express()

//config JSON 
app.use(express.json())

// Open Route - Public Route
app.get('/', (req, res) => {
    res.status(200).json({msg: "Bem vindo a nossa API!"})
})

//Registrer User
app.post('/auth/register', async(req, res) => {
    const {nome, email, telefone, senha} = req.body

    //validações
    if (!nome) {
        return res.status(422).json({msg: "O nome é obrigatorio!"})
    }
    if (!email) {
        return res.status(422).json({msg: "O email é obrigatorio!"})
    }
    if (!telefone) {
        return res.status(422).json({msg: "O telefone é obrigatorio!"})
    }
    if (!senha) {
        return res.status(422).json({msg: "A senha é obrigatorio!"})
    }

    // check if user exists
    const userExists = await User.findOne({email: email})

    if(userExists) {
        return res.status(422).json({msg: "Por favor utilize outro email"})
    }

    // create User
    const user = new User ({
        nome,
        email,
        telefone,
        senha
    })

    try {
        await user.save()

        res.status(201).json({msg: 'Usuário criado com sucesso!'})
    } catch(error) {
        console.log(error)

        res.status(500).json({msg: "Houve um erro no servidor, tente novamente mais tarde!"})
    }
})

// Login User
app.post("/auth/login", async (req, res) => {
    const {email, senha} = req.body

    //validações
    if (!email) {
        return res.status(422).json({msg: 'O email é obrigatorio!'})
    }
    if(!senha) {
        return res.status(422).json({msg: 'A senha é obrigatoria!'})
    }

    // check if user exists
    const user = await User.findOne({email: email})

    if(!user) {
        return res.status(422).json({msg: "Usuario não encontrado!"})
    }

    
})

app.listen(5000)