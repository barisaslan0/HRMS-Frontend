import React from "react";
import AddForeignLanguage from "../../../pages/Jobseeker/CV/add/AddForeignLanguage";
import { Modal, Button, Icon } from "semantic-ui-react";
import { useState } from "react";

export default function AddForeignLanguageModal({ curriculumVitaeId }) {
  const [openAddForeignLanguage, setOpenAddForeignLanguage] = useState(false);
  return (
    <Modal
      size="tiny"
      closeIcon
      onClose={() => setOpenAddForeignLanguage(false)}
      onOpen={() => setOpenAddForeignLanguage(true)}
      open={openAddForeignLanguage}
      trigger={
        <Button style={{ marginLeft: "360pt" }} inverted color="green">
          Yabancı Dil Ekle
        </Button>
      }
    >
      <Modal.Header>Yabancı Dil Ekleme</Modal.Header>
      <Modal.Content>
        <Modal.Description>
          <AddForeignLanguage
            curriculumVitaeId={curriculumVitaeId}
          ></AddForeignLanguage>
        </Modal.Description>
      </Modal.Content>
    </Modal>
  );
}
