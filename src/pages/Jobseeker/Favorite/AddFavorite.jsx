import React from "react";
import { Formik, Form } from "formik";
import { Button,Rating } from "semantic-ui-react";
import { toast } from "react-toastify";
import FavoriteService from "../../../services/favoriteService";

export default function AddFavorite({ jobseekerId, jobPostingId }) {
  let favoriteService = new FavoriteService();

  const initialValues = {
    jobseekerId: "",
    jobPostingId: "",
  };

  const onSubmit = (values) => {
    values.jobseekerId = jobseekerId;
    values.jobPostingId = jobPostingId;
    console.log(values);
    favoriteService
      .add(values)
      .then(
        (result) => console.log(result.data.data),
        toast.success("Favorilere Eklendi")
      );
  };
  return (
    <div>
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        <Form>
         <Button icon="heart" type="submit" inverted color="red"></Button>
        </Form>
      </Formik>
    </div>
  );
}
