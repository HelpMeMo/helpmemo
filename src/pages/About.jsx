import React from "react";
import "../styles/About.css";
import logo from '../assets/logo.png';
import vaca from '../assets/vaca.png';
import vacaLeite from '../assets/vacaLeite.png';
import integrante1 from '../assets/integrante1.jpeg';
import integrante2 from '../assets/integrante2.jpeg';
import integrante3 from '../assets/integrante1.jpeg';
import integrante4 from '../assets/integrante1.jpeg';
import integrante5 from '../assets/integrante5.jpeg';

const teamMembers = [
        { name: "Isabelly B.", role: "Desenvolvedora FullStack", image: integrante1 },
        { name: "Sophia M.", role: "Desenvolvedora FullStack", image: integrante2 },
        { name: "Sure R.", role: "Desenvolvedora FullStack", image: integrante1 },
        { name: "Thalita S.", role: "Desenvolvedora FullStack", image: integrante1 },
        { name: "Thayná N.", role: "Desenvolvedora FullStack", image: integrante5 },
];

const About = () => {
        return (
                <>
                        <div className="aboutpage">
                                <div className="logoTest"> <img src={logo} alt="Logo" className="logo-img" /></div>

                                <h1 className="titulo">Projeto: O que é e qual o objetivo? </h1>
                                <p className="text"> É uma plataforma educacional temática que une criatividade e o universo das vaquinhas inteligentes para transformar o aprendizado em uma experiência leve, divertida e marcante. Focado em disciplinas como Sociologia, Matemática e HST (Higiene e Segurança do Trabalho), o projeto foi criado para ajudar estudantes a superar desafios acadêmicos e fixar conteúdos com facilidade. Seja para lembrar uma fórmula, um conceito sociológico ou uma norma importante, o HelpMeMo é a ferramenta ideal para estimular a memória de forma lúdica e prazerosa – tudo isso com um toque especial de fofura! </p>
                                <h1 className="titulo">Equipe: Quem desenvolveu a ideia?</h1>
                                <p className="text">A equipe responsável pelo desenvolvimento do site é composta por cinco alunas do IFCE, programadoras e comprometidas em criar uma plataforma de aprendizado eficaz e envolvente. Temos uma paixão profunda pela educação e acreditamos que todos têm o potencial de alcançar seus objetivos acadêmicos.</p>
                                <div className="team-container">
                                        {teamMembers.map((member, index) => (
                                                <div key={index} className="team-card">
                                                        <img src={member.image} alt={member.name} className="team-photo" />
                                                        <h3 className="team-name">{member.name}</h3>
                                                        <p className="team-role">{member.role}</p>
                                                </div>
                                        ))}
                                </div>
                                <h2 className="fraseFinal">Junte-se a nós nessa jornada, ficaremos muuuuito felizes!🐄</h2>
                        </div>
                        <div>
                                <img src={vaca} alt="vaquinha" className="vaca" />
                                <img src={vacaLeite} alt="vaquinha com leite" className="vaca" />
                        </div>
                </>
        );
};

export default About;