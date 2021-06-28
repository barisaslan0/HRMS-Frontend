import React from 'react'
import DeleteForeignLanguage from '../../../pages/Jobseeker/CV/delete/DeleteForeignLanguage';
import { Modal, Button, Icon } from "semantic-ui-react";
import { useState } from "react";

export default function DeleteForeignLanguageModal({foreignLanguageId}) {
    const [openDeleteForeignLanguage, setOpenDeleteForeignLanguage] =
    useState(false);
  return (
    <Modal
      size="mini"
      closeIcon
      onClose={() => setOpenDeleteForeignLanguage(false)}
      onOpen={() => setOpenDeleteForeignLanguage(true)}
      open={openDeleteForeignLanguage}
      trigger={
        <Button style={{marginTop:"21pt"}} color="red" animated="fade">
          <Button.Content visible>
            <Icon name="delete" />
          </Button.Content>
          <Button.Content hidden>SİL</Button.Content>
        </Button>
      }
    >
      <Modal.Header>Yabancı Dil Silme</Modal.Header>
      <Modal.Content>
        <Modal.Description>
          <DeleteForeignLanguage
            foreignLanguageId={foreignLanguageId}
          ></DeleteForeignLanguage>
        </Modal.Description>
      </Modal.Content>
    </Modal>
  );
}
