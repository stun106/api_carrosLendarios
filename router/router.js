const express = require("express");
const router = express.Router();
const carController = require('../controller/adcarController')

// rotas POST
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
    try {
        const car = req.params.name;
        
        const dados = await carController.getAllCar()
        if (car) {
             const carUnique = await carController.getCarbyName(car)
                res.status(201).json(carUnique)
        } else
            if(dados) {
               res.status(201).json(dados)
            } else {
            res.status.res.status(404).json({ err: 'Não existe carros cadastrado.' })
        }
    } catch (err) {
        console.log(err)
        res.status(400).json({ err: 'Algo não esta certo, verifique seus dados.' })
    }
});

// router.get("/allcars/car/:name", async (req, res) => {
//     try {
//         const name = req.params.name;
//         const dados = await carController.getCarbyName(name);
//         if (dados) {
//             res.status(201).json(dados);
//         } else {
//             res.status(404).json({ err: 'Nenhum carro encontrado com o nome informado.' })
//         }
//     } catch (err) {
//         console.log(err)
//         res.status(400).json({ err: 'Esse carro não existe em nosso banco de dados.' })
//     }
// });

// rota PUT 
module.exports = router