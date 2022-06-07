const Prisma = require("prisma/prisma-client");
const prisma = new Prisma.PrismaClient();

const categories = async (req, res) => {
  const { type } = req.body;

  const categories = await prisma.property_category.findMany({
    select: {
      type: true,
    },
  });
  res.json(categories);
};

module.exports = { categories };
