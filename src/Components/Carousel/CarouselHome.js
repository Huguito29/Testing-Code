import React from "react";
import { Carousel } from "react-bootstrap";
import Banner1 from '../../images/busao1.jpg';
import Banner2 from '../../images/busao2.jpg';
import Banner3 from '../../images/busao3.jpg';
import '../../Main.css';


function SlideHome() {
    return (
        <div className="slideBanner">
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={Banner1}
                        alt="First slide" height="450px"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={Banner2}
                        alt="Third slide" height="450px"
                    />

                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={Banner3}
                        alt="Third slide" height="450px"
                    />
                </Carousel.Item>
            </Carousel>
        </div>

    );
}
export default SlideHome;