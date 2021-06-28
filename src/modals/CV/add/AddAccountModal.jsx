import React from "react";
import AddAccount from "../../../pages/Jobseeker/CV/add/AddAccount";
import { Modal, Button } from "semantic-ui-react";
import { useState } from "react";

export default function AddAccountModal({ curriculumVitaeId }) {
  const [openAddAccount, setOpenAddAccount] = useState(false);
  return (
    <Modal
      size="tiny"
      closeIcon
      onClose={() => setOpenAddAccount(false)}
      onOpen={() => setOpenAddAccount(true)}
      open={openAddAccount}
      trigger={
        <Button
          floated="right"
          inverted
          color="green"
        >
          Hesap Ekle
        </Button>
      }
    >
      <Modal.Header>Hesap Ekleme</Modal.Header>
      <Modal.Content>
        <Modal.Description>
          <AddAccount curriculumVitaeId={curriculumVitaeId}></AddAccount>
        </Modal.Description>
      </Modal.Content>
    </Modal>
  );
}
