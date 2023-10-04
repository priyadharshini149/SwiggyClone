
import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/image/logo .png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping, faPercent} from '@fortawesome/free-solid-svg-icons';
import { faLifeRing, faUser } from "@fortawesome/free-regular-svg-icons";
import { useSelector } from "react-redux";
const Header = () =>{
    const cartItem=useSelector((store)=>store.cart.items)
    console.log("cartitem:"+cartItem)
    return (
        <div className="header">
            <div className="logo-container">
            <Link to=" " className="header-link"><img src={logo} className="logo"></img></Link>
            </div>
            <div className="nav-items">
                <ul>
                    <li><Link to=" " className="header-link"><FontAwesomeIcon icon={faPercent} /> <span>Offers</span></Link></li>
                    <li><Link to=" " className="header-link"><FontAwesomeIcon icon={faLifeRing} /> <span>Help</span></Link></li>
                    <li><Link to=" " className="header-link"><FontAwesomeIcon icon={faUser} /><span>Account</span></Link></li>
                    <li><Link to="/Cart" className="header-link"> <FontAwesomeIcon icon={faCartShopping} /><span>Cart {cartItem.length}</span> </Link></li>
                </ul>
            </div>
        </div>
    );
};

export default Header;