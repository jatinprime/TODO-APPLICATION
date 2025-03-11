const express = require("express");
const { testingController } = require("../controllers/testController");


//ROUTER OBJECT
const router = express.Router();

//ROUTES
router.get('/' , testingController) ;

//EXPORT
module.exports = router ;

