import { gql } from "@apollo/client";

export const GET_ROCKET = gql`
  query {
    rockets {
      name
      active
      wikipedia
    }
  }
`;
