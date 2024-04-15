import React from 'react';
import ImageItem from "../carousel/ImageItem";

class Certifications extends React.Component {

    render() {

        const qtd = 7;

        const getImages = (n) => {
            const images = [];
            for (let i = 1; i <= n; i++) {
                images.push({ original: `src/assets/certifications/${i}.png` });
            }
            return images;
        };

        const images = getImages(qtd);

        return (
            <div className="carousel-container pl-5 pr-5">
                <div className="carousel-track">
                    {images.map((image, index) => {
                    return (
                        <ImageItem img={image.original} key={index}></ImageItem>
                    );
                    })}
                </div>
            </div>
        );
    }
}

export default Certifications;