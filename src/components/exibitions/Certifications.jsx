import { Carousel } from "flowbite-react";
import React from 'react';

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
            <Carousel className='flex-col sm:h-25 xl:h-30 pl-10 pr-10'>
                {images.map((img, index) => (
                    <div className="flex justify-center items-center" key={index}>
                        <img
                            className="d-block w-auto h-auto"
                            src={img.original}
                        />
                    </div>
                ))}
            </Carousel>
        );
    }
}

export default Certifications;