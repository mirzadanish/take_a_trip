const Prisma = require('prisma/prisma-client');
const prisma = new Prisma.PrismaClient();

const addProperty = async (req, res) => {

    const { category, description, address, guests, beds, bathrooms, securityCameras,
        parkingArea, petsAllowed, smartTv, wifi, pool, fireplace, bbqGrill,
        exerciseEquipment, poolTable, bedroomEssentials, bathroomEssentials, kitchen,
        washingMachine, airConditioner, workSpace, fireAlarm, fireExtinguisher,
        firstAidKit, smokeAlarm, propertyImages, propTitle, price,
        propDescription, propDocs } = req.body;

    const properties = await prisma.property.create({
        data: {
            property_categoryId: category,
            sub_typeId: description,
            address: address,
            guests: guests,
            beds: beds,
            bathrooms: bathrooms,
            security_cameras: securityCameras,
            parking_area : parkingArea,
            pets_allowed : petsAllowed,
            smart_TV : smartTv,
            wifi : wifi,
            pool:pool,
            fire_place: fireplace,
            bbq_grill : bbqGrill,
            exercise_equipment : exerciseEquipment,
            pool_table : poolTable,
            bedroom_essentials : bedroomEssentials,
            bathroom_essentials : bathroomEssentials,
            kitchen : kitchen,
            washing_machine : washingMachine,
            air_conditioner : airConditioner,
            workspace : workSpace,
            fire_alarm : fireAlarm,
            fire_extinguisher : fireExtinguisher,
            first_aid_kit : firstAidKit,
            smoke_alarm : smokeAlarm,
            property_image : propertyImages,
            property_name : propTitle,
            price: price,
            property_description: propDescription,
            document: propDocs,
            verified: false,
        }
    })

    res.json({ properties })

}

module.exports = {addProperty} 