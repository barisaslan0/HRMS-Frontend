import React from "react";
import AddCurriculumVitae from "../../../pages/Jobseeker/CV/add/AddCurriculumVitae";
import { Modal, Button } from "semantic-ui-react";
import { useState } from "react";

export default function AddCurriculumVitaeModal({ jobseekerId }) {
  const [openAddCurriculumVitae, setOpenAddCurriculumVitae] = useState(false);
  return (
    <Modal
      size="small"
      closeIcon
      onClose={() => setOpenAddCurriculumVitae(false)}
      onOpen={() => setOpenAddCurriculumVitae(true)}
      open={openAddCurriculumVitae}
      trigger={
        <Button style={{ marginBottom: "5pt" }} floated="right" color="green">
          Yeni Özgeçmiş Oluştur
        </Button>
      }
    >
      <Modal.Header>Yeni Özgeçmiş Oluşturma</Modal.Header>
      <Modal.Content>
        <Modal.Description>
          <AddCurriculumVitae jobseekerId={jobseekerId}></AddCurriculumVitae>
        </Modal.Description>
      </Modal.Content>
    </Modal>
  );
}
