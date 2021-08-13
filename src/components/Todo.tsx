import { Flex, Button, Text, Tag } from "@chakra-ui/react";

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
      w="100%"
      p={4}
      color="black"
      mt={4}
      borderRadius={10}
      align="center"
      justify="space-between"
      boxShadow={"sm"}
      cursor="pointer"
      onClick={() => handleTodoUpdate(todo.id)}
      bg={todo.isDone ? "gray.50" : "gray.200"}
    >
      <Tag
        borderRadius={"50%"}
        w={"40px"}
        h={"40px"}
        display="grid"
        placeItems="center"
        colorScheme={todo.isDone ? "green" : "gray"}
        minWidth={"40px"}
      >
        {todo.isDone && "✓"}
      </Tag>
      <Text
        decoration={todo.isDone ? "line-through" : "inherit"}
        fontSize="md"
        color={todo.isDone ? "gray.500" : "black"}
        isTruncated
        mx={4}
      >
        {todo.label}
      </Text>
      <Button
        colorScheme="red"
        onClick={(e) => {
          e.stopPropagation();
          handleDelete(todo.id);
        }}
      >
        X
      </Button>
    </Flex>
  );
};

export default Todo;
