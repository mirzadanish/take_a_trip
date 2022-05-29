const router = require('express').Router();
const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

router.get('/properties', async(req, res, next)=>{
    try{
        const properties = await prisma.property.findMany({
            select:{
                property_name: true,
                property_description: true,
                price: true,
                guests: true,
                beds:true,
                bathrooms: true,
                property_image: true,
            },
            where:{
                // Property_category:
            }
        })
        res.json(properties)
    }
    catch(error){
    next(error)
    }
});

router.get('/properties/:id', async(req, res, next)=>{
    
});

router.post('/properties', async(req, res, next)=>{
    
});

router.delete('/properties/:id', async(req, res, next)=>{
    
});

router.patch('/properties/:id', async(req, res, next)=>{
    
});

module.exports = router