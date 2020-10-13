import React from "react";

import Display from "./Display";
import Editor from "./Editor";

export default function Educations({ editMode, setEditMode, data = initData }) {
  return editMode ? (
    <Editor setEditMode={setEditMode} {...data} />
  ) : (
    <Display setEditMode={setEditMode} {...data} />
  );
}

const initData = {
  userId: "ID",
  skills: ["UX design", "Programing"],
  schools: [
    {
      name: "University of British Colombia",
      level: "Bachelor's degree",
      completed: "2014-05",
      field: "General Science",
    },
  ],
};
