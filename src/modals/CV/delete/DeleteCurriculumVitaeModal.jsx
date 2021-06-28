import React from "react";
import DeleteCurriculumVitae from "../../../pages/Jobseeker/CV/delete/DeleteCurriculumVitae";
import { Modal, Button } from "semantic-ui-react";
import { useState } from "react";

export default function DeleteCurriculumVitaeModal({ curriculumVitaeId }) {
  const [openDeleteCurriculumVitae, setOpenDeleteCurriculumVitae] =
    useState(false);
  return (
    <Modal
      size="tiny"
      closeIcon
      onClose={() => setOpenDeleteCurriculumVitae(false)}
      onOpen={() => setOpenDeleteCurriculumVitae(true)}
      open={openDeleteCurriculumVitae}
      trigger={
        <Button floated="right" inverted color="red">
          SİL
        </Button>
      }
    >
      <Modal.Header>Özgeçmiş Silme</Modal.Header>
      <Modal.Content>
        <Modal.Description>
          <DeleteCurriculumVitae
            curriculumVitaeId={curriculumVitaeId}
          ></DeleteCurriculumVitae>
        </Modal.Description>
      </Modal.Content>
    </Modal>
  );
}
