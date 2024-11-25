import { useEffect, useRef } from 'react';
import CarouselImage from "./CarouselImage";
import "./carousel.scss";

export default function Carousel({images}) {
    const scrollerRef = useRef(null);

    useEffect(() => {
        const scroller = scrollerRef.current;
        if (!scroller) return;

        const scrollerInner = scroller.querySelector('.scroller__inner');
        const allImages = scrollerInner.getElementsByTagName('img');
        
        const imagePromises = Array.from(allImages).map(img => {
            return new Promise((resolve) => {
                if (img.complete) {
                    resolve();
                } else {
                    img.onload = resolve;
                }
            });
        });

        Promise.all(imagePromises).then(() => {
            scroller.setAttribute('data-animated', true);
            const scrollerContent = Array.from(scrollerInner.children);
            
            scrollerContent.forEach(item => {
                const duplicatedItem = item.cloneNode(true);
                duplicatedItem.setAttribute('aria-hidden', true);
                scrollerInner.appendChild(duplicatedItem);
            });
        });
    }, [images]);

    return (
        <div className="scroller" ref={scrollerRef}>
            <div className="slide-track scroller__inner">
                {images.map((image, index) => (
                    <CarouselImage img={image.original} key={index}/>
                ))}    
            </div>
        </div>
    );
}
