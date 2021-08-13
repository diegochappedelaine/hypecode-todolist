import { ChakraProvider, Container } from "@chakra-ui/react";

import TodoPage from "page/TodoPage";

function App() {
  return (
    <ChakraProvider>
      <Container p="10" maxW="container.sm">
        <TodoPage />
      </Container>
    </ChakraProvider>
  );
}

export default App;
