import React, { useState } from "react";
import { Container, VStack, Textarea, Button, Text, useToast } from "@chakra-ui/react";

const Index = () => {
  const [text, setText] = useState("");
  const [summary, setSummary] = useState("");
  const toast = useToast();

  const handleSummarize = () => {
    if (!text) {
      toast({
        title: "Error",
        description: "Please enter some text to summarize.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      return;
    }

    // Simulate a summary generation
    const simulatedSummary = text.split(" ").slice(0, 10).join(" ") + "...";
    setSummary(simulatedSummary);
  };

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4} width="100%">
        <Text fontSize="2xl">Text Summarizer</Text>
        <Textarea placeholder="Enter your text here..." value={text} onChange={(e) => setText(e.target.value)} size="lg" height="200px" />
        <Button colorScheme="blue" onClick={handleSummarize}>
          Summarize
        </Button>
        <Textarea placeholder="Summary will appear here..." value={summary} size="lg" height="200px" isReadOnly />
      </VStack>
    </Container>
  );
};

export default Index;
