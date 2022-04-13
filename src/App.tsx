import React from "react";
import "./App.css";
import Nav from "./components/nav-bar";
import Hero from "./components/hero";
import GetStarted from "./components/get-started";
import AboutUs from "./components/about-us";
import Developers from "./components/developers";
import ReadyToStart from "./components/ready-to-start";
import Footer from "./components/footer";

function App() {
  return (
    <>
      <Nav />
      <Hero />
      <GetStarted />
      <AboutUs />
      <Developers />
      <ReadyToStart />
      <Footer />
    </>
  );
}

export default App;
