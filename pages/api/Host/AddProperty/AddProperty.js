const Prisma = require("prisma/prisma-client");
const prisma = new Prisma.PrismaClient();
const expressAsyncHandler = require("express-async-handler");
const addProperty = async (req, res) => {
  const {
    category,
    description,
    address,
    city,
    guests,
    beds,
    bathrooms,
    security,
    stdAmenities,
    guestFvrt,
    safetyItems,
    propertyImages,
    propTitle,
    propPrice,
    propDescription,
    propDocs,
    CATid,
  } = req.body;

  const properties = await prisma.property.create({
    data: {
      property_categoryId: category,
      sub_typeId: description,
      travelerId: 4,
      hostId: 6,
      address: address,
      guests: guests,
      beds: beds,
      bathrooms: bathrooms,
      security_cameras: security[0],
      parking_area: security[1],
      pets_allowed: security[2],
      smart_TV: security[3],
      wifi: security[4],
      pool: stdAmenities[0],
      fire_place: stdAmenities[1],
      bbq_grill: stdAmenities[2],
      exercise_equipment: stdAmenities[3],
      pool_table: stdAmenities[4],
      bedroom_essentials: guestFvrt[0],
      bathroom_essentials: guestFvrt[1],
      kitchen: guestFvrt[2],
      washing_machine: guestFvrt[3],
      air_conditioner: guestFvrt[4],
      workspace: guestFvrt[5],
      fire_alarm: safetyItems[0],
      fire_extinguisher: safetyItems[1],
      first_aid_kit: safetyItems[2],
      smoke_alarm: safetyItems[3],
      property_image: "kjhdfkajhs",
      property_name: propTitle,
      price: propPrice,
      property_description: propDescription,
      document: propDocs,
      city: "city",
      verified: false,
    },
  });

  res.json({ properties });
};

module.exports = { addProperty };
