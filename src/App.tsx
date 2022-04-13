import React from "react";
import "./App.css";
import { Box } from "@chakra-ui/react";
import Nav from "./components/nav-bar";
import Hero from "./components/hero";
import GetStarted from "./components/get-started";
import AboutUs from "./components/about-us";
import Developers from "./components/developers";

function App() {
  return (
    <Box>
      <Nav />
      <Hero />
      <GetStarted />
      <AboutUs />
      <Developers />
    </Box>
  );
}

export default App;
