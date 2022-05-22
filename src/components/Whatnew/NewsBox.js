import { Typography } from "@mui/material";
import React from "react";
import "./Whatnew.css";
function NewsBox({ news_header, news_tittle, news_date, news_img }) {
    return (
        <>
            <div className="NewsBox">
                <div className="news_header">
                    <span>{news_header}</span>
                </div>
                <div className="news_photo">
                    <img src={news_img} alt="" width={"100%"} />
                </div>
                <div className="news_details">
                    <Typography
                        sx={{
                            fontSize: "26px",
                            fontFamily: "neulis",
                            fontWeight: "500",
                            color: "#fff",
                            textAlign: "center",
                            padding: "22px",
                            "@media(max-width:1399px)": {
                                fontSize: "18px",
                            },
                            "@media(max-width:991px)": {
                                fontSize: "14px",
                                padding: "10px",
                            },
                        }}
                    >
                        {news_tittle}
                    </Typography>
                </div>
                <Typography
                    sx={{
                        fontSize: "14px",
                        fontFamily: "gameplay",
                        textAlign: "center",
                        color: "#fff",
                        "@media(max-width:1399px)": {
                            fontSize: "12px",
                        },
                        "@media(max-width:991px)": {
                            fontSize: "10px",
                        },
                    }}
                >
                    {news_date}
                </Typography>
            </div>
        </>
    );
}

export default NewsBox;
