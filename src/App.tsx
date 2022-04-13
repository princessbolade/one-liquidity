import React from 'react';
import './App.css';
import {Box, Text } from '@chakra-ui/react';
import Nav from './components/nav-bar';
import Hero from './components/hero';
import GetStarted from './components/get-started';
import AboutUs from './components/about-us';

function App() {
  return (
   <Box>
     <Nav/>
     <Hero/>
     <GetStarted/>
     <AboutUs/>
   </Box>
  );
}

export default App;
