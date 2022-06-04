const Prisma = require('prisma/prisma-client');
const prisma = new Prisma.PrismaClient();

const subtypes = async (req, res) => {

    const {name} = req.body;

    const subtypes = await prisma.sub_type.findMany({
        select:{
            name:true
        }
    });
    res.json(subtypes);
}

module.exports = subtypes