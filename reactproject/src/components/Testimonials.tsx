import React from "react";
import "../styles/testimonials.css";

const Testimonials: React.FC = () => {
    return (
        <section id="testimonials" className="testimonials-section">
            <header>
                <p className="desktop-only">Conselho de quem conhece</p>
                <h2>Cada paciente importa!</h2>
                <p>
                    Cada mulher tem uma história única, e cuidar de cada detalhe é o que nos motiva. <br />
                    Leia o que nossas pacientes têm a dizer sobre as experiências transformadoras que viveram conosco.
                </p>
            </header>

            <div className="carousel">
                <div className="carousel-content">
                    <div className="carousel-card">
                        <div className="profile-image-placeholder"></div>
                        <p>Depoimento 1 sobre os serviços da Dra. Julia.<br/>
                        Depoimento 1 sobre os serviços da Dra. Julia.<br/>
                        Depoimento 1 sobre os serviços da Dra. Julia.</p>
                        <div className="rating">★★★★★</div>
                        <h4>Paciente 1</h4>
                        <span>Profissão 1</span>
                    </div>

                    <div className="carousel-card">
                        <div className="profile-image-placeholder"></div>
                        <p>Depoimento 2 sobre os serviços da Dra. Julia.<br/>
                        Depoimento 2 sobre os serviços da Dra. Julia.<br/>
                        Depoimento 2 sobre os serviços da Dra. Julia.</p>
                        <div className="rating">★★★★☆</div>
                        <h4>Paciente 2</h4>
                        <span>Profissão 2</span>
                    </div>

                    <div className="carousel-card">
                        <div className="profile-image-placeholder"></div>
                        <p>Depoimento 3 sobre os serviços da Dra. Julia.<br/>
                        Depoimento 3 sobre os serviços da Dra. Julia.<br/>
                        Depoimento 3 sobre os serviços da Dra. Julia.</p>
                        <div className="rating">★★★★★</div>
                        <h4>Paciente 3</h4>
                        <span>Profissão 3</span>
                    </div>

                    <div className="carousel-card">
                        <div className="profile-image-placeholder"></div>
                        <p>Depoimento 4 sobre os serviços da Dra. Julia.<br/>
                        Depoimento 4 sobre os serviços da Dra. Julia.<br/>
                        Depoimento 4 sobre os serviços da Dra. Julia.</p>
                        <div className="rating">★★★★☆</div>
                        <h4>Paciente 4</h4>
                        <span>Profissão 4</span>
                    </div>

                    <div className="carousel-card">
                        <div className="profile-image-placeholder"></div>
                        <p>Depoimento 5 sobre os serviços da Dra. Julia.<br/>
                        Depoimento 5 sobre os serviços da Dra. Julia.<br/>
                        Depoimento 5 sobre os serviços da Dra. Julia.</p>
                        <div className="rating">★★★★★</div>
                        <h4>Paciente 5</h4>
                        <span>Profissão 5</span>
                    </div>

                    <div className="carousel-card">
                        <div className="profile-image-placeholder"></div>
                        <p>Depoimento 6 sobre os serviços da Dra. Julia.<br/>
                        Depoimento 6 sobre os serviços da Dra. Julia.<br/>
                        Depoimento 6 sobre os serviços da Dra. Julia.</p>
                        <div className="rating">★★★★☆</div>
                        <h4>Paciente 6</h4>
                        <span>Profissão 6</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
