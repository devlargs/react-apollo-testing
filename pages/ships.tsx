import { useQuery } from "@apollo/client";
import {
  Grid,
  Spinner,
  Flex,
  Alert,
  AlertIcon,
  AlertDescription,
  AlertTitle,
  CloseButton,
} from "@chakra-ui/react";
import { GET_SHIPS } from "@graphql/getShips";
import Card from "@components/Card";
import { Ship } from "types/graphqlTypes";

const templateColumns = {
  base: "repeat(1, 1fr)",
  md: "repeat(2, 1fr)",
  lg: "repeat(3, 1fr)",
};

const Ships = () => {
  const { data, loading, error } = useQuery<{
    ships: Ship[];
  }>(GET_SHIPS);

  if (error) {
    return (
      <Alert status="error" mt={8}>
        <AlertIcon />
        <AlertDescription>Error upon requesting ships.</AlertDescription>
        <CloseButton position="absolute" right="8px" top="8px" />
      </Alert>
    );
  }

  return (
    <>
      {loading ? (
        <Flex justifyContent="center" mt="16">
          <Spinner />
        </Flex>
      ) : (
        <>
          {data?.ships.length ? (
            <div data-testid="ships-container">
              <Grid templateColumns={templateColumns} gap={6} p="4" w="100%">
                {data.ships.map((q: Ship, i: number) => (
                  <Card key={i} data={q} />
                ))}
              </Grid>
            </div>
          ) : (
            <Alert status="error" mt={8}>
              <AlertIcon />
              <AlertDescription>There are no ships.</AlertDescription>
              <CloseButton position="absolute" right="8px" top="8px" />
            </Alert>
          )}
        </>
      )}
    </>
  );
};

export default Ships;
