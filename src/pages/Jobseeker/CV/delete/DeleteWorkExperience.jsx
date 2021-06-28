import React from "react";
import WorkExperienceService from "../../../../services/workExperienceService";
import { toast } from "react-toastify";
import { Message,Button } from "semantic-ui-react";

export default function DeleteWorkExperience({workExperienceId}) {
  let workExperienceService = new WorkExperienceService();

  const deleteWorkExperience = (workExperienceId) => {
    workExperienceService
      .delete(workExperienceId)
      .then(toast.success("İş Deneyimi Silindi"), window.location.reload());
  };
  return (
    <div>
      <Message size="massive" error>İş deneyimi silinsin mi?</Message>
      <Button
        style={{ marginBottom: "10pt" }}
        floated="right"
        inverted
        color="red"
        onClick={() => deleteWorkExperience(workExperienceId)}
      >
        SİL
      </Button>
    </div>
  );
}
