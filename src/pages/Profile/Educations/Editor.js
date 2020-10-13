import React from "react";

import Button from "../../../components/DefaultButton";
import AddSchool from "./AddSchool";

export default function Editor({ setEditMode, ...data }) {
  const [profile, setProfile] = React.useState({ ...data });
  const [skill, setSkill] = React.useState("");
  const [showAddSchool, setShowAddSchool] = React.useState(false);
  const { skills, schools } = profile;

  const handleDelete = (name, index) => {
    const newProfile = [...profile[name]];
    newProfile.splice(index, 1);

    setProfile({
      ...profile,
      [name]: newProfile,
    });
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      let newSkills = [...skills];

      if (!newSkills.includes(skill)) {
        newSkills.push(skill);

        setProfile({
          ...profile,
          skills: newSkills,
        });

        setSkill("");
      } else {
        // error: skill already added
      }
    }
  };

  const handleAddSchool = (school) => {
    let newSchools = [...schools];
    newSchools.push(school);

    setProfile({
      ...profile,
      schools: newSchools,
    });
  };

  const handleSave = (e) => {
    e.preventDefault();

    // graphQL send new profile
    // refetch profile

    setEditMode(false);
  };

  return (
    <>
      <div className="my-4">
        <p className="text--display1 font-weight-bold">Skills</p>

        <div className="d-flex flex-wrap">
          {skills.length > 0 &&
            skills.map((skill, i) => (
              <div
                className="profile__skill m-2 p-2 text-white"
                key={`skill-${i}`}
              >
                {skill}
                <i
                  className="material-icons profile__skill-clear ml-2"
                  onClick={() => handleDelete("skills", i)}
                >
                  clear
                </i>
              </div>
            ))}
        </div>

        <p className="mt-4 mb-0 font-weight-light">
          Enter your skill and press enter to add a skill.
        </p>
        <input
          type="text"
          value={skill}
          className="profile__input profile__add-skills"
          onChange={(e) => setSkill(e.target.value)}
          onKeyPress={handleKeyPress}
        />

        <p className="text--display1 mt-5 font-weight-bold">Schools</p>

        <div>
          {schools.length > 0 &&
            schools.map(({ name, level, field, completed }, i) => (
              <div className="pb-4" key={`school-${i}`}>
                <div className="d-flex">
                  <p className="font-weight-bold text-capitalize">{name}</p>
                  <i
                    className="material-icons profile__circle-clear ml-5"
                    onClick={() => handleDelete("schools", i)}
                  >
                    highlight_off
                  </i>
                </div>
                <p>
                  {level} in {field}
                </p>
                <p>Graduated in {completed}</p>
              </div>
            ))}
        </div>

        <p
          className="mb-5 cursor--pointer"
          onClick={() => setShowAddSchool(true)}
        >
          <u>+ Add Schools</u>
        </p>

        <div>
          <Button small onClick={handleSave} className="d-inline-block">
            Save Changes
          </Button>
          <span
            className="ml-4 cursor--pointer"
            onClick={() => setEditMode(false)}
          >
            Cancel
          </span>
        </div>
      </div>

      <AddSchool
        open={showAddSchool}
        setOpen={setShowAddSchool}
        add={handleAddSchool}
      />
    </>
  );
}
