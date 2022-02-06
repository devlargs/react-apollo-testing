import { useQuery } from "@apollo/client";
import { Stack, Grid, Skeleton } from "@chakra-ui/react";
import { GET_SHIPS } from "../graphql/getShips";
import Card from "../components/Card";

const templateColumns = {
  base: "repeat(1, 1fr)",
  md: "repeat(2, 1fr)",
  lg: "repeat(3, 1fr)",
};

const Ships = () => {
  const { data, loading } = useQuery(GET_SHIPS);

  return (
    <>
      {loading ? (
        <Grid templateColumns={templateColumns} gap={6} p="4" w="100%">
          {Array.from({ length: 20 }).map((_, i) => (
            <Stack key={i}>
              <Skeleton height={522} pb="1" />
            </Stack>
          ))}
        </Grid>
      ) : (
        <Grid templateColumns={templateColumns} gap={6} p="4" w="100%">
          {data?.ships?.map((q: any, i: number) => (
            <Card key={i} data={q} />
          ))}
        </Grid>
      )}
    </>
  );
};

export default Ships;
