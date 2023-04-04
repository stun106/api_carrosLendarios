const express = require("express");
const router = express.Router();
const carController = require('../controller/adcarController')

// rota POST
router.post("/joseadd", async (req, res) => {
    const { model, factory, descrition, picture } = req.body
    try {
        const car = await carController.createCar(model, factory, descrition, picture)
        res.status(201).json(car)
    } catch (err) {
        res.status(500).json({ err: 'Não foi possivel criar o carro.' })
    }
});

// rotas GET
router.get("/allcars/:name?", async (req, res) => {
    const car = req.params.name;
    const dados = await carController.getAllCar()
    try {
        if (car) {
            const carUnique = await carController.getCarbyName(car)
            res.status(201).json(carUnique)
        } else
            if (dados) {
                res.status(201).json(dados)
            } else {
                res.status.res.status(404).json({ err: 'Não existe carros cadastrado.' })
            }
    } catch (err) {
        console.log(err)
        res.status(501).json({ err: 'Algo não esta certo, verifique seus dados.' })
    }

});

// rota PUT 
router.put("/josealtera/:id", async (req, res) => {
    const id = Number(req.params.id)
    const { model, factory, descrition, picture } = req.body;
    try {
        const updated = await carController.updateCarforId(id, model, factory, descrition, picture);
        res.status(200).json(updated);
    } catch (err) {
        console.log(err)
        res.status(500).json({ err: "erro ao atualizar o carro" });
    }
})

// rota DELETE
router.delete("/josedeleta/:id", async (req,res) =>{
    const id = Number(req.params.id);
    try{
        const carDeleted = await carController.deleteCarforId(id)
        res.status(201).json({aviso:"carro deletado com sucesso!"})
    }catch (err){
        console.log(err)
        res.status(500).json({ err: "erro ao deletar o carro" });
    }

    
})

module.exports = router