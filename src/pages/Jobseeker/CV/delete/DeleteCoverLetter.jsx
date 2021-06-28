import React from "react";
import CoverLetterService from "../../../../services/coverLetterService";
import { toast } from "react-toastify";
import { Message,Button } from "semantic-ui-react";

export default function DeleteCoverLetter({coverLetterId}) {
  let coverLetterService = new CoverLetterService();

  const deleteCoverLetter = (coverLetterId) => {
    coverLetterService
      .delete(coverLetterId)
      .then(toast.success("Ön Yazı Silindi"), window.location.reload());
  };
  return (
    <div>
      <Message error>Ön yazı silinsin mi?</Message>
      <Button
        style={{ marginBottom: "10pt" }}
        floated="right"
        inverted
        color="red"
        onClick={() => deleteCoverLetter(coverLetterId)}
      >
        SİL
      </Button>
    </div>
  );
}
