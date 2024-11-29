import TextBox from "../components/contents/MainContent";
import CarouselDisplay from "../components/display/CarouselDisplay";
import "../style/home.css";
import Title from "../components/contents/Title";

export default function Home() {

    const certifications = 8;
    const technologies = 11;

	return (
        <div className="main-container">
            <div className="display">
                <img src="profile.png" alt="" />
                <Title>Matheus Rosa</Title>
            </div>
            <TextBox 
                paragraph={"Iniciei minha carreira na 2Cloud Tecnologia com infraestrutura de TI, onde obtive uma experiência robusta em ambientes cloud com foco em AWS, observabilidade, infraestrutura como código e containers. Ao longo de minha trajetória, uni os conhecimentos de programação que já possuia previamente com as experiências em infraestrutura, e com isso me especializei em práticas DevOps, desenvolvendo automações, sistemas e microsserviços internos e sempre utilizando pipelines de CI/CD para integração contínua."}/>
            <TextBox 
                paragraph={"Hoje, além das experiências em diversos tipos e tamanhos de ambientes AWS, conquistei oito certificações, sendo sete em AWS e uma em Terraform. Também estou encaminhado para o último ano de bacharelado em Engenharia da Computação."}/>
            <CarouselDisplay title={"Minhas certificações"} assetsFolder={"certifications"} amount={certifications}></CarouselDisplay>
            <CarouselDisplay title={"Principais tecnologias"} assetsFolder={"technologies"} amount={technologies}></CarouselDisplay>
        </div>
    )
}