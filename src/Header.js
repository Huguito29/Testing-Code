import React, { Component } from 'react';
import {
    Route,
    NavLink,
    HashRouter
} from "react-router-dom";
import './Header.css';

import logoMenu from './images/logo-umuarama.png';
import logoUrbano from './images/logo-umuarama-urb.png';
import CardFeatures from './Components/Cards/CardFeatures';

class Header extends Component {
    render() {
        return (
            <HashRouter>
                <section role="header">
                    <header>

                        <div className="headerStyle">
                            <img src={logoMenu} className="logoMenu" alt="teste" title="testando" />

                            <ul>

                                <li>
                                    <a href="#">Agências</a>
                                </li>

                                <li>
                                <NavLink to="Features">features</NavLink>
                                </li>

                                <li>
                                    <a href="#">Sobre</a>
                                </li>

                                <li>
                                    <a href="#">Comprar Online</a>
                                </li>

                                <li>
                                    <a href="#">Transporte Urbano</a>
                                    <img src={logoUrbano} className="logoUrb" />
                                </li>

                            </ul>

                        </div>
                    </header>
                </section>
            </HashRouter>
        );
    }
}

export default Header;