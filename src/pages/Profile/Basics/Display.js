import React from "react";

import Button from "../../../components/DefaultButton";
import ProgressBar from "../../../components/ProgressBar";
import AccountIcon from "../../../svg/AccountCircle";

export default function Display({ setEditMode, roadmap, ...data }) {
  const {
    profileImage,
    firstname,
    lastname,
    username,
    email,
    birthDate,
    location: { country, city },
    preferredLanguage,
    mentors,
  } = data;

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
            <p className="roadmap__text">
              Username: <span className="font-weight-light">{username}</span>
            </p>
          </div>
        </div>

        <p className="roadmap__text mt-3  mb-0">
          Email Address: <span className="font-weight-light">{email}</span>
        </p>

        <p className="roadmap__text mt-5 mb-0">
          Date of Birth: <span className="font-weight-light">{birthDate}</span>
        </p>
        <p className="m-1">* only you can see</p>

        <p className="roadmap__text mt-5 mb-0">
          Location:{" "}
          <span className="font-weight-light">
            {city}, {country}
          </span>
        </p>

        <p className="roadmap__text mt-5 mb-0">
          Language:{" "}
          <span className="font-weight-light">{preferredLanguage}</span>
        </p>

        <p className="roadmap__text mt-5 mb-0">
          Roadmap Duration:{" "}
          <span className="font-weight-light">{roadmap.duration}</span>
        </p>
        <div className="mt-3">
          <ProgressBar progress={roadmap.progress} status={roadmap.status} />
        </div>

        <p className="roadmap__text mt-5 mb-0">Your Mentors</p>
        <div className="d-flex mt-2">
          {mentors.length > 0 ? (
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
            <p className="m-1">You don't have a mentor yet</p>
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
