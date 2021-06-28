import React from "react";
import { useState } from "react";
import UpdateSystemPersonnal from "../../../pages/SystemPersonnal/UpdateSystemPersonnal";
import { Modal,Button,Icon } from "semantic-ui-react";

export default function UpdateSystemPersonnalModal({
    userId,
    firstName,
    lastName,
    email,
  }) {
  const [openUpdateSystemPersonnal, setOpenUpdateSystemPersonnal] =
    useState(false);
  return (
    <Modal
      size="tiny"
      closeIcon
      onClose={() => setOpenUpdateSystemPersonnal(false)}
      onOpen={() => setOpenUpdateSystemPersonnal(true)}
      open={openUpdateSystemPersonnal}
      trigger={
        <Button floated="right" animated="fade">
          <Button.Content visible>
            <Icon name="pencil" />
          </Button.Content>
          <Button.Content hidden>Düzenle</Button.Content>
        </Button>
      }
    >
      <Modal.Header>Kişisel Bilgileri Güncelleme</Modal.Header>
      <Modal.Content>
        <Modal.Description>
          <UpdateSystemPersonnal
            userId={userId}
            firstName={firstName}
            lastName={lastName}
            email={email}
          ></UpdateSystemPersonnal>
        </Modal.Description>
      </Modal.Content>
    </Modal>
  );
}
