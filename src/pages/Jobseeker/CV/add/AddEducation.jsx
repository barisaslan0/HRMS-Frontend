import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import HrmsInput from "../../../../utilities/customFormControls/HrmsInput";
import { FormGroup, Button, Segment } from "semantic-ui-react";
import { toast } from "react-toastify";
import EducationService from "../../../../services/educationService";

export default function AddEducation({curriculumVitaeId}) {
  let educationServide = new EducationService();

  const initialValues = {
    schoolName: "",
    department: "",
    startDateOfSchool: "",
    endDateOfSchool: "",
  };
  const onSubmit = (values) => {
    values.curriculumVitaeId = curriculumVitaeId;
    console.log(values);
    educationServide
      .add(values)
      .then((result) => console.log(result.data.data),toast.success("Eğitim Bilgisi Eklendi"),window.location.reload());
  };

  return (
    <div>
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
          <Segment color="green">
            <Form className="ui form">
              <FormGroup widths="equal">
                <HrmsInput
                  name="schoolName"
                  type="text"
                  label="Okul Adı"
                  placeholder="Okul Adı"
                ></HrmsInput>
              </FormGroup>
              <FormGroup widths="equal">
              <HrmsInput
                  name="department"
                  type="text"
                  label="Bölüm"
                  placeholder="Bölüm"
                ></HrmsInput>
              </FormGroup>
              <FormGroup widths="equal">
                <HrmsInput
                  name="startDateOfSchool"
                  type="date"
                  label="Başlangıç Tarihi"
                ></HrmsInput>
                <HrmsInput
                  name="endDateOfSchool"
                  type="date"
                  label="Bitiş Tarihi"
                ></HrmsInput>
              </FormGroup>
              <Button style={{marginLeft:"295pt"}} type="submit" color="green">
                EKLE
              </Button>
            </Form>
          </Segment>
      </Formik>
    </div>
  );
}
