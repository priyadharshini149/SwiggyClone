
import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/image/logo.png"
const Header = () =>{
    const [log,setlog]=useState("LogIn");
    return (
        <div className="header">
            <div className="logo-container">
                <img src={logo} className="logo"></img>
            </div>
            <div className="nav-items">
                <ul>
                    <li><Link to=" " className="header-link">Home</Link></li>
                    <li><Link to="/about" className="header-link">About</Link></li>
                    <li><Link to="/contact" className="header-link">Contact Us</Link></li>
                    <li>Cart</li>
                    <button className="log-btn" onClick={()=>{
                        log==="LogIn"?
                        setlog("LogOut")
                        :setlog("LogIn");
                    }}>{log}</button>
                </ul>
            </div>
        </div>
    );
};

export default Header;