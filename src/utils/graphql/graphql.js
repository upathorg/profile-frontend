import gql from "graphql-tag";

//Queries
export const COURSE_DETAILS = gql`
  query roadmapById($roadmapId: ID!) {
    roadmapById(roadmapId: $roadmapId) {
      roadmapId
      name
      description
      roadmapId
      imageUrl
      createdBy
    }
  }
`;

export const GET_COURSE = gql`
  query roadmaps {
    roadmaps {
      name
      description
      roadmapId
      imageUrl
    }
  }
`;

//Mutations
