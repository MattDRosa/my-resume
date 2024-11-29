import Title from "../contents/Title";
import Carousel from "../carousel/Carousel";

export default function CarouselDisplay ( { title, assetsFolder, amount } ) {

    const getImages = (n) => {
        const images = [];
        for (let i = 1; i <= n; i++) {
            images.push({ original: `assets/${assetsFolder}/${i}.png` });
        }
        return images;
    };

    const images = getImages(amount);

    return (
        <>
            <Title>{title}</Title>
            <Carousel images={images}/>
        </>
    )
}
