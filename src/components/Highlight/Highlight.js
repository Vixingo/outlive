import { Typography } from "@mui/material";
import React from "react";
import "./Highlight.css";
function Highlight() {
    return (
        <>
            <div className="Highlight" id="Highlight">
                <Typography
                    sx={{
                        color: "#fff",
                        fontSize: "55px",
                        fontFamily: "gameplay",
                        textAlign: "center",
                    }}
                >
                    DESTAQUES DO JOGO
                </Typography>
                <div className="high_container">
                    <div className="row high_row">
                        <div className="col-md-6">
                            <div className="container">
                                <div className="game_img">
                                    <img
                                        src="img/game1.png"
                                        width={"100%"}
                                        alt=""
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 align-self-center">
                            <div className="container">
                                <Typography
                                    sx={{
                                        fontSize: "40px",
                                        fontWeight: "500",
                                        fontFamily: "neulis",
                                        color: "#fff",
                                        textAlign: "center",
                                        marginBottom: "22px",
                                        "@media(max-width:1399px)": {
                                            fontSize: "30px",
                                        },
                                        "@media(max-width:991px)": {
                                            marginBottom: "12px",
                                            fontSize: "24px",
                                        },
                                    }}
                                >
                                    ESTRAT??GIAS DIVERSAS
                                </Typography>
                                <Typography
                                    sx={{
                                        fontSize: "36px",
                                        fontWeight: "400",
                                        fontFamily: "neulis",
                                        color: "#fff",
                                        textAlign: "center",
                                        maxWidth: "800px",
                                        margin: "0 auto",
                                        "@media(max-width:1399px)": {
                                            fontSize: "20px",
                                        },
                                        "@media(max-width:991px)": {
                                            fontSize: "14px",
                                        },
                                    }}
                                >
                                    Outlive ?? um jogo de estrat??gia em tempo
                                    real onde voc?? comanda suas tropas atrav??s
                                    de incr??veis cen??rios. Combine v??rias
                                    t??ticas de ataque e surpreenda seus inimigos
                                    na luta pela supremacia.
                                </Typography>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="high_container">
                    <div className="row high_row flex-row-reverse  ">
                        <div className="col-md-6">
                            <div className="container">
                                <div className="game_img">
                                    <img
                                        src="img/game2.png"
                                        width={"100%"}
                                        alt=""
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 align-self-center">
                            <div className="container">
                                <Typography
                                    sx={{
                                        fontSize: "40px",
                                        fontWeight: "500",
                                        fontFamily: "neulis",
                                        color: "#fff",
                                        textAlign: "center",
                                        marginBottom: "22px",
                                        "@media(max-width:1399px)": {
                                            fontSize: "30px",
                                        },
                                        "@media(max-width:991px)": {
                                            marginBottom: "12px",
                                            fontSize: "24px",
                                        },
                                    }}
                                >
                                    RA??AS DIFERENCIADAS{" "}
                                </Typography>
                                <Typography
                                    sx={{
                                        fontSize: "36px",
                                        fontWeight: "400",
                                        fontFamily: "neulis",
                                        color: "#fff",
                                        textAlign: "center",
                                        maxWidth: "800px",
                                        margin: "0 auto",
                                        "@media(max-width:1399px)": {
                                            fontSize: "20px",
                                        },
                                        "@media(max-width:991px)": {
                                            fontSize: "14px",
                                        },
                                    }}
                                >
                                    Duas ra??as que possuem unidades,
                                    tecnologias, espionagem e energia
                                    diferenciadas, oferecendo uma enorme
                                    quantidade de estrat??gias e alternativas
                                    para o jogador.
                                </Typography>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Highlight;
