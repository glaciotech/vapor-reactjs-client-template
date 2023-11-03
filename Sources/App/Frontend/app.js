import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import { Box, VStack, Input, Button, Text, Textarea, Container, Heading, UnorderedList, ListItem, List, Link, extendTheme } from "@chakra-ui/react";
import { ChakraProvider } from "@chakra-ui/react";
import TextareaAutosize from 'react-textarea-autosize'

function App() {
    const [name, setName] = useState("");
    const [greeting, setGreeting] = useState("");

    const handleButtonClick = () => {
      setGreeting(`Hello ${name}!!!`);
    };

    return (
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          height="100vh"
          padding="4"
        >
          <Heading mb="4">Vapor ReactJS Client Template</Heading>
            <Heading mb="7">Random Heading for Test</Heading>
          <Input
            mb="4"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Button colorScheme="blue" onClick={handleButtonClick}>
            Say Hello
          </Button>
          {greeting && (
            <Text mt="4" fontSize="xl">
              {greeting}
            </Text>
          )}
        </Box>
    );
}

const rootElement = document.getElementById("app");
const root = ReactDOM.createRoot(rootElement);
root.render(
    <ChakraProvider theme={extendTheme()}>
      <App />
    </ChakraProvider>
);
