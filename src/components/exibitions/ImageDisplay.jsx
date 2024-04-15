import ImageItem from "../carousel/ImageItem";
import Title from "../cards/Title";

export default function ImageDisplay ( { title, assetsFolder, amount } ) {

    const getImages = (n) => {
        const images = [];
        for (let i = 1; i <= n; i++) {
            images.push({ original: `src/assets/${assetsFolder}/${i}.png` });
        }
        return images;
    };

    const images = getImages(amount);

    return (
        <>
        <Title title={title}></Title>
            <div className="carousel-container pl-5 pr-5">
                <div className="carousel-track">
                    {
                        images.map(
                            (image, index) => {
                                return (
                                    <ImageItem img={image.original} key={index}></ImageItem>
                                );
                            }
                        )
                    }
                </div>
            </div>
        </>
    );
}
