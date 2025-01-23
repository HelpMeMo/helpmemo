import React, { useEffect, useState } from "react";
import "../styles/SplashScreen.css";
import logo from "../assets/logo.png";

// Importando as imagens manualmente
import mancha1 from "../assets/splash/mancha1.png";
import mancha2 from "../assets/splash/mancha2.png";
import mancha3 from "../assets/splash/mancha3.png";
import mancha4 from "../assets/splash/mancha4.png";
import mancha5 from "../assets/splash/mancha5.png";
import mancha6 from "../assets/splash/mancha6.png";
import mancha7 from "../assets/splash/mancha7.png"; // Nova mancha
import mancha8 from "../assets/splash/mancha8.png"; // Nova mancha
import mancha9 from "../assets/splash/mancha9.png"; // Nova mancha
import mancha10 from "../assets/splash/mancha10.png"; // Nova mancha
import mancha11 from "../assets/splash/mancha11.png"; // Mancha adicionada

const SplashScreen = ({ onComplete }) => {
        const [progress, setProgress] = useState(0);

        useEffect(() => {
                const interval = setInterval(() => {
                        setProgress((prev) => (prev < 100 ? prev + 4 : 100));
                }, 100); // Aumenta o progresso até 100 em 5 segundos

                if (progress === 100) {
                        setTimeout(() => {
                                onComplete(); // Informa ao App que o carregamento terminou
                        }, 200); // Aguarda meio segundo após o progresso completo
                }

                return () => clearInterval(interval);
        }, [progress, onComplete]);

        return (
                <div className="splash-screen">
                        <div className="manchas">
                                {/* Manchas existentes */}
                                <img src={mancha1} alt="Mancha 1" className="mancha mancha-1" />
                                <img src={mancha2} alt="Mancha 2" className="mancha mancha-2" />
                                <img src={mancha3} alt="Mancha 3" className="mancha mancha-3" />
                                <img src={mancha4} alt="Mancha 4" className="mancha mancha-4" />
                                <img src={mancha5} alt="Mancha 5" className="mancha mancha-5" />
                                <img src={mancha6} alt="Mancha 6" className="mancha mancha-6" />

                                {/* Novas manchas para os cantos */}
                                <img src={mancha7} alt="Mancha 7" className="mancha mancha-7" />
                                <img src={mancha8} alt="Mancha 8" className="mancha mancha-8" />
                                <img src={mancha9} alt="Mancha 9" className="mancha mancha-9" />
                                <img src={mancha10} alt="Mancha 10" className="mancha mancha-10" />
                                <img src={mancha11} alt="Mancha 11" className="mancha mancha-11" /> {/* Nova mancha */}
                        </div>
                        <div className="splash-logo">
                                <img src={logo} alt="HelpMeMo Logo" />
                        </div>
                        <div className="loading-bar">
                                <div className="progress" style={{ width: `${progress}%` }}></div>
                        </div>
                </div>
        );
};

export default SplashScreen;
