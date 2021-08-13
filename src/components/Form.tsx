import { Input, Flex, Button } from "@chakra-ui/react";

interface FormProps {
  handleSubmit: (e: React.FormEvent) => void;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  inputValue: string;
}

const Form: React.FC<FormProps> = ({
  handleSubmit,
  handleChange,
  inputValue,
}) => {
  return (
    <Flex
      as="form"
      onSubmit={handleSubmit}
      p={10}
      bg={"gray.100"}
      boxShadow={"md"}
    >
      <Input
        mr={4}
        type="text"
        bg={"white.100"}
        value={inputValue}
        onChange={handleChange}
        placeholder="Todo ..."
      />
      <Button colorScheme="teal" type="submit">
        +
      </Button>
    </Flex>
  );
};

export default Form;
