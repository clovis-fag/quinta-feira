import Logo from "../assets/Logo.svg";
import ProductCard from '../components/ProductCard';
import "../styles/header.css";
import "../styles/utility.css";
import "../styles/buttons.css"
import { useState } from "react";
import Button from "../components/Buttons";
import Close from "../assets/close.svg";
import Menu from "../assets/menu.svg";
import HeroRectangleOne from "../assets/images/rectangleOne.png";
import HeroRectangleTwo from "../assets/images/rectangleTwo.png";
import "../styles/hero.css";
import "../styles/specialties.css";
import "../styles/productCard.css";

export default function Home() {

    const scrollToSpecialties = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        event.preventDefault();
        const section = document.getElementById("specialties");
        section?.scrollIntoView({ behavior: 'smooth' });
      };
      

    const [showMobileMenu, setShowMobileMenu] = useState(false);
    return (
        <>
            <header className="container py-sm">
                <nav className="flex items-center justify-between">
                    <img src={Logo} alt="Logo Dra Julia" width={220} height={160} />
                    <div className="desktop-only">
                        <ul className="flex gap-1">
                            <li>
                                <a href="#">Home</a>
                            </li>
                            <li>
                                <a href="#specialties" onClick={scrollToSpecialties}>Especialidades</a>
                            </li>
                            <li>
                                <a href="#testimonials">Depoimentos</a>
                            </li>
                            <li>
                                <a href="#pricing">Preços</a>
                            </li>
                            <li>
                                <a href="#contact">Contato</a>
                            </li>
                        </ul>
                    </div>

                    <div className="desktop-only">
                        <div className="flex items-center">
                            <a className="reverse-color ml-lg" href="">Login</a>
                            <Button text="Cadastre-se" />
                        </div>
                    </div>

                    <div className="mobile-menu">
                        {showMobileMenu ?
                            <div className="mobile-menu-content">
                                <div className="container flex">
                                    <ul>
                                        <li>
                                            <a href="#">Home</a>
                                        </li>
                                        <li>
                                            <a href="#specialties">Especialidades</a>
                                        </li>
                                        <li>
                                            <a href="#testimonials">Depoimentos</a>
                                        </li>
                                        <li>
                                            <a href="#pricing">Preços</a>
                                        </li>
                                        <li>
                                            <a href="#contact">Contato</a>
                                        </li>
                                    </ul>
                                    <span onClick={() => setShowMobileMenu(!showMobileMenu)} className="btn-wrapper">
                                        <img src={Close} alt="ícone fechar menu" width={24} height={24} />
                                    </span>
                                </div>
                            </div>
                            :
                            <span onClick={() => setShowMobileMenu(!showMobileMenu)} className="btn-wrapper" >
                                <img src={Menu} alt="ícone menu" width={24} height={24} />
                            </span>
                        }
                    </div>


                </nav>

            </header>

            <section id="hero">
                <span className="desktop-only">
                    <img src={HeroRectangleTwo} alt="Retangulo um tela inicial" />
                </span>
                <img src={HeroRectangleOne} alt="Retangulo dois tela inicial" />

                <div className="container content">
                    <p className="desktop-only">
                        Olá!
                    </p>
                    <h1>Me chamo Julia Ximenes, sou médica Ginecologista e apaixonada por Obstetrícia!</h1>
                    <p>Sou formada médica pelo Centro Universitário Assis Gurgacz, ginecologista e obstetra pela Universidade de Saõ Paulo. <br/>CRM/PR 121097 
                    </p>
                    <div className="flex gap-1">
                        <span><Button text="Cadastre-se" /></span>
                        <span className="desktop-only">
                            <Button text="Veja mais" secondary />
                        </span>
                    </div>
                </div>
            </section>

            <section className="specialties-section" id="specialties">
                <h2>Especialidades</h2>
                <p>
                A Dra. Julia oferece serviços completos e personalizados para atender a saúde da mulher em todas as fases da vida. <br/>
                Explore nossas soluções e veja como podemos ajudar você.
                </p>

                <div className="product-card-container">
                    <ProductCard 
                        title="Consultas Personalizadas" 
                        description="Um acompanhamento de perto para a sua saúde íntima, oferecendo exames preventivos e diagnósticos completos." 
                        icon="/src/assets/images/customQuery.png"
                    />
                    <ProductCard 
                        title="Planejamento Familiar" 
                        description="Suporte diferenciado para quem não deseja engravidar e para quem deseja também."
                        icon="/src/assets/images/familyPlan.png"
                    />
                    <ProductCard 
                        title="Acompanhamento Pré-Natal" 
                        description="Cuidados especializados para as futuras mamães, com suporte completo durante toda a gestação."
                        icon="/src/assets/images/prenatalCare.png"
                    />
                </div>
            </section>
        </>
    )
}