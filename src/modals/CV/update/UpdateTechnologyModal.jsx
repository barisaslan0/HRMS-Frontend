import React from "react";
import UpdateTechnology from "../../../pages/Jobseeker/CV/update/UpdateTechnology";
import { Modal, Button, Icon } from "semantic-ui-react";
import { useState } from "react";

export default function UpdateTechnologyModal({
  technologyId,
  technologyName,
}) {
  const [openUpdateTechnology, setOpenUpdateTechnology] = useState(false);
  return (
    <Modal
      size="tiny"
      closeIcon
      onClose={() => setOpenUpdateTechnology(false)}
      onOpen={() => setOpenUpdateTechnology(true)}
      open={openUpdateTechnology}
      trigger={
        <Button style={{marginTop:"10pt"}} animated="fade">
          <Button.Content visible>
            <Icon name="pencil" />
          </Button.Content>
          <Button.Content hidden>Düzenle</Button.Content>
        </Button>
      }
    >
      <Modal.Header>Yetenek Güncelleme</Modal.Header>
      <Modal.Content>
        <Modal.Description>
          <UpdateTechnology
            technologyId={technologyId}
            technologyName={technologyName}
          ></UpdateTechnology>
        </Modal.Description>
      </Modal.Content>
    </Modal>
  );
}
