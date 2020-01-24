import React from 'react';
import './Main.css';

import SlideHome from './Components/Carousel/CarouselHome.js';
import BuyButton from './Components/Buttons/BuyButton.js';
import CardFeatures from './Components/Cards/CardFeatures';

function Main() {
    return (
        <section role="main">
            <main>
                <SlideHome />

                <BuyButton />
                <div className="features">

                    <h1>Features</h1>

                    <CardFeatures />
                </div>
            </main>
        </section>
    );
}

export default Main;