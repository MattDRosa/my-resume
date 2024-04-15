import MainContent from "../components/cards/MainContent";
import ImageDisplay from "../components/exibitions/ImageDisplay";
import Footer from "../components/footer/Footer";

export default function Home() {

    const certifications = 7;
    const technologies = 5;

	return (
        <>
            <div className="mx-auto mt-10 rounded-xl max-w-7xl bg-neutral-800/30">
                <MainContent 
                    title={"Matheus Rosa"} 
                    paragraph={"Hi! My name is Matheus Araujo da Rosa, I'm a DevOps Engineer with a high expertise in DevOps practices and AWS Cloud. Throughout my journey, I worked with the best sides of development and operations, working with many different cloud environments and always searching for inovation and modernization following the best practices."}>
                </MainContent>
                <ImageDisplay title={"My certifications"} assetsFolder={"certifications"} amount={certifications}></ImageDisplay>
                <ImageDisplay title={"Technologies"} assetsFolder={"technologies"} amount={technologies}></ImageDisplay>
            </div>
            <Footer></Footer>
        </>
    )
}

