const express = require("express") ;
const { registerController, loginController } = require("../controllers/userController");

//ROUTER OBJECT
const router = express.Router() ;

//ROUTES
//REGISTER || POST
router.post('/register' , registerController) ;

//LOGIN || POST
router.post('/login' , loginController) ;

//EXPORT
module.exports = router ;