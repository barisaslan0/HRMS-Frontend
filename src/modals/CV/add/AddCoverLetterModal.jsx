import React from "react";
import AddCoverLetter from "../../../pages/Jobseeker/CV/add/AddCoverLetter";
import { Modal, Button } from "semantic-ui-react";
import { useState } from "react";

export default function AddCoverLetterModal({ curriculumVitaeId }) {
  const [openAddCoverLetter, setOpenAddCoverLetter] = useState(false);
  return (
    <Modal
      size="tiny"
      closeIcon
      onClose={() => setOpenAddCoverLetter(false)}
      onOpen={() => setOpenAddCoverLetter(true)}
      open={openAddCoverLetter}
      trigger={
        <Button
          floated="right"
          inverted
          color="green"
        >
          Ön Yazı Ekle
        </Button>
      }
    >
      <Modal.Header>Ön Yazı Ekleme</Modal.Header>
      <Modal.Content>
        <Modal.Description>
          <AddCoverLetter
            curriculumVitaeId={curriculumVitaeId}
          ></AddCoverLetter>
        </Modal.Description>
      </Modal.Content>
    </Modal>
  );
}
