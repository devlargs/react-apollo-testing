import { Box, Flex } from "@chakra-ui/react";
import Link from "next/link";

const Navbar = () => (
  <Box px="12" py="4">
    <Flex
      justifyContent="space-around"
      color={"gray.400"}
      textTransform={"uppercase"}
      fontWeight={800}
      fontSize={"sm"}
      letterSpacing={1.1}
    >
      <Link href="/ships">Ships</Link>
      <Link href="/rocket">Rocket</Link>
    </Flex>
  </Box>
);

export default Navbar;
