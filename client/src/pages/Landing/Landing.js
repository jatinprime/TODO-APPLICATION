import React from "react";
import { Link } from "react-router-dom";

const Landing = () => {
    return (
        <div className="hero">
            <div className="intro-text">
                <h1>
                    <span className="tagline1">Organize work and life</span>
                </h1>
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Similique, ex.
                </p>
                <Link className="btn red" to="/register">
                    Register Now!
                </Link>
                <Link className="btn blue" to="/login">
                    Login
                </Link>
            </div>
        </div>
    );
};

export default Landing;
