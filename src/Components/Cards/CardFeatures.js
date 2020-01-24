import React from "react";
import { Button } from "react-bootstrap";
import '../../Main.css';
import HomeImages from "../images/HomeImages.js";


function CardFeatures() {
    return (
        
        <div className="grid-container">
            <div className="grid-itens">
                <Button variant="secondary" size="lg">
                    teste 1
            </Button>
            </div>
            
            <div className="grid-itens">
             <img src={HomeImages.images} alt="Teste"/>
            </div>

            <div className="grid-itens">
                <Button variant="danger" size="lg">
                    teste 3
            </Button>
            </div>

            <div className="grid-itens">
                <Button variant="success" size="lg">
                    teste 4
            </Button>
            </div>


        </div>


    );
}

export default CardFeatures;