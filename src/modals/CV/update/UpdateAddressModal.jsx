import React from "react";
import UpdateAddress from "../../../pages/Jobseeker/CV/update/UpdateAddress";
import { Modal, Button, Icon } from "semantic-ui-react";
import { useState } from "react";

export default function UpdateAddressModal({
  addressId,
  linkedinAddress,
  githubAddress,
}) {
  const [openUpdateAddress, setOpenUpdateAddress] = useState(false);
  return (
    <Modal
      size="tiny"
      closeIcon
      onClose={() => setOpenUpdateAddress(false)}
      onOpen={() => setOpenUpdateAddress(true)}
      open={openUpdateAddress}
      trigger={
        <Button animated="fade" style={{ marginLeft: "20pt" }}>
          <Button.Content visible>
            <Icon name="pencil" />
          </Button.Content>
          <Button.Content hidden>Düzenle</Button.Content>
        </Button>
      }
    >
      <Modal.Header>Adres Güncelleme</Modal.Header>
      <Modal.Content>
        <Modal.Description>
          <UpdateAddress
            addressId={addressId}
            linkedinAddress={linkedinAddress}
            githubAddress={githubAddress}
          ></UpdateAddress>
        </Modal.Description>
      </Modal.Content>
    </Modal>
  );
}
