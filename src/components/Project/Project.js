import { Typography } from "@mui/material";
import { width } from "@mui/system";
import React, { useEffect, useState } from "react";
import "./Project.css";
function Project() {
    const [mainVideo, setMainVideo] = useState("h7MYJghRWt0");
    useEffect(() => {
        console.log(mainVideo);
    });
    // hub-QwBj3Eg
    // http://img.youtube.com/vi/[video-id]/maxresdefault.jpg
    return (
        <>
            <div className="Project" id="Project">
                <Typography
                    sx={{
                        color: "#fff",
                        fontSize: "55px",
                        fontFamily: "gameplay",
                        textAlign: "center",
                    }}
                >
                    PROJETO OUTLIVE{" "}
                </Typography>
                <div className="main_video">
                    <iframe
                        src={`https://www.youtube-nocookie.com/embed/${mainVideo}`}
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen
                    ></iframe>
                    {/* <img
                        className="card_iframe"
                        src="img/main_video_frame.png"
                        alt=""
                    /> */}
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <div
                                className="main_card"
                                onClick={() => setMainVideo("h7MYJghRWt0")}
                            >
                                <div className="video_card">
                                    <img
                                        className="card_img"
                                        src={`http://img.youtube.com/vi/h7MYJghRWt0/maxresdefault.jpg`}
                                        alt=""
                                    />
                                    <img
                                        className="card_frame"
                                        src="img/video_frame.png"
                                        alt=""
                                    />
                                </div>
                                <Typography
                                    sx={{
                                        fontFamily: "neulis",
                                        fontSize: "26px",
                                        fontWeight: "400",
                                        color: "#fff",
                                        opacity: "0.5",
                                        textAlign: "center",
                                        padding: "20px",
                                        "@media(max-width:1399px)": {
                                            fontSize: "18px",
                                        },
                                        "@media(max-width:991px)": {
                                            fontSize: "14px",
                                            padding: "10px",
                                        },
                                    }}
                                >
                                    Veja mais informações sobre o relançamento
                                    do jogo Outlive
                                </Typography>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div
                                className="main_card"
                                onClick={() => setMainVideo("hub-QwBj3Eg")}
                            >
                                <div className="video_card">
                                    <img
                                        className="card_img"
                                        src={`http://img.youtube.com/vi/hub-QwBj3Eg/maxresdefault.jpg`}
                                        alt=""
                                    />
                                    <img
                                        className="card_frame"
                                        src="img/video_frame.png"
                                        alt=""
                                    />
                                </div>
                                <Typography
                                    sx={{
                                        fontFamily: "neulis",
                                        fontSize: "26px",
                                        fontWeight: "400",
                                        color: "#fff",
                                        opacity: "0.5",
                                        textAlign: "center",
                                        padding: "20px",
                                        "@media(max-width:1399px)": {
                                            fontSize: "18px",
                                        },
                                        "@media(max-width:991px)": {
                                            fontSize: "14px",
                                            padding: "10px",
                                        },
                                    }}
                                >
                                    Conheça as adaptações e a plataforma
                                    escolhida
                                </Typography>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="main_card">
                                <div
                                    className="video_card"
                                    onClick={() => setMainVideo("QASwmAvJTpc")}
                                >
                                    <img
                                        className="card_img"
                                        src={`http://img.youtube.com/vi/QASwmAvJTpc/maxresdefault.jpg`}
                                        alt=""
                                    />{" "}
                                    <img
                                        className="card_frame"
                                        src="img/video_frame.png"
                                        alt=""
                                    />
                                </div>
                                <Typography
                                    sx={{
                                        fontFamily: "neulis",
                                        fontSize: "26px",
                                        fontWeight: "400",
                                        color: "#fff",
                                        opacity: "0.5",
                                        textAlign: "center",
                                        padding: "20px",
                                        "@media(max-width:1399px)": {
                                            fontSize: "18px",
                                        },
                                        "@media(max-width:991px)": {
                                            fontSize: "14px",
                                            padding: "10px",
                                        },
                                    }}
                                >
                                    Saiba como será viabilizado o
                                    desenvolvimento do Outlive
                                </Typography>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="right_circuit">
                <img src="img/right_circuit.gif" alt="" />
            </div>
        </>
    );
}

export default Project;
