import React from "react";

import Button from "../../../components/DefaultButton";

export default function Display({ setEditMode, ...data }) {
  const { skills, schools } = data;

  return (
    <div className="position-relative">
      <div className="my-4">
        <div>
          <p className="text--display1 font-weight-bold">Skills</p>

          <div className="flex flex-wrap">
            {skills.length > 0 ? (
              skills.map((skill, i) => (
                <span
                  className="profile__skill m-2 p-2 text-white"
                  key={`skill-${i}`}
                >
                  {skill}
                </span>
              ))
            ) : (
              <p>You haven't add your skills yet.</p>
            )}
          </div>
        </div>

        <div>
          <p className="text--display1 mt-5 font-weight-bold">Schools</p>

          {schools.length > 0 ? (
            schools.map(({ name, level, completed, field }, i) => (
              <div className="pb-4" key={`school-${i}`}>
                <p className="font-weight-bold text-capitalize">{name}</p>
                <p>
                  {level} in {field}
                </p>
                <p>Graduated in {completed}</p>
              </div>
            ))
          ) : (
            <p>No school has been added.</p>
          )}
        </div>
      </div>

      <Button
        small
        onClick={() => setEditMode(true)}
        className="profile__edit-btn"
      >
        Edit Profile
      </Button>
    </div>
  );
}
