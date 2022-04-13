import React from 'react';
import './App.css';
import {Box, Text } from '@chakra-ui/react';
import Nav from './components/nav-bar';
import Hero from './components/hero';

function App() {
  return (
   <Box>
     <Nav/>
     <Hero/>
   </Box>
  );
}

export default App;
