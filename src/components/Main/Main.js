import { Box, Button, Typography, Modal } from "@mui/material";
import React from "react";
import "./Main.css";
import { motion } from "framer-motion";

function Main() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (
        <>
            <div className="Main" style={{ paddingTop: "80px" }}>
                <div>
                    <motion.div
                        className="main_logo"
                        initial={{ opacity: 0, y: -100 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            delay: 0.5,
                            duration: 0.5,
                            type: "spring",
                        }}
                    >
                        <img src="img/logo.png" alt="" width={"100%"} />
                    </motion.div>

                    <div className="hero_video">
                        <video autoPlay="true" loop="true" muted="true">
                            <source src="img/top.mp4" type="video/mp4" />
                        </video>
                        {/* <img
                            className="card_iframe"
                            src="img/main_video_frame.png"
                            alt=""
                        /> */}
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
                        <div
                            style={{
                                position: "relative",
                                maxWidth: "80vw",
                                height: "80vh",
                                margin: "0 auto",
                                top: "50%",
                                transform: "translateY(-50%)",
                            }}
                        >
                            <iframe
                                style={{
                                    position: "relative",
                                    top: 0,
                                    left: 0,
                                    right: 0,
                                    bottom: 0,
                                    width: "100%",
                                    height: "100%",
                                    margin: " 10px",
                                    border: "none",
                                }}
                                src={
                                    "https://www.youtube-nocookie.com/embed/h7MYJghRWt0"
                                }
                                title="YouTube video player"
                                frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowfullscreen
                            ></iframe>
                        </div>
                    </Modal>
                </div>
            </div>
        </>
    );
}

export default Main;
