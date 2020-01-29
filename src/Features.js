import React, { Component } from "react";
import { Button } from "react-bootstrap";
import './Main.css';
import PontaPora from './images/destaques/pontapora.jpg';
import CardFeatures from './Components/Cards/CardFeatures';
class Features extends Component {
    render() {
        return (
            <div class="features">
                <CardFeatures />
            </div>
        );
    }
}

export default Features;