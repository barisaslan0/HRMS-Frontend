import React from "react";
import DeleteAccount from "../../../pages/Jobseeker/CV/delete/DeleteAccount";
import { Modal, Button, Icon } from "semantic-ui-react";
import { useState } from "react";

export default function DeleteAccountModal({ accountId }) {
  const [openDeleteAccount, setOpenDeleteAccount] = useState(false);
  return (
      <Modal
        size="mini"
        closeIcon
        onClose={() => setOpenDeleteAccount(false)}
        onOpen={() => setOpenDeleteAccount(true)}
        open={openDeleteAccount}
        trigger={
          <Button color="red" animated="fade">
            <Button.Content visible>
              <Icon name="delete" />
            </Button.Content>
            <Button.Content hidden>SİL</Button.Content>
          </Button>
        }
      >
        <Modal.Header>Hesapları Silme</Modal.Header>
        <Modal.Content>
          <Modal.Description>
            <DeleteAccount accountId={accountId}></DeleteAccount>
          </Modal.Description>
        </Modal.Content>
      </Modal>
  );
}
