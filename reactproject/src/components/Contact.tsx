import React from "react";
import "../styles/contact.css";

const Contact: React.FC = () => {
    return (
        <section id="contact" className="contact-section">
            <header>
                <p className="subtitle">Envie sua dúvida</p>
                <h2>Agende sua consulta ou tire suas dúvidas</h2>
                <p>Estamos à disposição para ajudar você a cuidar da sua saúde.<br/>
                Preencha o formulário abaixo para agendar sua consulta, esclarecer dúvidas sobre tratamentos ou obter mais informações.<br/>
                Nossa equipe está pronta para atender você com dedicação e carinho.</p>
            </header>

            <form className="contact-form">
                <input
                    type="email"
                    placeholder="Seu melhor Email"
                    className="form-input"
                    required
                />
                <textarea
                    placeholder="Motivo do contato. Ex: Gostaria de agendar uma consulta ou saber mais sobre o tratamento X."
                    className="form-textarea"
                    required
                ></textarea>
                <button type="submit" className="form-button">Enviar</button>
            </form>
        </section>
    );
};

export default Contact;
