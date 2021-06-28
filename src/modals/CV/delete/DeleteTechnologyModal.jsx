import React from 'react'
import DeleteTechnology from '../../../pages/Jobseeker/CV/delete/DeleteTechnology';
import { Modal, Button, Icon } from "semantic-ui-react";
import { useState } from "react";

export default function DeleteTechnologyModal({technologyId}) {
    const [openDeleteTechnology, setOpenDeleteTechnology] = useState(false);
  return (
      <Modal
        size="mini"
        closeIcon
        onClose={() => setOpenDeleteTechnology(false)}
        onOpen={() => setOpenDeleteTechnology(true)}
        open={openDeleteTechnology}
        trigger={
          <Button style={{marginTop:"10pt"}} color="red" animated="fade">
            <Button.Content visible>
              <Icon name="delete" />
            </Button.Content>
            <Button.Content hidden>SİL</Button.Content>
          </Button>
        }
      >
        <Modal.Header>Yetenek Silme</Modal.Header>
        <Modal.Content>
          <Modal.Description>
            <DeleteTechnology technologyId={technologyId}></DeleteTechnology>
          </Modal.Description>
        </Modal.Content>
      </Modal>
  );
}
