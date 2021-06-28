import React from "react";
import UpdateForeignLanguage from "../../../pages/Jobseeker/CV/update/UpdateForeignLanguage";
import { Modal, Button, Icon } from "semantic-ui-react";
import { useState } from "react";

export default function UpdateForeignLanguageModal({foreignLanguageId,language,level}) {
  const [openUpdateForeignLanguage, setOpenUpdateForeignLanguage] = useState(false);
  return (
    <Modal
      size="tiny"
      closeIcon
      onClose={() => setOpenUpdateForeignLanguage(false)}
      onOpen={() => setOpenUpdateForeignLanguage(true)}
      open={openUpdateForeignLanguage}
      trigger={
        <Button style={{marginTop:"10pt"}} animated="fade">
          <Button.Content visible>
            <Icon name="pencil" />
          </Button.Content>
          <Button.Content hidden>Düzenle</Button.Content>
        </Button>
      }
    >
      <Modal.Header>Yabancı Dil Güncelleme</Modal.Header>
      <Modal.Content>
        <Modal.Description>
          <UpdateForeignLanguage
            foreignLanguageId={foreignLanguageId}
            language={language}
            level={level}
          ></UpdateForeignLanguage>
        </Modal.Description>
      </Modal.Content>
    </Modal>
  );
}
