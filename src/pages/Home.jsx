import MainContent from "../components/cards/MainContent";
import Title from "../components/cards/Title";

export default function Home() {
	return (
        <div className="mx-auto mt-10 rounded-xl max-w-7xl bg-neutral-800/30 mb-auto">
            <MainContent 
                title={"Matheus Rosa"} 
                paragraph={"Hi! My name is Matheus Araujo da Rosa, I'm a Software Engineer with a high expertise in DevOps practices and AWS Cloud. Throughout my journey, I worked with the best sides of development and operations, working with many different cloud environments and always searching for inovation and modernization and following the best practices."}>
            </MainContent>
            <Title title={"Certifications"}></Title>
        </div>
    )
}

