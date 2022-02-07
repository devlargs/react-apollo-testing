import { Box, Button, Text } from "@chakra-ui/react";
import useCounter from "@store/counter";
import { FC } from "react";

const ZustandCounter: FC = () => {
  const { counter, setCounter } = useCounter((state) => ({
    counter: state.counter,
    setCounter: state.setCounter,
  }));

  return (
    <Box mt={8}>
      <Text>
        Counter: <span data-testid="counter">{counter}</span>
      </Text>
      <Button colorScheme="teal" onClick={setCounter}>
        Add Counter
      </Button>
    </Box>
  );
};

export default ZustandCounter;
