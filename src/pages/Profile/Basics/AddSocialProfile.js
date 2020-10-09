import React from "react";
import { Modal, ModalBody, ModalFooter, ModalTitle } from "react-bootstrap";

import Button from "../../../components/DefaultButton";

export default function AddSocialProfile({ open, setOpen, add }) {
  const [url, setUrl] = React.useState("");

  const handleClose = () => {
    setUrl("");
    setOpen(false);
  };

  const handleAdd = () => {
    add(url);
    handleClose();
  };

  return (
    <Modal size="lg" show={open} onHide={handleClose} centered>
      <Modal.Header className="border-bottom-0" closeButton>
        <ModalTitle className="font-weight-bold">Add Social Profile</ModalTitle>
      </Modal.Header>

      <ModalBody className="p-5">
        <input
          type="text"
          placeholder="Input your Social Profile URL e.g. https://www.linkedin.com/in/yourname/"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          className="profile__input mb-4"
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
