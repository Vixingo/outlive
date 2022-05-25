import React from "react";
import { IconButton, Stack } from "@mui/material";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
function Navbar() {
    return (
        <>
            <div className="Navbar ">
                <nav className="navbar navbar-expand-lg navbar-light  ">
                    <div className="container-fluid">
                        {/* <a className="navbar-brand" href="#">
                            Navbar
                        </a> */}
                        <button
                            className="navbar-toggler"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div
                            className="collapse navbar-collapse"
                            id="navbarSupportedContent"
                        >
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <a
                                        className="nav-link "
                                        aria-current="page"
                                        href="#Whatnew"
                                    >
                                        NOVIDADES
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#Project">
                                        PROJETO
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#Highlight">
                                        DESTAQUES
                                    </a>
                                </li>
                            </ul>
                            <div className="social">
                                <Stack
                                    spacing={2}
                                    direction="row"
                                    sx={{
                                        "& > :not(style)": {
                                            background:
                                                "  rgba(255, 255, 255, 0.15)",
                                            color: "#fff",
                                            transition: "0.3s",
                                            "&:hover": {
                                                scale: "1.1",
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
                    </div>
                </nav>
            </div>
        </>
    );
}

export default Navbar;
