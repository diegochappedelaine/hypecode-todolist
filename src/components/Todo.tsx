import { Flex, Button, Text } from "@chakra-ui/react";

import { ITodo } from "global";

interface TodoProps {
  handleTodoUpdate: (id: string) => void;
  handleDelete: (id: string) => void;
  todo: ITodo;
}

const Todo: React.FC<TodoProps> = ({
  todo,
  handleDelete,
  handleTodoUpdate,
}) => {
  return (
    <Flex
      as="li"
      bg={todo.isDone ? "gray.50" : "gray.200"}
      w="100%"
      p={4}
      color="black"
      mt={4}
      borderRadius={10}
      align="center"
      justify="space-between"
      boxShadow={"sm"}
    >
      <Button
        colorScheme={todo.isDone ? "green" : "gray"}
        borderRadius={"50%"}
        w={"40px"}
        onClick={() => handleTodoUpdate(todo.id)}
      >
        {todo.isDone && "✓"}
      </Button>
      <Text
        decoration={todo.isDone ? "line-through" : "inherit"}
        fontSize="md"
        color={todo.isDone ? "gray.500" : "black"}
      >
        {todo.label}
      </Text>
      <Button
        colorScheme="red"
        onClick={() => {
          handleDelete(todo.id);
        }}
      >
        X
      </Button>
    </Flex>
  );
};

export default Todo;
