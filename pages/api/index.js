const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express();
const Prisma = require('@prisma/client');
const prisma = new Prisma.PrismaClient();

const {errorHandler} = require('./ErrorHandler/error')
const travelerRouters = require('./Traveler/traveler')

app.use(cors())
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

console.log(process.env.NODE_ENV)

app.use('/api/traveler/', travelerRouters)

app.get('/category', async(req, res)=>{
    const {type} = req.body
    const categories = await prisma.property_category.findMany({
        select:{
            type: true
        }
    })
    res.json(categories)
})

app.get('/subtype', async(req, res)=>{
    const {name} = req.body
    const subtypes = await prisma.sub_type.findMany({
        select:{
            name: true
        }
    })
    res.json(subtypes)
})

app.post('/property', async(req, res)=>{
    const { category, description, address, guests, beds, bathrooms, securityCameras,
        parkingArea, petsAllowed, smartTv, wifi, pool, fireplace, bbqGrill,
        exerciseEquipment, poolTable, bedroomEssentials, bathroomEssentials, kitchen,
        washingMachine, airConditioner, workSpace, fireAlarm, fireExtinguisher,
        firstAidKit, smokeAlarm, propertyImages, propTitle, price,
        propDescription, propDocs } = req.body;

    const property = await prisma.property.create({
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

    res.json(property)
})

app.use(errorHandler)

app.listen(5000, () => console.log('Listening....'))