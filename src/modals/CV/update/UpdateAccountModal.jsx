import React from "react";
import UpdateAccount from "../../../pages/Jobseeker/CV/update/UpdateAccount";
import { Modal, Button, Icon } from "semantic-ui-react";
import { useState } from "react";

export default function UpdateAccountModal({
  accountId,
  linkedinAccount,
  githubAccount,
}) {
  const [openUpdateAccount, setOpenUpdateAccount] = useState(false);
  return (
    <Modal
      size="tiny"
      closeIcon
      onClose={() => setOpenUpdateAccount(false)}
      onOpen={() => setOpenUpdateAccount(true)}
      open={openUpdateAccount}
      trigger={
        <Button animated="fade" style={{ marginLeft: "20pt" }}>
          <Button.Content visible>
            <Icon name="pencil" />
          </Button.Content>
          <Button.Content hidden>Düzenle</Button.Content>
        </Button>
      }
    >
      <Modal.Header>Hesapları Güncelleme</Modal.Header>
      <Modal.Content>
        <Modal.Description>
          <UpdateAccount
            accountId={accountId}
            linkedinAccount={linkedinAccount}
            githubAccount={githubAccount}
          ></UpdateAccount>
        </Modal.Description>
      </Modal.Content>
    </Modal>
  );
}
