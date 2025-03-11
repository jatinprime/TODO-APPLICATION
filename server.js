const express = require("express") ;
const morgan = require("morgan") ;
const dotenv = require("dotenv") ;
const colors = require("colors") ;
const cors = require("cors") ;

//CONFIGURATION
dotenv.config() ;

//REST OBJECT
const app = express() ;

//MIDDLEWARES
app.use(express.json()) ;
app.use(morgan("dev")) ;
app.use(cors()) ;      // {cross origin error remover} USEFUL TO SOLVE THE CONFLICTS BETWEEN DIFFERENT ORIGIN OF FRONTEND (CLIENT) AND BACKEND (SERVER)

//ROUTES
app.get('/test' , (req , res) => {
    res.status(200).send('<h1>Welcome to Node Todo Server</h1>') ;
})

//PORT
const PORT = process.env.PORT || 8080

//LISTEN
app.listen(PORT , () => {
    console.log(`Server Running Successfully on ${process.env.DEV_MODE} mode on Port no. ${PORT}`.white.bgBlue);
})