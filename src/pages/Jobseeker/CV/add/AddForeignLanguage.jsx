import React from "react";
import { Formik, Form } from "formik";
import { FormGroup, Button, Segment } from "semantic-ui-react";
import { toast } from "react-toastify";
import HrmsInput from "../../../../utilities/customFormControls/HrmsInput";
import ForeignLanguageService from "../../../../services/foreignLanguageService";

export default function AddForeignLanguage({ curriculumVitaeId }) {
  let foreignLanguageService = new ForeignLanguageService();

  const initialValues = {
    language: "",
    level: "",
  };
  const onSubmit = (values) => {
    values.curriculumVitaeId = curriculumVitaeId;
    console.log(values);
    foreignLanguageService
      .add(values)
      .then(
        (result) => console.log(result.data.data),
        toast.success("Yabancı Dil Eklendi"),
        window.location.reload()
      );
  };

  return (
    <div>
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        <Segment color="red">
          <Form className="ui form">
            <FormGroup widths="equal">
              <HrmsInput
                name="language"
                type="text"
                label="Yabancı Dil"
                placeholder="Yabancı Dil"
              ></HrmsInput>
            </FormGroup>
            <FormGroup widths="equal">
              <HrmsInput
                name="level"
                type="text"
                label="Seviye"
                placeholder="Seviye"
              ></HrmsInput>
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
