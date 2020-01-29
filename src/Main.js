import React, { Component } from 'react';
import {
    Route,
    NavLink,
    HashRouter
} from "react-router-dom";
import './Main.css';

import SlideHome from './Components/Carousel/CarouselHome.js';
import BuyButton from './Components/Buttons/BuyButton.js';
import CardFeatures from './Components/Cards/CardFeatures';
import Features from './Features';

class Main extends Component {
    render () {
    return (
        <section role="main">
            <main>
                <SlideHome />

                <BuyButton />
                <div className="features">

                    <h1>Features</h1>

                    <Features />
                </div>
            </main>
        </section>
    );
}
}

export default Main;