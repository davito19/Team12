const express = require('express');

const app = express();

const calculo = require('./service/calculo')
const otraCosa = require('./sprint-4/src')

//app.use(express.json());

app.use("/calculo", calculo)
app.use("/loQueSea", otraCosa)

const server = app.listen(3001, () =>{
    let port = server.address().port
    console.log("Server Iniciado", port)
})

