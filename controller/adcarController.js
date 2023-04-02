const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient();

// post cars
const createCar = async (model, factory, descrition, picture) => {
    const car = await prisma.car.create({
        data: {
            model:model,
            factory:factory,
            descrition:descrition,
            picture:picture,
        }
    });
    return car;
}

// get all
const getAllCar = async () => {
    const cars = await prisma.car.findMany();
    return cars;
}

// get for id - nessa função usei um metodo do prisma `findMany` onde existem parametro como:
// `where`: que vai estabelecer um filtro para minha query; 
// `model`: é a coluna da minha tabela onde os dados irão ser filtrados;
// `contrains`: é a especificação ou tratamento de dados passado para entrada de dados. nesse caso usamos o `ilike`
const getCarbyName = async (name) => {
    const dados = await prisma.car.findMany({
        where: {
            model: {
                contains: name.trim().toLowerCase()
            }
        }
    });
    return dados;
}

//put for id
const updateCarforId = async (id,model, factory, descrition, picture) => {
    const updatedCar = await prisma.car.update({
        where: { id:id },
        data: {
            model,
            factory,
            descrition,
            picture
        }
    });
    return updatedCar
}

module.exports = {
    createCar,
    getAllCar,
    getCarbyName,
    updateCarforId
}