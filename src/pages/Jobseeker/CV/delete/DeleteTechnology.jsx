import React from "react";
import TechnologyService from "../../../../services/technologyService";
import { toast } from "react-toastify";
import { Message,Button } from "semantic-ui-react";

export default function DeleteTechnology({ technologyId }) {
  let technologyService = new TechnologyService();

  const deleteTechnology = (technologyId) => {
    technologyService
      .delete(technologyId)
      .then(toast.success("Teknoloji Silindi"), window.location.reload());
  };
  return (
    <div>
      <Message error>Teknoloji silinsin mi?</Message>
      <Button
        style={{ marginBottom: "10pt" }}
        floated="right"
        inverted
        color="red"
        onClick={() => deleteTechnology(technologyId)}
      >
        SİL
      </Button>
    </div>
  );
}
