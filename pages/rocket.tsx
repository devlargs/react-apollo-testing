import { useQuery } from "@apollo/client";
import { Stack, Grid, Skeleton, Spinner, Box, Flex } from "@chakra-ui/react";
import Card from "../components/Card";
import { GET_ROCKET } from "../graphql/getRocket";

const templateColumns = {
  base: "repeat(1, 1fr)",
  md: "repeat(2, 1fr)",
  lg: "repeat(3, 1fr)",
};

const Rocket = () => {
  const { data, loading } = useQuery(GET_ROCKET);

  return (
    <>
      {loading ? (
        <Flex justifyContent="center" mt="16">
          <Spinner />
        </Flex>
      ) : (
        <Grid templateColumns={templateColumns} gap={6} p="4" w="100%">
          {data?.rockets?.map((q: any, i: number) => (
            <Card key={i} data={q} />
          ))}
        </Grid>
      )}
    </>
  );
};

export default Rocket;
