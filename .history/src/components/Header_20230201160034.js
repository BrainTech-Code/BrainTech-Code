import React from 'react';
import "../css/header.css";
const Header = () => {

    const logo =require("../assets/logo_b.jpeg") ;
    return (
        <div className="header" >
            <div className='header_1'>
               <img src={logo} alt="Logo" className='logo_img' />
               
                    <ul className='nav_ul' >
                        <li>Nos Realistaions</li>
                        <li>Projets</li>
                        <li>Contact</li>
                    </ul>
                
            </div>
            <div className="header_2">
              <h2 className='title' >Developpent mobile & web</h2>
               <p></p>
            </div>
        </div>
    );
};

export default Header;