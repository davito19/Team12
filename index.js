const express = require('express');

const app = express();

const calculo = require('./service/calculo')

//app.use(express.json());

app.use("/calculo", calculo)

const server = app.listen(3001, () =>{
    let port = server.address().port
    console.log("Server Iniciado", port)
})

