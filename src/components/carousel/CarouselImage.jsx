export default function CarouselImage ( { img } ) {
    return (
        <div className="slide">
            <img 
                src={img} 
                alt=""
                loading="eager"
            />
        </div>
    );
}