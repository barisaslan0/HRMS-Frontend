import React from "react";
import EducationService from "../../../../services/educationService";
import { Formik, Form } from "formik";
import HrmsInput from "../../../../utilities/customFormControls/HrmsInput";
import { FormGroup, Button, Segment } from "semantic-ui-react";
import { toast } from "react-toastify";

export default function UpdateEducation({
  educationId,
  schoolName,
  department,
  startDateOfSchool,
  endDateOfSchool,
}) {
  let educationService = new EducationService();

  const initialValues = {
    schoolName: schoolName,
    department: department,
    startDateOfSchool: startDateOfSchool,
    endDateOfSchool: endDateOfSchool,
  };
  const onSubmit = (values) => {
    values.educationId = educationId;
    console.log(values);
    educationService
      .update(values)
      .then(
        (result) => console.log(result.data.data),
        toast.success("Eğitim Bilgisi Güncellendi"),
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
