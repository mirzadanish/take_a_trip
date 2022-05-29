const Prisma = require('prisma/prisma-client');
const prisma = new Prisma.PrismaClient();

const subtypes = async (req, res) => {

    const {name} = req.body;

    const subtypes = await prisma.sub_type.createMany({
        data:[
            {name: 'An entire place', id: 1 },
            {name: 'A private room', id: 2},
            {name: 'A shared place', id: 3},
        ]
    });
    res.json(subtypes);
}

module.exports = {subtypes}

