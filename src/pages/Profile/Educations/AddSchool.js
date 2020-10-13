import React from "react";
import { Modal, ModalBody, ModalFooter, ModalTitle } from "react-bootstrap";

import Button from "../../../components/DefaultButton";

export default function AddSchool({ open, setOpen, add }) {
  const [name, setName] = React.useState("");
  const [level, setLevel] = React.useState("");
  const [major, setMajor] = React.useState("");
  const [year, setYear] = React.useState("");

  const handleClose = () => {
    setName("");
    setLevel("");
    setMajor("");
    setYear("");

    setOpen(false);
  };

  const handleAdd = () => {
    add({
      name,
      level,
      field: major,
      completed: year,
    });

    handleClose();
  };
  return (
    <Modal size="lg" show={open} onHide={handleClose} centered>
      <Modal.Header className="border-bottom-0" closeButton>
        <ModalTitle className="font-weight-bold">Add School</ModalTitle>
      </Modal.Header>

      <ModalBody className="p-5">
        <label className="profile__label">School Name</label>
        <input
          type="text"
          placeholder="Input your school's name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="profile__input mb-4"
        />

        <label className="profile__label">Level of Study</label>
        <select
          defaultValue="noValue"
          onChange={(e) => setLevel(e.target.value)}
          className="profile__input mb-4"
        >
          <option disabled value="noValue">
            Select level of study
          </option>

          {listOfLevel.map((level, i) => (
            <option key={`education-level-${i}`} value={level}>
              {level}
            </option>
          ))}
        </select>

        <label className="profile__label">Major(s)</label>
        <input
          type="text"
          placeholder="Input subjects"
          value={major}
          onChange={(e) => setMajor(e.target.value)}
          className="profile__input mb-4"
        />

        <label className="profile__label">
          Month and Year of Graduation (or expected)
        </label>
        <input
          type="month"
          placeholder="Select Month"
          value={year}
          onChange={(e) => setYear(e.target.value)}
          className="profile__input"
        />
      </ModalBody>

      <ModalFooter className="border-top-0 align-self-center">
        <Button small onClick={handleAdd}>
          Add
        </Button>
        <Button secondary small onClick={handleClose}>
          Cancel
        </Button>
      </ModalFooter>
    </Modal>
  );
}

// temporary list
const listOfLevel = [
  "High school diploma",
  "Associate's Degrees",
  "Bachelor's Degrees",
  "Master's Degrees",
  "Doctoral Degrees",
];
