import { gql } from "@apollo/client";

export const GET_IDS = gql`
  query getUserById($email: String!) {
    userById(email: $email) {
      userId
      profileId
      educationID
    }
  }
`;
