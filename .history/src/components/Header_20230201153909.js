import React from 'react';

const Header = () => {

    const logo =require("..assets/logo_b.jpeg") ;
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