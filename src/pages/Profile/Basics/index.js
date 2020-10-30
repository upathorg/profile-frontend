import { useQuery } from "@apollo/client";
import React from "react";
// import { useSelector } from "react-redux";

import { GET_PROFILE } from "../../../graphql/query/profile";
import Display from "./Display";
import Editor from "./Editor";

export default function Basics({ editMode, setEditMode, roadmap }) {
  // TODO: get ids from redux and replace temporary ids
  // const {userId, profileId} = useSelector((state) => state.auth?.user);
  const userId = "1"; // temporary id
  const profileId = "3"; // temporary id

  const { loading, error, data } = useQuery(GET_PROFILE, {
    variables: { userId, profileId },
  });

  if (loading || !data) {
    return <p>loading...</p>;
  }

  if (error) {
    console.error(error);
    return null;
  }

  const profile = { ...data.userById, ...data.profileById };

  return editMode ? (
    <Editor setEditMode={setEditMode} {...profile} />
  ) : (
    <Display setEditMode={setEditMode} roadmap={roadmap} {...profile} />
  );
}
