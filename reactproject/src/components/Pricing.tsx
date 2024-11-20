import React from "react";
import "../styles/pricing.css";

const Pricing: React.FC = () => {
    return (
        <section id="pricing" className="pricing-section">
            <header>
                <p className="subtitle">Planos e preços</p>
                <h2>Nossos planos</h2>
            </header>

            <div className="pricing-cards">
                <div className="pricing-card featured">
                    <h3>Cuidado Essencial</h3>
                    <p>Para pacientes que desejam acompanhamento regular com serviços de saúde feminina.</p>
                    <h4>R$ 149,90 <span>/mês</span></h4>
                    <button className="btn">Agendar agora</button>
                    <ul>
                        <li>✅ Consultas de rotina com desconto.</li>
                        <li>✅ Exames preventivos anuais com 20% de desconto.</li>
                        <li>✅ Acesso a dicas de saúde e bem-estar por e-mail.</li>
                    </ul>
                </div>

                <div className="pricing-card featured">
                    <h3>Cuidado Completo</h3>
                    <p>Ideal para pacientes que buscam um acompanhamento mais detalhado e completo.</p>
                    <h4>R$ 249,90 <span>/mês</span></h4>
                    <button className="btn primary">Agendar agora</button>
                    <ul>
                        <li>✅ Agendamento prioritário com horário exclusivo.</li>
                        <li>✅ Exames preventivos e laboratoriais com 50% de desconto.</li>
                        <li>✅ Acesso a uma linha direta para tirar dúvidas com a equipe médica.</li>
                    </ul>
                </div>

                <div className="pricing-card featured">
                    <h3>Gestação Segura</h3>
                    <p>Exclusivo para futuras mamães, com acompanhamento completo durante a gestação.</p>
                    <h4>R$ 299,90 <span>/mês</span></h4>
                    <button className="btn">Agendar agora</button>
                    <ul>
                        <li>✅ Acompanhamento mensal com consulta inclusa.</li>
                        <li>✅ Exames de ultrassom com desconto de 30%.</li>
                        <li>✅ Suporte por WhatsApp para dúvidas rápidas.</li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Pricing;
