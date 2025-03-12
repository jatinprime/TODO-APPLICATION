import React from "react";
import { Link } from "react-router-dom";
import todo from '../../assets/images/todo.jpg'
import "./Landing.css"

const Landing = () => {
    return (
        <div className="hero">
            <div className="intro-text">
                <h1>
                    <span className="tagline1">Organize work and life</span>
                    <br />
                    <span className="tagline2">
                        Finally
                    </span>
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
            <div className="">
                <img src={todo} alt="heroimage" width={"100%"} height={515} />
            </div>
        </div>
    );
};

export default Landing;
