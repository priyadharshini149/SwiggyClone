
import { useState } from "react";
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
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact us</li>
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