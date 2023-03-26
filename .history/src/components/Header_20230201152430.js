import React from 'react';
import logo from "..assets/logo_b.jpeg"
const Header = () => {
    return (
        <div className="header" >
            <div>
              <img src={logo} alt="Logo" />;
              <h2>BrainTech</h2>
            </div>
            <div></div>
        </div>
    );
};

export default Header;