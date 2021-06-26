import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import EducationService from "../../services/educationService";
import HrmsInput from "../../utilities/customFormControls/HrmsInput";
import { FormGroup, Button, Segment } from "semantic-ui-react";
import { toast } from "react-toastify";

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
          <Segment color="red">
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
              <Button type="submit" color="green">
                EKLE
              </Button>
            </Form>
          </Segment>
      </Formik>
    </div>
  );
}
