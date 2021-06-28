import React from "react";
import DeleteAddress from "../../../pages/Jobseeker/CV/delete/DeleteAddress";
import { Modal, Button, Icon } from "semantic-ui-react";
import { useState } from "react";

export default function DeleteAddressModal({ addressId }) {
  const [openDeleteAddress, setOpenDeleteAddress] = useState(false);
  return (
      <Modal
        size="mini"
        closeIcon
        onClose={() => setOpenDeleteAddress(false)}
        onOpen={() => setOpenDeleteAddress(true)}
        open={openDeleteAddress}
        trigger={
          <Button color="red" animated="fade">
            <Button.Content visible>
              <Icon name="delete" />
            </Button.Content>
            <Button.Content hidden>SİL</Button.Content>
          </Button>
        }
      >
        <Modal.Header>Adresleri Silme</Modal.Header>
        <Modal.Content>
          <Modal.Description>
            <DeleteAddress addressId={addressId}></DeleteAddress>
          </Modal.Description>
        </Modal.Content>
      </Modal>
  );
}
