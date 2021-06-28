import React from "react";
import UpdateWorkExperience from "../../../pages/Jobseeker/CV/update/UpdateWorkExperience";
import { Modal, Button, Icon } from "semantic-ui-react";
import { useState } from "react";

export default function UpdateWorkExperienceModal({
  workExperienceId,
  workplaceName,
  jobPositionId,
  startDateOfWork,
  endDateOfWork,
}) {
  const [openUpdateWorkExperience, setOpenUpdateWorkExperience] =
    useState(false);
  return (
    <Modal
      size="tiny"
      closeIcon
      onClose={() => setOpenUpdateWorkExperience(false)}
      onOpen={() => setOpenUpdateWorkExperience(true)}
      open={openUpdateWorkExperience}
      trigger={
        <Button style={{marginTop:"10pt"}} animated="fade">
          <Button.Content visible>
            <Icon name="pencil" />
          </Button.Content>
          <Button.Content hidden>Düzenle</Button.Content>
        </Button>
      }
    >
      <Modal.Header>İş Deneyimi Güncelleme</Modal.Header>
      <Modal.Content>
        <Modal.Description>
          <UpdateWorkExperience
            workExperienceId={workExperienceId}
            workplaceName={workplaceName}
            jobPositionId={jobPositionId}
            startDateOfWork={startDateOfWork}
            endDateOfWork={endDateOfWork}
          ></UpdateWorkExperience>
        </Modal.Description>
      </Modal.Content>
    </Modal>
  );
}
