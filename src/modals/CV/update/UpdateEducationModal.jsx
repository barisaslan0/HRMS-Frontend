import React from "react";
import UpdateEducation from "../../../pages/Jobseeker/CV/update/UpdateEducation";
import { Modal, Button, Icon } from "semantic-ui-react";
import { useState } from "react";

export default function UpdateEducationModal(
  educationId,
  schoolName,
  department,
  startDateOfSchool,
  endDateOfSchool
) {
  const [openUpdateEducation, setOpenUpdateEducation] = useState(false);
  return (
    <Modal
      size="tiny"
      closeIcon
      onClose={() => setOpenUpdateEducation(false)}
      onOpen={() => setOpenUpdateEducation(true)}
      open={openUpdateEducation}
      trigger={
        <Button style={{marginTop:"10pt"}} animated="fade">
          <Button.Content visible>
            <Icon name="pencil" />
          </Button.Content>
          <Button.Content hidden>Düzenle</Button.Content>
        </Button>
      }
    >
      <Modal.Header>Eğitim Bilgisi Güncelleme</Modal.Header>
      <Modal.Content>
        <Modal.Description>
          <UpdateEducation
            educationId={educationId}
            schoolName={schoolName}
            department={department}
            startDateOfSchool={startDateOfSchool}
            endDateOfSchool={endDateOfSchool}
          ></UpdateEducation>
        </Modal.Description>
      </Modal.Content>
    </Modal>
  );
}
