const express = require("express") ;

//REST OBJECT
const app = express() ;

//MIDDLEWARES
app.use(express.json()) ;

//ROUTES
app.get('/test' , (req , res) => {
    res.status(200).send('<h1>Welcome to Node Todo Server</h1>') ;
})

//PORT
const PORT = 8080

//LISTEN
app.listen(PORT , () => {
    console.log("Node Server Running")
})