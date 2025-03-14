import React, { useState } from "react";
import { Link , useNavigate } from "react-router-dom";
import "./AuthStyles.css";
import AuthServices from "../../Services/AuthServices";
import toast from 'react-hot-toast'
import { getErrorMessage } from "../../Utils/ErrorMessage";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate() ;    //to use hooks , first we have to make the varible for it

    //login function
    const loginHandler = async (e) => {
        try{
            e.preventDefault() ;
            const data = {email , password} ;

            // Now we have taken the data and we will make the request to server and receive data
            const res = await AuthServices.loginUser(data) ;
            toast.success(res.data.message) ;
            //now we have to navigate the person as well
            navigate('/home') ;

            //--------------------------- STORING THE TOKEN IN LOCAL STORAGE-----------
            //we cannot store object directly , we can store string , so that is why , we will use stringify function of JSON
            localStorage.setItem('todoapp' , JSON.stringify(res.data))

            //-----------------------------------------------------------------------

            console.log(res.data)
        }catch(error){
            console.log("Testing purpose console statement")
            toast.error(getErrorMessage(error)) ;
            console.log(error) ;
        }
    };

    //we will store the token stuff in local storage only instead of any database

    return (
        <div className="form-container">
            <div className="form">
                <div className="mb-3">
                    <i className="fa-solid fa-circle-user"></i>
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
                        Not a user? please
                        <Link to="/register"> Register</Link>
                    </p>
                    <button type="submit" className="login-btn" onClick={loginHandler}>
                        LOGIN
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Login;
