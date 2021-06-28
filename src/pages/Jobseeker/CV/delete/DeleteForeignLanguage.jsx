import React from "react";
import ForeignLanguageService from "../../../../services/foreignLanguageService";
import { toast } from "react-toastify";
import { Message,Button } from "semantic-ui-react";

export default function DeleteForeignLanguage({foreignLanguageId}) {
  let foreignLanguageService = new ForeignLanguageService();

  const deleteForeignLanguage = (foreignLanguageId) => {
    foreignLanguageService
      .delete(foreignLanguageId)
      .then(toast.success("Yabancı Dil Silindi"), window.location.reload());
  };
  return (
    <div>
      <Message error>Yabancı dil silinsin mi?</Message>
      <Button
        style={{ marginBottom: "10pt" }}
        floated="right"
        inverted
        color="red"
        onClick={() => deleteForeignLanguage(foreignLanguageId)}
      >
        SİL
      </Button>
    </div>
  );
}
