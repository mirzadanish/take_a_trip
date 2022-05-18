const Prisma = require('prisma/prisma-client');
const prisma = new Prisma.PrismaClient();
const bcrypt = require('bcrypt')

const signUp = async(req, res) => {
    
    const { name, email, address, phoneNumber, password, confirmPassword } = req.body;

    // if(newPhone.length < 11 || newPhone.length > 11){
    //     console.log('inside if')
    //     res.status(400)
    //     throw new Error('Phone number must be 11 digit!')
    // }

    const encryptedPassword = await bcrypt.hash(password, 10)
    const confirmEncPassword = await bcrypt.hash(confirmPassword, 10)
    
    const data = await prisma.traveler.create({
        data: {
            name: name,
            email: email,
            address: address,
            phone_no: phoneNumber,
            password: encryptedPassword,
            confirm_password: confirmEncPassword,
            cnic: "121",
            passport:'',
            verified: false,
        }
    })

    res.json({data})

}

module.exports = {signUp}