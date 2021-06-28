import React from "react";
import DeleteWorkExperience from "../../../pages/Jobseeker/CV/delete/DeleteWorkExperience";
import { Modal, Button, Icon } from "semantic-ui-react";
import { useState } from "react";

export default function DeleteWokrExperienceModal({workExperienceId}) {
  const [openDeleteWorkExperience, setOpenDeleteWorkExperience] = useState(false);
  return (
    <Modal
      size="mini"
      closeIcon
      onClose={() => setOpenDeleteWorkExperience(false)}
      onOpen={() => setOpenDeleteWorkExperience(true)}
      open={openDeleteWorkExperience}
      trigger={
        <Button style={{marginTop:"43pt"}} color="red" animated="fade">
          <Button.Content visible>
            <Icon name="delete" />
          </Button.Content>
          <Button.Content hidden>SİL</Button.Content>
        </Button>
      }
    >
      <Modal.Header>İş Deneyimi Silme</Modal.Header>
      <Modal.Content>
        <Modal.Description>
          <DeleteWorkExperience workExperienceId={workExperienceId}></DeleteWorkExperience>
        </Modal.Description>
      </Modal.Content>
    </Modal>
  );
}
