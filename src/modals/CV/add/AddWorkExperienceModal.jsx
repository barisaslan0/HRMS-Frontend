import React from "react";
import AddWorkExperience from "../../../pages/Jobseeker/CV/add/AddWorkExperience";
import { Modal, Button, Icon } from "semantic-ui-react";
import { useState } from "react";

export default function AddWorkExperienceModal({ curriculumVitaeId }) {
  const [openAddWorkExperience, setOpenAddWorkExperience] = useState(false);
  return (
    <Modal
      size="tiny"
      closeIcon
      onClose={() => setOpenAddWorkExperience(false)}
      onOpen={() => setOpenAddWorkExperience(true)}
      open={openAddWorkExperience}
      trigger={
        <Button style={{ marginLeft: "339pt" }} inverted color="green">
          İş Deneyimi Ekle
        </Button>
      }
    >
      <Modal.Header>İş Deneyimi Ekleme</Modal.Header>
      <Modal.Content>
        <Modal.Description>
          <AddWorkExperience
            curriculumVitaeId={curriculumVitaeId}
          ></AddWorkExperience>
        </Modal.Description>
      </Modal.Content>
    </Modal>
  );
}
