import React from 'react';
import './App.css';
import {Box, Text } from '@chakra-ui/react';
import Nav from './components/nav-bar';
import Hero from './components/hero';
import GetStarted from './components/get-started';

function App() {
  return (
   <Box>
     <Nav/>
     <Hero/>
     <GetStarted/>
   </Box>
  );
}

export default App;
