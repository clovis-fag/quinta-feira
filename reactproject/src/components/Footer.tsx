import React from "react";
import "../styles/footer.css";
import Logo from "../assets/logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faFacebook, faYoutube } from "@fortawesome/free-brands-svg-icons";

const Footer: React.FC = () => {
    return (
        <footer className="footer-section">
            <div className="footer-content">
                <div className="footer-column">
                    <img src={Logo} alt="Logo Dra Julia" className="logo" />
                </div>

                <div className="footer-column">
                    <h4>Empresa</h4>
                    <ul>
                        <li><a href="#">Sobre nós</a></li>
                        <li><a href="#">Faça parte do time</a></li>
                        <li><a href="#">Blog</a></li>
                    </ul>
                </div>

                <div className="footer-column">
                    <h4>Social</h4>
                    <div className="social-icons">
                        <a href="#" aria-label="Instagram">
                            <FontAwesomeIcon icon={faInstagram} className="icon" />
                        </a>
                        <a href="#" aria-label="Facebook">
                            <FontAwesomeIcon icon={faFacebook} className="icon" />
                        </a>
                        <a href="#" aria-label="YouTube">
                            <FontAwesomeIcon icon={faYoutube} className="icon" />
                        </a>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <p>
                    Feito com muita fé na aula de Programação Web! Clovis S - Todos os direitos reservados.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
