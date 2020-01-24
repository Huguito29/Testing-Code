import React from 'react';
import './Header.css';

import logoMenu from './images/logo-umuarama.png';
import logoUrbano from './images/logo-umuarama-urb.png';

function Header() {
    return (
        <section role="header">
            <header>
               
                <div className="headerStyle">
                <img src={logoMenu} className="logoMenu" alt="teste" title="testando"/>
                
                 <ul>
                     
                    <li href="#">
                       Agências 
                    </li>

                    <li href="#">
                        Sobre
                    </li>

                     <li href="#">
                     Comprar Online
                     </li>

                     <li href="#">
                        Transporte Urbano
                        <img src={logoUrbano} className="logoUrb"/>
                     </li>

                </ul>
                
                </div>
            </header>
            </section>
       
    );
}

export default Header;