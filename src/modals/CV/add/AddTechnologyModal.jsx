import React from "react";
import AddTechnology from "../../../pages/Jobseeker/CV/add/AddTechnology";
import { Modal, Button } from "semantic-ui-react";
import { useState } from "react";

export default function AddTechnologyModal({ curriculumVitaeId }) {
  const [openAddTechnology, setOpenAddTechnology] = useState(false);
  return (
    <Modal
      size="tiny"
      closeIcon
      onClose={() => setOpenAddTechnology(false)}
      onOpen={() => setOpenAddTechnology(true)}
      open={openAddTechnology}
      trigger={
        <Button style={{ marginLeft: "373pt" }} inverted color="green">
          Yetenek Ekle
        </Button>
      }
    >
      <Modal.Header>Yetenek Ekleme</Modal.Header>
      <Modal.Content>
        <Modal.Description>
          <AddTechnology curriculumVitaeId={curriculumVitaeId}></AddTechnology>
        </Modal.Description>
      </Modal.Content>
    </Modal>
  );
}
