import { Typography } from "@mui/material";
import React from "react";
import NewsBox from "./NewsBox";

function Whatnew() {
    return (
        <>
            <div className="Whatnew" style={{ margin: "100px auto" }}>
                <div className="container">
                    <div className="row">
                        <Typography
                            sx={{
                                color: "#fff",
                                fontSize: "55px",
                                fontFamily: "gameplay",
                                textAlign: "center",
                            }}
                        >
                            NOVIDADES
                        </Typography>

                        <div className="col-md-4">
                            <NewsBox
                                news_header="NOTICIA"
                                news_tittle="Anunciado o relançamento do jogo Outlive"
                                news_date="24 jan 2022"
                                news_img="img/noti1.png"
                            />
                        </div>
                        <div className="col-md-4">
                            <NewsBox
                                news_header="Evento"
                                news_tittle="Lançado o trailer do Outlive"
                                news_date="24 jan 2022"
                                news_img="img/noti2.png"
                            />
                        </div>
                        <div className="col-md-4">
                            <NewsBox
                                news_header="NOTICIA"
                                news_tittle="Divulgados detalhes do projeto Outlive"
                                news_date="24 jan 2022"
                                news_img="img/noti1.png"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Whatnew;
