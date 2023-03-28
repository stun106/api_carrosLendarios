const express = require("express");
const router = express.Router();
const carController = require('../controller/adcarController')

// rotas POST
router.post("/",async (req,res) =>{
    const {model,factory,descrition,picture} = req.body
    try {
        const car = await carController.createCar(model,factory,descrition,picture)
        res.status(201).json(car)
    }catch(err){
        res.status(500).json({err:'Não foi possivel criar o carro.'})
    }
})

// rotas GET
router.get("/listallcar", async (req,res) =>{
    try{
        const dados = await carController.getAllCar()
        res.status(201).json(dados)
    }catch(err){
        res.status(400).json({err:'Não existe carros cadastrado.'})
    }
})
module.exports = router