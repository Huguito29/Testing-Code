import React from "react";
import { Card, Button } from "react-bootstrap";
import '../../Main.css';


function CardFeatures() {
    return (

        <div class="grid-container">
            <div class="grid-itens">
                <Button variant="secondary" size="lg">
                    teste 1
            </Button>
            </div>

            <div class="grid-itens">
                <Button variant="primary" size="lg">
                    teste 2
            </Button>
            </div>

            <div class="grid-itens">
                <Button variant="danger" size="lg">
                    teste 3
            </Button>
            </div>

            <div class="grid-itens">
                <Button variant="success" size="lg">
                    teste 4
            </Button>
            </div>


        </div>


    );
}

export default CardFeatures;