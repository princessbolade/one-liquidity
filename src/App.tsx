import React from "react";
import "./App.css";
import Nav from "./components/nav-bar";
import Hero from "./components/hero";
import GetStarted from "./components/get-started";
import AboutUs from "./components/about-us";
import Developers from "./components/developers";
import ReadyToStart from "./components/ready-to-start";
import Footer from "./components/footer";
import { motion } from "framer-motion";

function App() {
  return (
    <>
      <motion.div
        initial={{ x: "100%" }}
        animate={{
          x: 0,
          backgroundColor: "white",
        }}
        transition={{
          default: { duration: 0.9 },
          delay: 0.1,
        }}
      >
        <Nav />
        <Hero />
        <GetStarted />
        <AboutUs />
        <Developers />
        <ReadyToStart />
        <Footer />
      </motion.div>
    </>
  );
}

export default App;
