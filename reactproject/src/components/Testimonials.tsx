import React from "react";
import "../styles/testimonials.css";
import image1 from "../assets/images/depoimento1.jpg";
import image2 from "../assets/images/depoimento2.jpg";
import image3 from "../assets/images/depoimento3.jpg";
import image4 from "../assets/images/depoimento4.jpg";
import image5 from "../assets/images/depoimento5.jpg";
import image6 from "../assets/images/depoimento6.jpg";


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
                        <img src={image1} alt="Paciente 1" className="profile-image"/>
                        <p>Desde a primeira consulta, a Dra Julia me passou muita confiança.
                        Ela explica tudo com clareza e tem um cuidado incrível com cada detalhe.
                        Nunca me senti tão bem assistida e cuidada como mulher. Super recomendo!</p>
                        <div className="rating">★★★★★</div>
                        <h4>Mariana Souza</h4>
                        <span>32 anos</span>
                    </div>

                    <div className="carousel-card">
                        <img src={image2} alt="Paciente 2" className="profile-image"/>
                        <p>Fiz meu acompanhamento pré-natal com a Dra. Julia, e foi a melhor decisão que tomei.
                        Ela estava sempre disponível para tirar minhas dúvidas e me tranquilizar nos momentos de preocupação.
                        Meu parto foi perfeito graças a ela!</p>
                        <div className="rating">★★★★☆</div>
                        <h4>Ana Ribeiro</h4>
                        <span>29 anos</span>
                    </div>

                    <div className="carousel-card">
                        <img src={image3} alt="Paciente 3" className="profile-image"/>
                        <p>A Dra. Julia é uma profissional excepcional!
                        Depois de anos de desconforto com médicos, finalmente encontrei alguém que entende e respeita minhas necessidades.
                        Cada consulta é um momento de cuidado e atenção genuína.</p>
                        <div className="rating">★★★★★</div>
                        <h4>Clara Martins</h4>
                        <span>36 anos</span>
                    </div>

                    <div className="carousel-card">
                        <img src={image4} alt="Paciente 4" className="profile-image"/>
                        <p>Eu tinha muito medo de ir ao ginecologista, mas a Dra. Julia me fez sentir completamente à vontade.
                        Ela é gentil, respeitosa e muito experiente.
                        Recomendo para todas as mulheres que procuram um atendimento humanizado.</p>
                        <div className="rating">★★★★☆</div>
                        <h4>Beatriz Lima</h4>
                        <span>24 anos</span>
                    </div>

                    <div className="carousel-card">
                        <img src={image5} alt="Paciente 5" className="profile-image"/>
                        <p>Após enfrentar dificuldades para engravidar, fui indicada para a Dra. Julia.
                        Ela foi extremamente cuidadosa e detalhista no tratamento, e hoje estou grávida do meu primeiro bebê.
                        Não tenho palavras para agradecer, voltarei sempre!</p>
                        <div className="rating">★★★★★</div>
                        <h4>Fernanda Alves</h4>
                        <span>33 anos</span>
                    </div>

                    <div className="carousel-card">
                        <img src={image6} alt="Paciente 6" className="profile-image"/>
                        <p>A Dra. Julia é mais que uma médica, ela é como uma amiga para suas pacientes.
                        O atendimento é personalizado, com explicações detalhadas e muito carinho.
                        Sinto que estou em boas mãos sempre que a procuro.</p>
                        <div className="rating">★★★★☆</div>
                        <h4>Gabriela Santos</h4>
                        <span>40 anos</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
