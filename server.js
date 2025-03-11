const express = require("express") ;
const morgan = require("morgan") ;
const dotenv = require("dotenv") ;
const colors = require("colors") ;
const cors = require("cors") ;
const connectDB = require("./config/db");

//CONFIGURATION
dotenv.config() ;

//DB CONNECTION
connectDB() ;

//REST OBJECT
const app = express() ;

//MIDDLEWARES
app.use(express.json()) ;
app.use(morgan("dev")) ;
app.use(cors()) ;      // {cross origin error remover} USEFUL TO SOLVE THE CONFLICTS BETWEEN DIFFERENT ORIGIN OF FRONTEND (CLIENT) AND BACKEND (SERVER)

//ROUTES
app.use('/api/v1/test' , require('./routes/testRoute'))

//PORT
const PORT = process.env.PORT || 8080

//LISTEN
app.listen(PORT , () => {
    console.log(`Server Running Successfully on ${process.env.DEV_MODE} mode on Port no. ${PORT}`.white.bgBlue);
})