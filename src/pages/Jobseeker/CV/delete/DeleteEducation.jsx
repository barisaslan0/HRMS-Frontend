import React from "react";
import EducationService from "../../../../services/educationService";
import { toast } from "react-toastify";
import { Message,Button } from "semantic-ui-react";

export default function DeleteEducation({educationId}) {
  let educationService = new EducationService();

  const deleteEducation = (educationId) => {
    educationService
      .delete(educationId)
      .then(toast.success("Eğitim Bilgisi Silindi"), window.location.reload());
  };
  return (
    <div>
      <Message error>Eğitim bilgisi silinsin mi?</Message>
      <Button
        style={{ marginBottom: "10pt" }}
        floated="right"
        inverted
        color="red"
        onClick={() => deleteEducation(educationId)}
      >
        SİL
      </Button>
    </div>
  );
}
