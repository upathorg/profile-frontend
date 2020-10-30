import React from "react";

import Button from "../../../components/DefaultButton";
import AccountIcon from "../../../svg/AccountCircle";
import AddSocialProfile from "./AddSocialProfile";

export default function Editor({ setEditMode, ...data }) {
  const [profile, setProfile] = React.useState({ ...data });
  const [showAddSocialProfile, setShowAddSocialProfile] = React.useState(false);

  const [socialProfile, setSocialProfile] = React.useState([]);

  if (data.socialProfile) {
    setSocialProfile(data.socialProfile.split(","));
  }

  const [location, setLocation] = React.useState({
    country: "",
    city: "",
  });

  if (data.location) {
    const [country, ...rest] = location.split(",");
    const city = rest.join(" ");
    setLocation({ country, city });
  }

  const inputList = [
    {
      label: "First Name",
      type: "text",
      name: "firstname",
      defaultValue: profile.firstname,
    },
    {
      label: "Last Name",
      type: "text",
      name: "lastname",
      defaultValue: profile.lastname,
    },
    {
      label: "Username",
      type: "text",
      name: "username",
      defaultValue: profile.username,
    },
    {
      label: "Email Address",
      type: "email",
      name: "email",
      defaultValue: profile.email,
    },
    {
      label: "Phone number",
      type: "tel",
      name: "phoneNumber",
      defaultValue: profile.phoneNumber,
    },
    {
      label: "Date of Birth",
      type: "date",
      name: "birthDate",
      defaultValue: profile.birthDate,
    },
    {
      label: "Language",
      type: "text",
      name: "preferredLanguage",
      defaultValue: profile.preferredLanguage,
    },
  ];

  const handleChange = (e) => {
    setProfile({
      ...profile,
      [e.target.name]: e.target.value,
    });
  };

  const handleEditLocation = async (e) => {
    setLocation({
      ...location,
      [e.target.name]: e.target.value,
    });
  };

  const handleFileUpload = (e) => {
    console.log(e.target.files[0]);
    // TODO: upload image and save
  };

  const handleSave = (e) => {
    e.preventDefault();

    let newLocation = "";
    if (location.country === "") {
      newLocation = location.city;
    } else {
      newLocation = `${location.country}, ${location.city}`;
    }

    setProfile({
      ...profile,
      location: newLocation,
      socialProfile: socialProfile.length > 0 ? socialProfile.join(",") : "",
    });

    // TODO: graphQL mutation

    setEditMode(false);
  };

  return (
    <>
      <div className="my-4">
        <div className="profile__image__wrapper">
          {profile.profileImage ? (
            <img
              src={profile.profileImage}
              alt="profile"
              className="profile__image"
            />
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
                  checked={profile.gender === val}
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
                name="country"
                defaultValue={location.country}
                onChange={handleEditLocation}
                className="profile__input"
              />
            </div>

            <div className="col-12 col-md-6 pr-0">
              <label className="profile__label">City</label>
              <br />

              <input
                type="text"
                name="city"
                defaultValue={location.city}
                onChange={handleEditLocation}
                className="profile__input"
              />
            </div>
          </div>

          <div className="mb-5 col-12">
            <label className="profile__label">About Me</label>
            <br />

            <textarea
              name="aboutMe"
              defaultValue={profile.aboutMe}
              onChange={handleChange}
              className="profile__input"
            />
          </div>

          <div className="mb-5 col-12 col-md-6">
            <label className="profile__label">Social Profile</label>

            {socialProfile?.length > 0 &&
              socialProfile.map((url, i) => (
                <div className="d-flex my-3" key={`social-link-${i}`}>
                  <u>{url}</u>
                  <i
                    className="material-icons profile__circle-clear ml-3"
                    onClick={(i) =>
                      setSocialProfile(socialProfile.splice(i, 1))
                    }
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
        add={(url) => setSocialProfile([...socialProfile, url])}
      />
    </>
  );
}
