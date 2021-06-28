import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { FormGroup, Button, Segment } from "semantic-ui-react";
import { toast } from "react-toastify";
import HrmsTextAreaInput from "../../../../utilities/customFormControls/HrmsTextAreaInput";
import CoverLetterService from "../../../../services/coverLetterService";

export default function UpdateCoverLetter({ coverLetterId, coverLetter }) {
  let coverLetterService = new CoverLetterService();
  const initialValues = {
    coverLetter: coverLetter,
  };
  const onSubmit = (values) => {
    values.coverLetterId = coverLetterId;

    console.log(values);
    coverLetterService
      .update(values)
      .then(
        (result) => console.log(result.data.data),
        toast.success("Ön Yazı Güncellendi"),
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
                label="Önyazı"
                placeholder="Önyazı giriniz..."
              ></HrmsTextAreaInput>
            </FormGroup>
            <Button type="submit" color="green">
              GÜNCELLE
            </Button>
          </Form>
        </Segment>
      </Formik>
    </div>
  );
}
