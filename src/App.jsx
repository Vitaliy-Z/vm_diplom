import { Container, CssBaseline } from "@mui/material";
import React from "react";
import NavBar from "./components/NavBar";
import SeachField from "./components/SeachField";
import MainPage from "./pages/MainPage";

function App() {
  return (
    <>
      <CssBaseline />
      <NavBar />
      <Container maxWidth="lg">
        {/* <Typography
          variant="h2"
          align="center"
          color="textPrimary"
          gutterBottom
        >
          BEST OF BEST
        </Typography> */}

        <SeachField />
        <MainPage />
      </Container>
    </>
  );
}

export default App;
