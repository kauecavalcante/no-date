import { postUsuario } from "../Cadastre-se/index.js"

const formulario = document.getElementById('formulario')
formulario.addEventListener('submit', function(event) {
    event.preventDefault()

    const cadastro = {
        nome: document.getElementById('nome').value,
        email: document.getElementById('email').value,
        telefone: document.getElementById('telefone').value,
        senha: document.getElementById('senha').value
    }
    postUsuario()
})