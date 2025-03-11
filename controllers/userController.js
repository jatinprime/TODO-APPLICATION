const userModel = require("../models/userModel");

const registerController = async (req, res) => {
    try {
        const { username, email, password } = req.body;

        //VALIDATION
        if (!username || !email || !password) {
            return res.status(500).send({
                success: false,
                message: "Please provide All Fields",
            });
        }

        //CHEK EXISTING USER
        const existingUser = await userModel.findOne({ email });
        if (existingUser) {
            return res.status(500).send({
                success: false,
                message: "User Already Registered",
            });
        }

        //SAVE USER
        const newUser = new userModel({ username, email, password });
        await newUser.save();

        return res.status(201).send({
            success: true,
            message: "User Register Successfully",
            user
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "Error in Register API",
            error,
        });
    }
};

//LOGIN CONTROLLER
const loginController = async (req, res) => {
    try {
        const {email , password} = req.body ;

         //VALIDATION
         if (!email || !password) {
            return res.status(500).send({
                success: false,
                message: "Please provide All Fields",
            });
        }

        //find user
        const user = await userModel.findOne({email , password}) ;
        //validation
        if(!user){
            return res.status(500).send({
                success : false , 
                message : "Invalid Email or Password",
            })
        }

        //IF U WANT TO HIDE SOMETHING FROM SENDING TO CLIENT , WE {user.property = undefinde}
        user.password = undefined ;

        
        res.status(200).send({
            success : true , 
            message : "Login Successfully",
            user
        })
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "Error in Login Api",
        });
    }
};

module.exports = { registerController, loginController };
