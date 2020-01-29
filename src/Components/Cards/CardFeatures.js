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
                <h5>Umuarama - Ponta Porã</h5>
                <p></p>
                <button type="button"> Comprar Online</button>
            </div>

            <div className="grid-itens">
                <img src={PontaPora} alt="Teste" />
                <h5>Umuarama - Ponta Porã</h5>
                <p>Com conexão</p>
                <button type="button"> Comprar Online</button>
            </div>

            <div className="grid-itens">
                <img src={PontaPora} alt="Teste" />
                <h5>Umuarama - Ponta Porã</h5>
                <p>Com conexão</p>
                <button type="button"> Comprar Online</button>
            </div>

            <div className="grid-itens">
                <img src={PontaPora} alt="Teste" />
                <h5>Umuarama - Ponta Porã</h5>
                <p>Com conexão</p>
                <button type="button"> Comprar Online</button>
            </div>



        </div>


    );
}

export default CardFeatures;