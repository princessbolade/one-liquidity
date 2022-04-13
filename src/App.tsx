import React from "react";
import "./App.css";
import { Box } from "@chakra-ui/react";
import Nav from "./components/nav-bar";
import Hero from "./components/hero";
import GetStarted from "./components/get-started";
import AboutUs from "./components/about-us";
import Developers from "./components/developers";
import ReadyToStart from "./components/ready-to-start";
import Footer from "./components/footer";

function App() {
  return (
    <Box>
      <Nav />
      <Hero />
      <GetStarted />
      <AboutUs />
      <Developers />
      <ReadyToStart />
      <Footer />
    </Box>
  );
}

export default App;
