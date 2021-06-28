import React from "react";
import { toast } from "react-toastify";
import { Message,Button } from "semantic-ui-react";
import AccountService from "../../../../services/accountService";
import AddressService from "../../../../services/accountService";

export default function DeleteAccount({accountId}) {
  let accountService = new AccountService();

  const deleteAccount = (accountId) => {
    accountService
      .delete(accountId)
      .then(toast.success("Hesaplar Silindi"), window.location.reload());
  };
  return (
    <div>
      <Message size="massive" error>Hesaplar silinsin mi?</Message>
      <Button style={{marginBottom:"10pt"}} floated="right" inverted color="red" onClick={() => deleteAccount(accountId)}>SİL</Button>
    </div>
  );
}
