import { Box } from "@mui/material";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Highlight from "./components/Highlight/Highlight";
import Main from "./components/Main/Main";
import Navbar from "./components/Navbar/Navbar";
import Project from "./components/Project/Project";
import Whatnew from "./components/Whatnew/Whatnew";

function App() {
    return (
        <>
            <Box
                sx={{
                    backgroundImage: "url(img/mainbg.png)",
                    backgroundSize: "100% 100%",
                }}
            >
                <Navbar />
                <Main />
            </Box>
            <Whatnew />
            <Project />
            <Highlight />
            <Footer />
        </>
    );
}

export default App;
