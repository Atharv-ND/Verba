import React from 'react';
import './Navbar.css'; 

const Navbar = ({onSignInClick} ) => {
    return (
        <nav className="navbar">
            <div className="logo"><img src="images/logo.png" alt="Image" width={50} height={50}/> Verba</div>
            <div className="nav-links">
                <a href="#footer">Contact Us</a>
                <button className="sign-in" onClick={onSignInClick}>Sign In</button>
            </div>
        </nav>
    );
};

export default Navbar;