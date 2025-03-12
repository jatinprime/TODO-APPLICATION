import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./AuthStyles.css";

const Register = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [username , setUsername] = useState("") ;

    //login function
    const registerHandler = (e) => {
        try {
            e.preventDefault(); //to avoid the default behaviour
            alert("Register Data " + email + " " + password + " " + username);
        } catch (error) {
            console.log(error);
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
