import React from "react";
import CoverLetterService from "../../services/coverLetterService";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { FormGroup, Button, Segment } from "semantic-ui-react";
import { toast } from "react-toastify";
import HrmsTextAreaInput from "../../utilities/customFormControls/HrmsTextAreaInput";

export default function AddCoverLetter({curriculumVitaeId}) {
  let coverLetterService = new CoverLetterService();
  const initialValues = {
    coverLetter: "",
  };
  const onSubmit = (values) => {
    values.curriculumVitaeId = curriculumVitaeId;
    console.log(values);
    coverLetterService
      .add(values)
      .then(
        (result) => console.log(result.data.data),
        toast.success("Ön Yazı Eklendi"),
        window.location.reload()
      );
  };
  return (
    <div>
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        <Segment color="red">
          <Form className="ui form">
            <FormGroup widths="equal">
              <HrmsTextAreaInput
                name="coverLetter"
                type="text"
                label="Ön Yazı"
                placeholder="Ön Yazıyı Buraya Giriniz..."
              ></HrmsTextAreaInput>
            </FormGroup>
            <Button type="submit" color="green">
              EKLE
            </Button>
          </Form>
        </Segment>
      </Formik>
    </div>
  );
}
