import React from "react";

import Display from "./Display";
import Editor from "./Editor";

export default function Basics({
  editMode,
  setEditMode,
  roadmap,
  data = initData,
}) {
  return editMode ? (
    <Editor setEditMode={setEditMode} {...data} />
  ) : (
    <Display setEditMode={setEditMode} roadmap={roadmap} {...data} />
  );
}

const initData = {
  userId: "ID",
  profileImage: "",
  email: "travisname@gmail.com",
  password: "",
  username: "TravisName",
  gender: "male",
  firstname: "Travis",
  lastname: "Name",
  aboutMe: "",
  phoneNumber: "123-456-7890",
  location: { country: "Canada", city: "Vancouver" },
  birthDate: "1997-05-17",
  socialProfile: ["website url", "LinkedIn url"],
  preferredLanguage: "English",
  mentors: [
    { profileImage: "", username: "Josh" },
    { profileImage: "", username: "Adam" },
    { profileImage: "", username: "Carl" },
  ],
  roadmaps: [
    {
      name: "Roadmap Name 1",
      status: "completed",
    },
    {
      name: "Roadmap Name 2",
      status: "ongoing",
    },
  ],
};
