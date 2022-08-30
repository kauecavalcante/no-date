import { application } from "express";

const url = "http://localhost:5000/auth/register";

export const postUsuario = () => {

    return fetch(`${url+'/usuario'}`, {
        method: "GET",
        headers: {
            "content-type": "application/json",
            "accept": 'application / json', 
        },
       /* body: JSON.stringify({
            nome: 'kaue',
            email: 'kaue@teste.com',
            telefone: '82 9999999',
            senha: 'teste'
        }) */
    }).then(response => response.json()).then(response => console.log(response)).catch(err => console.log(err));
    
}