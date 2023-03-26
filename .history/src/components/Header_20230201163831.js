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
              <div>
                   <h2 className='title'>Parce que nous croyons au Tech</h2>    
              </div>
              <img src={require("../assets/tec2.jpg")} alt="Logo" className='tech_img' />
             
            </div>
        </div>
    );
};

export default Header;