import { Button, Typography } from "@mui/material";
import React from "react";
import { IconButton, Stack } from "@mui/material";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
function Footer() {
    return (
        <>
            <div className="Footer" style={{ marginBottom: "50px" }}>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="email">
                                <Typography
                                    sx={{
                                        fontFamily: "neulis",
                                        fontWeight: "400",
                                        color: "#fff",
                                        fontSize: "22px",
                                        margin: "20px auto",
                                    }}
                                >
                                    Cadastre seu e-mail e receba a nossa
                                    newsletter
                                </Typography>
                                <div className="email_box">
                                    <input
                                        type="text"
                                        placeholder="Campo para o e-mail"
                                    />
                                    <Button
                                        sx={{
                                            fontSize: "14px",
                                            fontWeight: "400",
                                            backgroundColor:
                                                "rgba(255, 255, 255, 0.15)",
                                            fontFamily: "neulis",
                                            color: "#fff",
                                            borderRadius: "25px",
                                            width: "110px",
                                            height: "50px",
                                            margin: "auto 10px ",
                                            backdropFilter: "blur(50px)",
                                            transition: ".2s",
                                            "&:hover": {
                                                background:
                                                    "linear-gradient(94.12deg, #FB3602 11.99%, #FF987C 98.61%)",
                                            },
                                        }}
                                    >
                                        Cadastrar
                                    </Button>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
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
                                            transition: "0.2s",
                                            "&:hover": {
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
                        <div className="col-md-4 align-self-center">
                            <div className="email">
                                <div className="link_box">
                                    <a href="#">Política de Privacidade</a>
                                    <a href="#">Termos de uso</a>
                                </div>
                                <Typography
                                    sx={{
                                        color: "#fff",
                                        fontSize: "20px",
                                        fontFamily: "neulis",
                                        textAlign: "center",
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
