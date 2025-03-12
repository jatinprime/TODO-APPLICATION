import React from "react";
import { Link } from "react-router-dom";
import "./AuthStyles.css";

const Login = () => {
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
                    />
                </div>
                <div className="mb-3">
                    <input
                        type="password"
                        className="form-control"
                        placeholder="enter password"
                    />
                </div>
                <div className="form-bottom">
                    <p className="text-center">
                        Not a user? please
                        <Link to="/register"> Register</Link>
                    </p>
                    <button type="submit" className="login-btn">
                        LOGIN
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Login;
