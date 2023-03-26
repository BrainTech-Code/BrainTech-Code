import React from 'react';
import "../css/header.css";
const Header = () => {

    const logo =require("../assets/logo_b.jpeg") ;
    return (
        <div className="header" >
            <div className='header_1'>            
                   <h1>BrainTech</h1>
                    <ul className='nav_ul' >
                        <li className='nav_item' >Nos Realistaions</li>
                        <li className='nav_item'>Projets</li>
                        <li className='nav_item'>Contact</li>
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