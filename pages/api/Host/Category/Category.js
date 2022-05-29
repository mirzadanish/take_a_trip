const Prisma = require('prisma/prisma-client');
const prisma = new Prisma.PrismaClient();


const categories = async (req, res) => {

    const {type} = req.body;

    const categories = await prisma.property_category.createMany({
        data:[
            {type: 'Home', id: 1 },
            {type: 'Vacation Home', id: 2},
            {type: 'Cottage', id: 3},
            {type: 'Apartment', id: 4},
        ]
    });
    res.json(categories);
}

module.exports = {categories}