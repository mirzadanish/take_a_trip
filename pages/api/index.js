const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express();
const {errorHandler} = require('./ErrorHandler/error')
const travelerRouters = require('./Traveler/traveler')

app.use(cors())
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

console.log(process.env.NODE_ENV)
app.get('/api/user', (req, res) => {
    res.json({message: 'hellow world'})
})

app.use('/api/traveler/', travelerRouters)
app.use(errorHandler)


app.listen(5000, () => console.log('Listening....'))