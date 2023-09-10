
import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/image/logo .png"
const Header = () =>{
    return (
        <div className="header">
            <div className="logo-container">
            <Link to=" " className="header-link"><img src={logo} className="logo"></img></Link>
            </div>
            <div className="nav-items">
                <ul>
                    <li><Link to="/about" className="header-link">About</Link></li>
                    <li><Link to="/contact" className="header-link">Contact Us</Link></li>
                    <li><Link className="header-link">Cart</Link></li>
                </ul>
            </div>
        </div>
    );
};

export default Header;