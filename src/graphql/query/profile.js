import { gql } from "@apollo/client";

export const GET_PROFILE = gql`
  query getUserProfile($userId: ID, $profileId: ID) {
    userById(userId: $userId) {
      profileImage
      email
      password
      username
    }
    profileById(profileId: $profileId) {
      firstname
      lastname
      aboutMe
      gender
      phoneNumber
      birthDate
      location
      socialProfile
      preferredLanguage
    }
  }
`;
