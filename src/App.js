import React from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
} from '@chakra-ui/react';

import Navbar from "./components/Navbar"

import Status from "./components/Status"

function App() {
  return (
    <ChakraProvider>
      <div className="App">
        <Navbar />
        <Status/>
      </div>
    </ChakraProvider>
  );
}

export default App;
