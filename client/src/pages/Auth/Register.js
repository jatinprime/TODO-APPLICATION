import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./AuthStyles.css";
import AuthServices from "../../Services/AuthServices";
import toast from "react-hot-toast";
import { getErrorMessage } from "../../Utils/ErrorMessage";

const Register = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [username , setUsername] = useState("") ;


    const navigate = useNavigate() ;    //to use hooks , first we have to make the varible for it

    //login function
    const registerHandler = async (e) => {
        try{
            e.preventDefault() ;
            const data = {email , password , username} ;

            // Now we have taken the data and we will make the request to server and receive data
            const res = await AuthServices.registerUser(data) ;
            toast.success(res.data.message) ;
            //now we have to navigate the person as well
            navigate('/login') ;


            console.log(res.data)
        }catch(error){
            toast.error(getErrorMessage(error)) ;
            console.log(error) ;
        }
    };

    return (
        <div className="form-container">
            <div className="form">
                <div className="mb-3">
                    <i className="fa-solid fa-circle-user"></i>
                </div>
                <div className="mb-3">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="enter user name"
                        value={username}
                        onChange={(e) => {
                            setUsername(e.target.value);
                        }}
                    />
                </div>
                <div className="mb-3">
                    <input
                        type="email"
                        className="form-control"
                        placeholder="enter email"
                        value={email}
                        onChange={(e) => {
                            setEmail(e.target.value);
                        }}
                    />
                </div>
                <div className="mb-3">
                    <input
                        type="password"
                        className="form-control"
                        placeholder="enter password"
                        value={password}
                        onChange={(e) => {
                            setPassword(e.target.value);
                        }}
                    />
                </div>
                <div className="form-bottom">
                    <p className="text-center">
                        Already user? please
                        <Link to="/login"> Login</Link>
                    </p>
                    <button type="submit" className="login-btn" onClick={registerHandler}>
                        Register
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Register;
