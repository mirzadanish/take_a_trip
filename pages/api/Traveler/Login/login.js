const Prisma = require('prisma/prisma-client');
const prisma = new Prisma.PrismaClient();
const asyncHandler = require('express-async-handler')
const bcrypt = require('bcrypt')



const login = asyncHandler(async (req, res) => {

    const {email, password} = req.body
    const user  = await prisma.traveler.findFirst({ 
        where: {
            email
        }
     })

    if(!user){
        res.status(404)
        throw new Error('User not found!')
    }
    if(!( await bcrypt.compare(password, user.password) )){
        console.log('inside compae')
        res.status(404)
        throw new Error('Password doest not Match!')
    }
    else{
        res.status(200).json(user)
    }
    console.log(user)
    

})
module.exports = {login}