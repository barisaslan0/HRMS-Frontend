import React from "react";
import DeleteCoverLetter from "../../../pages/Jobseeker/CV/delete/DeleteCoverLetter";
import { Modal, Button, Icon } from "semantic-ui-react";
import { useState } from "react";

export default function DeleteCoverLetterModal({coverLetterId}) {
  const [openDeleteCoverLetter, setOpenDeleteCoverLetter] = useState(false);
  return (
    <Modal
      size="mini"
      closeIcon
      onClose={() => setOpenDeleteCoverLetter(false)}
      onOpen={() => setOpenDeleteCoverLetter(true)}
      open={openDeleteCoverLetter}
      trigger={
        <Button color="red" animated="fade">
          <Button.Content visible>
            <Icon name="delete" />
          </Button.Content>
          <Button.Content hidden>SİL</Button.Content>
        </Button>
      }
    >
      <Modal.Header>Ön Yazı Silme</Modal.Header>
      <Modal.Content>
        <Modal.Description>
          <DeleteCoverLetter coverLetterId={coverLetterId}></DeleteCoverLetter>
        </Modal.Description>
      </Modal.Content>
    </Modal>
  );
}
