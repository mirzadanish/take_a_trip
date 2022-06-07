const router = require("express").Router();
const { addProperty } = require("./AddProperty/AddProperty");
const { categories } = require("./Category/Category");
const { subtypes } = require("./Subtype/subtype");

router.post("/addproperty", addProperty);
router.post("/category", categories);
router.post("/subtype", subtypes);

module.exports = router;
