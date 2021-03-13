import express from "express";
import './database';
import { router } from "./routes";

const app = express();


/*
    GET => busca
    POST => salva
    PUT => alterar
    DELETE => deletar
    PATCH => alteração específica (só uma alteração, uma imagem, uma descrição, enfim)
*/

app.use(express.json());
app.use(router);

app.listen(3333, () => console.log("Server is running! "));