import React, { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";

const EditCatModal = ({
  handleModalClose,
  show,
  currentCat,
  currentCatIndex,
  cats,
  setCats,
}) => {
  // access values of current cat
  const { thumbnailUrl, name, birthdate, ownerName } = currentCat;

  // set initial state of form to empty string
  const [state, setState] = useState({
    inputThumbnail: "",
    inputName: "",
    inputDate: "",
    inputOwner: "",
  });

  // handle user input in form
  const handleChange = (e) => {
    const { value } = e.target;
    setState({ ...state, [e.target.name]: value });
  };

  // handle saving changes in form
  const handleSave = () => {
    const { inputThumbnail, inputName, inputDate, inputOwner } = state;

    let allCats = [...cats];
    allCats[currentCatIndex].thumbnailUrl = !inputThumbnail
      ? allCats[currentCatIndex].thumbnailUrl
      : inputThumbnail;
    allCats[currentCatIndex].name = !inputName
      ? allCats[currentCatIndex].name
      : inputName;
    allCats[currentCatIndex].birthdate = !inputDate
      ? allCats[currentCatIndex].birthdate
      : inputDate;
    allCats[currentCatIndex].ownerName = !inputOwner
      ? allCats[currentCatIndex].ownerName
      : inputOwner;

    localStorage.setItem("data", JSON.stringify(allCats));
    setCats(allCats);
    setState({
      inputThumbnail: "",
      inputName: "",
      inputDate: "",
      inputOwner: "",
    });
  };

  return (
    <Modal show={show} onHide={handleModalClose} size="lg">
      <Modal.Header>
        <Modal.Title>Edit</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3 d-flex align-items-center input-wrapper">
            <Form.Label>Thumbnail URL</Form.Label>
            <Form.Control
              onChange={handleChange}
              defaultValue={thumbnailUrl}
              name="inputThumbnail"
              type="text"
            />
          </Form.Group>
          <Form.Group className="mb-3 d-flex align-items-center input-wrapper">
            <Form.Label>Name</Form.Label>
            <Form.Control
              onChange={handleChange}
              defaultValue={name}
              name="inputName"
              type="text"
            />
          </Form.Group>
          <Form.Group className="mb-3 d-flex align-items-center input-wrapper">
            <Form.Label>Birth Date</Form.Label>
            <Form.Control
              onChange={handleChange}
              defaultValue={birthdate}
              name="inputDate"
              type="date"
            />
          </Form.Group>
          <Form.Group className="mb-3 d-flex align-items-center input-wrapper">
            <Form.Label>Owner</Form.Label>
            <Form.Control
              onChange={handleChange}
              defaultValue={ownerName}
              name="inputOwner"
              type="text"
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button
          variant="secondary"
          onClick={() => {
            handleSave();
            handleModalClose();
          }}
        >
          Save
        </Button>
        <Button variant="primary" onClick={handleModalClose}>
          Cancel
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default EditCatModal;
