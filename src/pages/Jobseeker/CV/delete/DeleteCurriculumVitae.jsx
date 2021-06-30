import React from "react";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import { Message, Button } from "semantic-ui-react";
import CurriculumVitaeService from "../../../../services/curriculumVitaeService";

export default function DeleteCurriculumVitae({ curriculumVitaeId }) {
  const history = useHistory();
  let curriculumVitaeService = new CurriculumVitaeService();

  const deleteCV = (curriculumVitaeId) => {
    curriculumVitaeService
      .delete(curriculumVitaeId)
      .then(
        toast.success("Özgeçmiş Silindi"),
        history.push(`/jobseeker/${3}/curriculumvitaes`),
        window.location.reload()
      );
  };
  return (
    <div>
      <Message size="massive" error>Özgeçmişi silmek istiyor musunuz?</Message>
      <Button
        style={{ marginBottom: "10pt" }}
        inverted
        color="red"
        floated="right"
        onClick={() => deleteCV(curriculumVitaeId)}
      >
        SİL
      </Button>
    </div>
  );
}
