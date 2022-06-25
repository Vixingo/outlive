import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { IconButton, Stack } from "@mui/material";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { motion } from "framer-motion";
function Footer() {
    return (
        <>
            <div className="Footer" style={{ marginBottom: "50px" }}>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-4">
                            <Typography
                                sx={{
                                    color: "#fff",
                                    fontFamily: "gameplay",
                                    fontSize: "20px",
                                    textAlign: "center",
                                }}
                            >
                                Acompanhe 0 outlive pelas redes sociais
                            </Typography>{" "}
                            <div className="social">
                                <Stack
                                    spacing={2}
                                    direction="row"
                                    sx={{
                                        marginTop: "40px",
                                        justifyContent: "center",
                                        "& > :not(style)": {
                                            background:
                                                "  rgba(255, 255, 255, 0.15)",
                                            color: "#fff",
                                            transition: "0.3s",
                                            "&:hover": {
                                                scale: "1.2",
                                                background:
                                                    "linear-gradient(94.12deg, #FB3602 11.99%, #FF987C 98.61%)",
                                            },
                                        },
                                    }}
                                >
                                    <IconButton>
                                        <TwitterIcon />{" "}
                                    </IconButton>

                                    <IconButton>
                                        <FacebookRoundedIcon />{" "}
                                    </IconButton>
                                    <IconButton>
                                        <YouTubeIcon />{" "}
                                    </IconButton>
                                    <IconButton>
                                        <InstagramIcon />{" "}
                                    </IconButton>
                                </Stack>
                            </div>
                        </div>
                        <div className="col-lg-4 mb-4 mb-lg-0"></div>
                        <div className="col-lg-4 align-self-center">
                            <div className="email">
                                <Box
                                    className="link_box"
                                    sx={{
                                        display: "flex",
                                        justifyContent: "space-evenly",
                                        "@media(max-width:991px)": {
                                            margin: "10px auto",
                                            justifyContent: "center",
                                            alignItems: "center",
                                            flexDirection: "column",
                                        },
                                    }}
                                >
                                    <a href="#">
                                        <Typography
                                            sx={{
                                                color: "#FFF",
                                                textDecoration: "none",
                                                fontSize: "20px",
                                                transition: ".2s",
                                                fontFamily: "neulis",
                                                "&::hover": {
                                                    textShadow:
                                                        "0 0px 3px #feee3c, 0 0px 30px #feee3c, 0 0px 50px #feee3c,  0 0px 100px #feee3c",
                                                },
                                                "@media(max-width:1399px)": {
                                                    fontSize: "14px",
                                                },
                                                "@media(max-width:991px)": {
                                                    fontSize: "12px",
                                                },
                                            }}
                                        >
                                            Política de Privacidade
                                        </Typography>
                                    </a>
                                    <a href="#">
                                        <Typography
                                            sx={{
                                                color: "#FFF",
                                                textDecoration: "none",
                                                fontFamily: "neulis",
                                                fontSize: "20px",
                                                transition: ".2s",
                                                "&::hover": {
                                                    textShadow:
                                                        "0 0px 3px #feee3c, 0 0px 30px #feee3c, 0 0px 50px #feee3c,  0 0px 100px #feee3c",
                                                },
                                                "@media(max-width:1399px)": {
                                                    fontSize: "14px",
                                                },
                                                "@media(max-width:991px)": {
                                                    fontSize: "12px",
                                                },
                                            }}
                                        >
                                            Termos de uso{" "}
                                        </Typography>
                                    </a>
                                </Box>
                                <Typography
                                    sx={{
                                        color: "#fff",
                                        fontSize: "20px",
                                        fontFamily: "neulis",
                                        textAlign: "center",
                                        "@media(max-width:1399px)": {
                                            fontSize: "14px",
                                        },
                                        "@media(max-width:991px)": {
                                            fontSize: "12px",
                                        },
                                    }}
                                >
                                    © 2022 Continuum Entertaunment. All rights
                                    reserved.
                                </Typography>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Footer;
