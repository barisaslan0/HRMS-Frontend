import React from "react";
import DeleteEducation from "../../../pages/Jobseeker/CV/delete/DeleteEducation";
import { Modal, Button, Icon } from "semantic-ui-react";
import { useState } from "react";

export default function DeleteEducationModal({educationId}) {
  const [openDeleteEducation, setOpenDeleteEducation] =
    useState(false);
  return (
    <Modal
      size="mini"
      closeIcon
      onClose={() => setOpenDeleteEducation(false)}
      onOpen={() => setOpenDeleteEducation(true)}
      open={openDeleteEducation}
      trigger={
        <Button style={{marginTop:"43pt"}} color="red" animated="fade">
          <Button.Content visible>
            <Icon name="delete" />
          </Button.Content>
          <Button.Content hidden>SİL</Button.Content>
        </Button>
      }
    >
      <Modal.Header>Eğitim Bilgisi Silme</Modal.Header>
      <Modal.Content>
        <Modal.Description>
          <DeleteEducation
            educationId={educationId}
          ></DeleteEducation>
        </Modal.Description>
      </Modal.Content>
    </Modal>
  );
}
