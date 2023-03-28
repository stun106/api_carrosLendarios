const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

const createCar = async (model,factory,descrition,picture) => {
    const car = await prisma.car.create({
        data: {
            model,
            factory,
            descrition,
            picture,
        }
    })
    return car
}


const getAllCar = async () =>{
    const cars = await prisma.car.findMany()
    return cars
}



module.exports = {
    createCar,
    getAllCar
}