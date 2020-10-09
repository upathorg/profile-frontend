import React from "react";

import Button from "../../../components/DefaultButton";
import AccountIcon from "../../../svg/AccountCircle";
import AddSocialProfile from "./AddSocialProfile";

export default function Editor({ setEditMode, ...data }) {
  const [profile, setProfile] = React.useState({ ...data });
  const [showAddSocialProfile, setShowAddSocialProfile] = React.useState(false);
  const {
    profileImage,
    firstname,
    lastname,
    username,
    email,
    birthDate,
    location: { country, city },
    preferredLanguage,
    gender,
    socialProfile,
  } = profile;

  const inputList = [
    {
      label: "First Name",
      type: "text",
      name: "firstname",
      defaultValue: firstname,
    },
    {
      label: "Last Name",
      type: "text",
      name: "lastname",
      defaultValue: lastname,
    },
    {
      label: "Username",
      type: "text",
      name: "username",
      defaultValue: username,
    },
    {
      label: "Email Address",
      type: "email",
      name: "email",
      defaultValue: email,
    },
    {
      label: "Date of Birth",
      type: "date",
      name: "birthDate",
      defaultValue: birthDate,
    },
    {
      label: "Language",
      type: "text",
      name: "preferredLanguage",
      defaultValue: preferredLanguage,
    },
  ];

  const handleChange = (e) => {
    setProfile({
      ...profile,
      [e.target.name]: e.target.value,
    });
  };

  const handleDelete = (index) => {
    let newSocialProfile = [...socialProfile];
    newSocialProfile.splice(index, 1);

    setProfile({
      ...profile,
      socialProfile: newSocialProfile,
    });
  };

  const handleAddSocialLink = (url) => {
    let newSocialProfile = [...socialProfile];
    newSocialProfile.push(url);

    setProfile({
      ...profile,
      socialProfile: newSocialProfile,
    });
  };

  const handleFileUpload = (e) => {
    console.log(e.target.files[0]);
    // upload image and save
  };

  const handleSave = (e) => {
    e.preventDefault();

    // graphQL mutation
    // refetch profile

    setEditMode(false);
  };

  return (
    <>
      <div className="my-4">
        <div className="profile__image__wrapper">
          {profileImage ? (
            <img src={profileImage} alt="profile" className="profile__image" />
          ) : (
            <AccountIcon className="profile__image" />
          )}

          <label className="profile__image__edit font-weight-bold mb-0 pt-2 text-center">
            Edit Image
            <input
              type="file"
              name="file"
              onChange={handleFileUpload}
              className="d-none"
            />
          </label>
        </div>

        <div className="row mt-4">
          {inputList.map((input, i) => (
            <div className="mb-5 col-12 col-md-6" key={`input-group-${i}`}>
              <label className="profile__label">{input.label}</label>
              <br />

              <input
                type={input.type}
                name={input.name}
                defaultValue={input.defaultValue}
                onChange={handleChange}
                className="profile__input"
              />
            </div>
          ))}

          <div className="mb-5 col-12 col-md-6">
            <label className="profile__label">Gender</label>
            <br />

            {["female", "male", "other"].map((val, i) => (
              <label className="mr-4" key={`gender-option-${i}`}>
                <input
                  type="radio"
                  name="gender"
                  value={val}
                  checked={gender === val}
                  className="mr-2 text-Capitalize"
                  onChange={handleChange}
                />
                {val}
              </label>
            ))}
          </div>

          <div className="mb-5 col-md-6 row pr-0">
            <div className="mb-3 col-12 col-md-6 pr-0">
              <label className="profile__label">Country</label>
              <br />

              <input
                type="text"
                defaultValue={country}
                onChange={handleChange}
                className="profile__input"
              />
            </div>

            <div className="col-12 col-md-6 pr-0">
              <label className="profile__label">City</label>
              <br />

              <input
                type="text"
                defaultValue={city}
                onChange={handleChange}
                className="profile__input"
              />
            </div>
          </div>

          <div className="mb-5 col-12 col-md-6">
            <label className="profile__label">Social Profile</label>

            {socialProfile.length > 0 &&
              socialProfile.map((url, i) => (
                <div className="d-flex my-3" key={`social-link-${i}`}>
                  <u>{url}</u>
                  <i
                    className="material-icons profile__circle-clear ml-3"
                    onClick={() => handleDelete(i)}
                  >
                    highlight_off
                  </i>
                </div>
              ))}

            <p
              className="cursor--pointer"
              onClick={() => setShowAddSocialProfile(true)}
            >
              <u>+ Add Social Profile URLs</u>
            </p>
          </div>

          <div className="mb-5 col-12 col-md-6 align-self-center">
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
      </div>

      <AddSocialProfile
        open={showAddSocialProfile}
        setOpen={setShowAddSocialProfile}
        add={handleAddSocialLink}
      />
    </>
  );
}
