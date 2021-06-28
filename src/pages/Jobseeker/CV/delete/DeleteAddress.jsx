import React from "react";
import { toast } from "react-toastify";
import { Message,Button } from "semantic-ui-react";
import AddressService from "../../../../services/addressService";

export default function DeleteAddress({addressId}) {
  let addressService = new AddressService();

  const deleteAddress = (addressId) => {
    addressService
      .delete(addressId)
      .then(toast.success("Adresler Silindi"), window.location.reload());
  };
  return (
    <div>
      <Message error>Adresler silinsin mi?</Message>
      <Button style={{marginBottom:"10pt"}} floated="right" inverted color="red" onClick={() => deleteAddress(addressId)}>SİL</Button>
    </div>
  );
}
