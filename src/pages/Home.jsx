import MainContent from "../components/cards/MainContent";
import CarouselDisplay from "../components/display/CarouselDisplay";
import "../style/home.css";

export default function Home() {

    const certifications = 8;
    const technologies = 11;

	return (
        <div className="main-container">
            <MainContent 
                title={"Matheus Rosa"} 
                paragraph={"Hi! My name is Matheus Araujo da Rosa, I'm a DevOps Engineer with a high expertise in DevOps practices and AWS Cloud. Throughout my journey, I worked with the best sides of development and operations, working with many different cloud environments and always searching for inovation and modernization following the best practices."}>
            </MainContent>
            <CarouselDisplay title={"My certifications"} assetsFolder={"certifications"} amount={certifications}></CarouselDisplay>
            <CarouselDisplay title={"Technologies"} assetsFolder={"technologies"} amount={technologies}></CarouselDisplay>
        </div>
    )
}

