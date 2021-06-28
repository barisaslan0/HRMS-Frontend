import React from "react";
import AddAddress from "../../../pages/Jobseeker/CV/add/AddAddress";
import { Modal, Button } from "semantic-ui-react";
import { useState } from "react";

export default function AddAddressModal({ curriculumVitaeId }) {
  const [openAddAddress, setOpenAddAddress] = useState(false);
  return (
    <Modal
      size="tiny"
      closeIcon
      onClose={() => setOpenAddAddress(false)}
      onOpen={() => setOpenAddAddress(true)}
      open={openAddAddress}
      trigger={
        <Button
          floated="right"
          inverted
          color="green"
        >
          Adres Ekle
        </Button>
      }
    >
      <Modal.Header>Adres Ekleme</Modal.Header>
      <Modal.Content>
        <Modal.Description>
          <AddAddress curriculumVitaeId={curriculumVitaeId}></AddAddress>
        </Modal.Description>
      </Modal.Content>
    </Modal>
  );
}
