import { Carousel } from "flowbite-react";
import React from 'react';
import CarouselItem from "../carousel/CarouselItem";

class Certifications extends React.Component {
    render() {
        const getImages = (n) => {
            const images = [];
            for (let i = 1; i <= n; i++) {
                images.push({ original: `src/assets/certifications/${i}.png` });
            }
            return images;
        };

        const images = getImages(7);

        return (
            <div className="carousel-container pl-5 pr-5">
                <div className="carousel-track">
                    {images.map((image, index) => {
                    return (
                        <CarouselItem img={image.original} key={index}></CarouselItem>
                    );
                    })}
                </div>
            </div>
        );
    }
}

export default Certifications;