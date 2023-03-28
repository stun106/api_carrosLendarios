const express = require('express')
const app = express()
const router = require("./router/router")
const bodyParser = require('body-parser')
app.use(express.urlencoded({extended:true}))
app.use(bodyParser.json())
app.use(router)

app.listen(3000, () =>{
    console.log('acessar http://localhost:3000')
    console.log('servidor executado')
});
