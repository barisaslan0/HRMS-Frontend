import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { Button, Segment, Header, Image, FormGroup } from "semantic-ui-react";
import HrmsInput from "../../utilities/customFormControls/HrmsInput";
import HrmsTextAreaInput from "../../utilities/customFormControls/HrmsTextAreaInput";
import CurriculumVitaeService from "../../services/curriculumVitaeService";

export default function AddCurriculumVitae() {
  let curriculumVitaeService = new CurriculumVitaeService();
  const initialValues = {
    linkedinAddress: "",
    githubAddress: "",
    coverLetter: "",
  };

  const onSubmit = (values) => {
    values.jobseekerId = 3;
    console.log(values);
    curriculumVitaeService
      .add(values)
      .then((result) => console.log(result.data.data));
  };
  return (
    <div className="form">
      <Header as="h2" inverted color="red" textAlign="center">
        <Header.Content>ÖZGEÇMİŞ EKLEME</Header.Content>
      </Header>
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        <Segment color="red">
          <Form className="ui form">
            <FormGroup widths="equal">
              <HrmsInput
                name="linkedinAddress"
                type="text"
                label="LinkedIn Adresi"
                placeholder="LinkedIn Adresi"
              ></HrmsInput>
            </FormGroup>
            <FormGroup widths="equal">
              <HrmsInput
                name="githubAddress"
                type="text"
                label="GitHub Adresi"
                placeholder="GitHub Adresi"
              ></HrmsInput>
            </FormGroup>
            <FormGroup widths="equal">
              <HrmsTextAreaInput
                name="coverLetter"
                type="text"
                label="Önyazı"
                placeholder="Önyazı"
              ></HrmsTextAreaInput>
            </FormGroup>
            <Button type="submit" color="green">
              OLUŞTUR
            </Button>
          </Form>
        </Segment>
      </Formik>
    </div>
  );
}
