import React from "react";

import Button from "../../../components/DefaultButton";
import ProgressBar from "../../../components/ProgressBar";
import AccountIcon from "../../../svg/AccountCircle";

export default function Display({ setEditMode, roadmap, mentors, ...data }) {
  const {
    profileImage,
    username,
    email,
    firstname,
    lastname,
    birthDate,
    location,
    preferredLanguage,
  } = data;

  const EMPTY_CONTENT = "You haven't added yet";

  const getLocation = () => {
    const [country, ...rest] = location.split(",");
    const city = rest.join(" ");

    return `${city}, ${country}`;
  };

  return (
    <>
      <div className="my-4">
        <div className="d-flex">
          <div className="profile__image__wrapper">
            {profileImage ? (
              <img
                src={profileImage}
                alt="profile"
                className="profile__image"
              />
            ) : (
              <AccountIcon className="profile__image" />
            )}
          </div>

          <div className="ml-3 align-self-center">
            <p className="profile__indexes mb-0 text-uppercase">
              {firstname} {lastname}
            </p>
            <p className="profile__text">
              Username:{" "}
              <span className="font-weight-light ml-1">{username}</span>
            </p>
          </div>
        </div>

        <p className="profile__text mt-3  mb-0">
          Email Address: <span className="font-weight-light ml-1">{email}</span>
        </p>

        <p className="profile__text mt-5 mb-0">
          Date of Birth:
          {birthDate ? (
            <span className="font-weight-light ml-1">birthDate</span>
          ) : (
            <span className="profile__text--small ml-2">{EMPTY_CONTENT}</span>
          )}
        </p>
        <p className="m-1">* only you can see</p>

        <p className="profile__text mt-5 mb-0">
          Location:
          {location ? (
            <span className="font-weight-light ml-1">{getLocation()}</span>
          ) : (
            <span className="profile__text--small ml-2">{EMPTY_CONTENT}</span>
          )}
        </p>

        <p className="profile__text mt-5 mb-0">
          Language:
          {preferredLanguage ? (
            <span className="font-weight-light ml-1">preferredLanguage</span>
          ) : (
            <span className="profile__text--small ml-2">{EMPTY_CONTENT}</span>
          )}
        </p>

        <p className="profile__text mt-5 mb-0">
          Roadmap Duration:
          <span className="font-weight-light ml-2">{roadmap.duration}</span>
        </p>
        <div className="mt-3">
          <ProgressBar progress={roadmap.progress} status={roadmap.status} />
        </div>

        <p className="profile__text mt-5 mb-0">Your Mentors</p>
        <div className="d-flex mt-2">
          {mentors?.length > 0 ? (
            mentors.map(({ profileImage, username }, i) => (
              <div
                key={`mentor-${i}`}
                className="px-3 cursor--pointer"
                onClick={() => console.log("Jump to mentor's profile")}
              >
                {profileImage ? (
                  <img
                    src={profileImage}
                    alt="profile"
                    className="profile__mentor-image mx-auto"
                  />
                ) : (
                  <AccountIcon className="profile__mentor-image mx-auto" />
                )}

                <p className="profile__mentor-name text-center text-uppercase">
                  {username}
                </p>
              </div>
            ))
          ) : (
            <span className="profile__text--small ml-2">
              You haven't had a mentor yet
            </span>
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
    </>
  );
}
