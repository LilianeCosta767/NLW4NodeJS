import express from 'express';

const app = express();



/*
    GET => busca
    POST => salva
    PUT => alterar
    DELETE => deletar
    PATCH => alteração específica (só uma alteração, uma imagem, uma descrição, enfim)
*/

app.get("/", (request, response) => {
    return response.json({message: "Hello World - NLW 04"});
});

app.post("/", (request, response) => {
    // recebeu os dados para salvar
    return response.json({message: "Os dados foram salvos com sucesso!"});
});


app.listen(3333, () => console.log("Server is running! "));