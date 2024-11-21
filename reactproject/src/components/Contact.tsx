import React, { useState} from "react";
import "../styles/contact.css";

const Contact: React.FC = () => {
    const [email, setEmail] = useState("");
    const [content, setContent] = useState("");

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
    
        const body = {
            toMail: email,
            content: content,
        };
    
        try {
            await fetch("/api", { 
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImQ5NzQwYTcwYjA5NzJkY2NmNzVmYTg4YmM1MjliZDE2YTMwNTczYmQiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL2FjY291bnRzLmdvb2dsZS5jb20iLCJhenAiOiIzMjU1NTk0MDU1OS5hcHBzLmdvb2dsZXVzZXJjb250ZW50LmNvbSIsImF1ZCI6IjMyNTU1OTQwNTU5LmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tIiwic3ViIjoiMTA3MTg4MjgxNzAzOTc3MTQ5MjMzIiwiaGQiOiJtaW5oYS5mYWcuZWR1LmJyIiwiZW1haWwiOiJja3NjaHdlaW5iZXJnZXJAbWluaGEuZmFnLmVkdS5iciIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJhdF9oYXNoIjoiS2xTTHRmbnpkT2xqenUxZjdBR1l0QSIsImlhdCI6MTczMjE5MjUwOSwiZXhwIjoxNzMyMTk2MTA5fQ.YeziVW9ocejQhTAEGpm_oIzBZbIpdt0lZQUtUwP8ULlHFsY9bq9vI2S802aZBpfxqxVrV6RCFqu35vRnEFZfbhEdyKjwERblBZM9tsVc5MMPMLS6Ymx2mltX6JYuKEQzWyS7s_KLkFvzvGihKZ5GeyVjlJFRwBrlZDs9HjeKKAr1t8jJ5tuU-M_Zp11k9cilJK4mgHeaUVsvjJNpleQPn6JawSpv2D3SfgJmSLsRYZ2pLWwUMncqA7p5h0zZiQawS1xvdpitAL_M2Z12WIm7vouh5SZjoUlsH_BVKHnReVHIixXC-txmJnG1P3tQyAmiWbtssY6z7CMffrVt6yQVNw",
                },
                body: JSON.stringify(body),
            });

        } catch (error) {
            alert("Ocorreu um erro ao enviar o formulário.");
            console.error("Erro na requisição:", error);
        }
    };

    return (
        <section id="contact" className="contact-section">
            <header>
                <p className="subtitle">Envie sua dúvida</p>
                <h2>Agende sua consulta ou tire suas dúvidas</h2>
                <p>Estamos à disposição para ajudar você a cuidar da sua saúde.<br/>
                Preencha o formulário abaixo para agendar sua consulta, esclarecer dúvidas sobre tratamentos ou obter mais informações.<br/>
                Nossa equipe está pronta para atender você com dedicação e carinho.</p>
            </header>

            <form className="contact-form" onSubmit={handleSubmit}>
                <input
                    type="email"
                    placeholder="Seu melhor Email"
                    className="form-input"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <textarea
                    placeholder="Motivo do contato. Ex: Gostaria de agendar uma consulta ou saber mais sobre o tratamento X."
                    className="form-textarea"
                    required
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                ></textarea>
                <button type="submit" className="form-button">Enviar</button>
            </form>
        </section>
    );
};

export default Contact;
