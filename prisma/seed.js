// const { PrismaClient } = require('@prisma/client')
// const prisma = new PrismaClient()

// async function main() {
//   // seeding the data into database
//   const data = await prisma.sub_type.createMany({
//     data: [
//       { name: 'An entire place' },
//       { name: 'A private room'},
//       { name: 'A shared place' },
//     ]
//   });
//   console.log(data);

//   // const data = await prisma.property_category.createMany({
//   //   data: [
//   //     { type: 'Home' },
//   //     { type: 'Vacation Home'},
//   //     { type: 'Cottage' },
//   //     { type: 'Apartment' },
//   //   ]
//   // });
//   // console.log(data);
// }

// main()
//   .catch((e) => {
//     console.error(e)
//     process.exit(1)
//   })
//   .finally(async () => {
//     await prisma.$disconnect()
//   })
