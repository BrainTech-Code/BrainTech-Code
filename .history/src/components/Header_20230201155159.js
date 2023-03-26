import React from 'react';
import "../css/header.css";
const Header = () => {

    const logo =require("../assets/logo_b.jpeg") ;
    return (
        <div className="header" >
            <div>
               <img src={logo} alt="Logo" className='logo_img' />;
               
            </div>
            <div>
              <h2 className='title' >Developpent mobile & web</h2>
               <p></p>
            </div>
        </div>
    );
};

export default Header;