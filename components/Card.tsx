import { Box, Text, Stack, useColorModeValue, Image } from "@chakra-ui/react";

const Card = ({ data: q }: any) => (
  <Box
    _hover={{
      boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
      cursor: "pointer",
    }}
    transition="0.5s ease-in"
    w={"full"}
    bg={useColorModeValue("white", "gray.900")}
    boxShadow={"2xl"}
    rounded={"md"}
    p={6}
    overflow={"hidden"}
    className="ships-card"
  >
    <Box bg={"gray.100"} mt={-6} mx={-6} mb={6} pos={"relative"}>
      <Image
        alt={q?.image}
        src={q.image ? q?.image : "image/default.jpg"}
        w="100%"
        h="300px"
        objectPosition="center center"
        objectFit="cover"
        layout={"fill"}
      />
    </Box>
    <Stack>
      <Text
        color={"gray.700"}
        textTransform={"uppercase"}
        fontWeight={800}
        fontSize={"sm"}
        letterSpacing={1.1}
      >
        {q.name}
      </Text>
    </Stack>
  </Box>
);

export default Card;
