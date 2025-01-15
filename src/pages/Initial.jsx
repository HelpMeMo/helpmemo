import React from "react";
import "../styles/Initial.css";
import CardInitial from "../components/CardInitial";
import mathIcon from "../assets/math.png";
import hstIcon from "../assets/hst.png";
import sociologyIcon from "../assets/socio.png";

const Initial = () => {
        return (
                <div className="initial-container">
                        <header className="initial-header">
                                HelpMeMo - A plataforma da vaquinha inteligente!
                        </header>
                        <h2>Comece sua jornada!</h2>
                        <div className="cards-container">
                                <CardInitial
                                        image={mathIcon}
                                        title="MATEMÁTICA"
                                        backgroundColor="#FF7B69"
                                        borderColor="#FF4545"
                                        to="/math"
                                />
                                <CardInitial
                                        image={hstIcon}
                                        title="HST"
                                        backgroundColor="#90D999"
                                        borderColor="#4D9C57"
                                        to="/hst"
                                />
                                <CardInitial
                                        image={sociologyIcon}
                                        title="SOCIOLOGIA"
                                        backgroundColor="#D6B081"
                                        borderColor="#A68760"
                                        to="/sociology"
                                />
                        </div>
                </div>
        );
};

export default Initial;
