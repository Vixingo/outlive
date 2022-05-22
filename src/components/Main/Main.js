import { Box, Button, Typography, Modal } from "@mui/material";
import React from "react";
import "./Main.css";

function Main() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (
        <>
            <div className="Main" style={{ paddingTop: "85px" }}>
                <div>
                    <div className="main_logo">
                        <img src="img/logo.png" alt="" width={"100%"} />
                    </div>
                    {/* <div className="main_img">
                        <img src="img/main.png" alt="" width={"100%"} />
                    </div> */}
                    <div className="hero_video">
                        <video
                            class="top_video"
                            src="img/top.mp4"
                            autoPlay="true"
                            loop="true"
                        ></video>
                        <img
                            className="card_iframe"
                            src="img/main_video_frame.png"
                            alt=""
                        />
                    </div>
                    <div className="main_btn_group">
                        <div className="row">
                            <div className="col-md-6">
                                <Button
                                    onClick={handleOpen}
                                    className="main_btn"
                                    sx={{
                                        color: "#fff",
                                        fontSize: "18px",
                                        fontFamily: "gameplay",
                                        maxWidth: "400px",
                                        transition: ".2s",
                                        height: "65px",
                                        width: "100%",
                                        backgroundImage: "url(img/btnbg.png)",
                                        backgroundSize: "100% 100%",
                                        backgroundRepeat: "no-repeat",
                                        "&:hover": {
                                            textShadow: "0 3px 3px #FDDA2D",
                                            boxShadow:
                                                "0 0.5em 0.5em -0.4em #ffa300",
                                            // transform: "translateY(-0.25em)",
                                        },
                                    }}
                                >
                                    Trailer
                                </Button>
                                <p>Assista ao trailer do Outlive</p>
                            </div>
                            <div className="col-md-6">
                                <a href="#Project">
                                    {" "}
                                    <Button
                                        className="main_btn2"
                                        sx={{
                                            color: "#fff",
                                            fontSize: "18px",
                                            fontFamily: "gameplay",
                                            maxWidth: "400px",
                                            transition: ".2s",
                                            height: "65px",
                                            width: "100%",
                                            backgroundImage:
                                                "url(img/btnbg.png)",
                                            backgroundSize: "100% 100%",
                                            backgroundRepeat: "no-repeat",
                                            "&:hover": {
                                                textShadow: "0 3px 3px #FDDA2D",
                                                boxShadow:
                                                    "0 0.5em 0.5em -0.4em #ffa300",
                                                // transform: "translateY(-0.25em)",
                                            },
                                        }}
                                    >
                                        Projeto outlive
                                    </Button>
                                </a>
                                <p>Saiba mais sobre o projeto</p>
                            </div>
                        </div>
                    </div>
                    <Modal
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                    >
                        <Box
                            sx={{
                                position: "absolute",
                                top: "50%",
                                left: "50%",
                                transform: "translate(-50%, -50%)",
                            }}
                        >
                            <iframe
                                width="900"
                                height="515"
                                src="https://www.youtube.com/embed/h7MYJghRWt0?start=71"
                                title="YouTube video player"
                                frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowfullscreen
                            ></iframe>
                        </Box>
                    </Modal>
                </div>
            </div>
        </>
    );
}

export default Main;
