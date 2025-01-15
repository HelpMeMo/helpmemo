import React from "react";
import "../styles/About.css";
import logo from '../assets/logo.png';
import vaca from '../assets/vaca.png'
import vacaLeite from '../assets/vacaLeite.png'

const About = () => {
        return (
                <>
                        <div className="aboutpage">
                                <img src={logo} alt="Logo" className="logo-img" />
                                <h1 className="titulo">Projeto</h1>
                                <h2 className="subtitulo">O que é?</h2>
                                <p>HelpMeMo é uma plataforma educacional temática, focada em memória para disciplinas de Sociologia, Matemática, Física e HST (Higiene e Segurança do Trabalho). </p>
                                <h2 className="subtitulo">Qual o objetivo?</h2>
                                <p>Foi projetada para ajudar os alunos a melhorar sua retenção de informações e desempenho acadêmico de uma forma descontraída</p>
                                <h1 className="titulo">Equipe</h1>
                                <p>A equipe responsável pelo desenvolvimento do site é composta por cinco alunas do IFCE, programadoras e comprometidas em criar uma plataforma de aprendizado eficaz e envolvente. Temos uma paixão profunda pela educação e acreditamos que todos têm o potencial de alcançar seus objetivos acadêmicos.</p>
                                <h2>Junte - se a nós nessa jornada!</h2>
                        </div>
                        <div>
                                <img src={vaca} alt="vaquinha" className="vaca" />
                                <img src={vacaLeite} alt="vaquinha com leite" className="vaca" />
                        </div>
                </>

        );
};

export default About;
