const router = require('express').Router()
const {property} = require('./AddProperty/AddProperty')
const {category} = require('./Category/Category')
const {subtype} = require('./Subtype/subtype')

router.post('/addproperty', property)
router.post('/category', category)
router.post('/subtype', subtype)

module.exports = router