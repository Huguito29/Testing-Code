import React from "react";
import { Button } from "react-bootstrap";
import '../../Main.css';
import HomeImages from "../images/HomeImages.js";
import PontaPora from '../../images/destaques/pontapora.jpg';

function CardFeatures() {
    return (

        <div className="grid-container">
            <div className="grid-itens">
                <img src={PontaPora} alt="Teste" />
                <h3>Título do Card</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio ipsam quibusdam in nam?</p>
            </div>

            <div className="grid-itens">
                <img src={PontaPora} alt="Teste" />
                <h3>Título do Card</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio ipsam quibusdam in nam?</p>
            </div>

            <div className="grid-itens">
                <img src={PontaPora} alt="Teste" />
                <h3>Título do Card</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio ipsam quibusdam in nam?</p>
            </div>

            <div className="grid-itens">
            <img src={PontaPora} alt="Teste" />
            <h3>Título do Card</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio ipsam quibusdam in nam?</p>
            </div>


        </div>


    );
}

export default CardFeatures;