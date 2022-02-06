import { Box } from "@chakra-ui/react";
import { FC } from "react";
import Navbar from "./Navbar";

const Layout: FC = ({ children }) => {
  return (
    <Box>
      <Navbar />
      <Box bg="#F7FAFC" borderTop="1px" borderColor="gray.300">
        <Box
          m="auto"
          maxW="90rem"
          w="full"
          minH="100vh"
          px={{ base: "2rem", sm: "5rem", lg: "6.25rem" }}
        >
          {children}
        </Box>
      </Box>
    </Box>
  );
};

export default Layout;
