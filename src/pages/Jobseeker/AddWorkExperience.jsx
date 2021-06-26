import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import WorkExperienceService from "../../services/workExperienceService";
import { useState } from "react";
import { useEffect } from "react";
import HrmsInput from "../../utilities/customFormControls/HrmsInput";
import HrmsDropdown from "../../utilities/customFormControls/HrmsDropdown";
import { FormGroup, Button, Segment } from "semantic-ui-react";
import JobPositionService from "../../services/jobPositionService";
import { useParams } from "react-router-dom";

export default function AddWorkExperience({ curriculumVitaeId }) {
  let workExperienceService = new WorkExperienceService();

  const [jobPositions, setJobPositions] = useState([]);

  useEffect(() => {
    let jobPositionService = new JobPositionService();
    jobPositionService
      .getJobPositions()
      .then((result) => setJobPositions(result.data.data));
  }, []);

  const initialValues = {
    workplaceName: "",
    jobPositionId: "",
    startDateOfWork: "",
    endDateOfWork: "",
  };
  const onSubmit = (values) => {
    values.curriculumVitaeId = curriculumVitaeId;
    console.log(values);
    workExperienceService
      .add(values)
      .then((result) => console.log(result.data.data));
  };

  const jobPositonOptions = jobPositions.map((jobPosition) => ({
    key: jobPosition.jobPositionId,
    text: jobPosition.positionName,
    value: jobPosition.jobPositionId,
  }));

  return (
    <div>
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        {({ setFieldValue }) => (
          <Segment color="red">
            <Form className="ui form">
              <FormGroup widths="equal">
                <HrmsInput
                  name="workplaceName"
                  type="text"
                  label="Çalışma Yeri"
                  placeholder="Çalışma Yeri"
                ></HrmsInput>
              </FormGroup>
              <FormGroup widths="equal">
                <HrmsDropdown
                  onChange={(fieldName, data) =>
                    setFieldValue("jobPositionId", data.value)
                  }
                  name="jobPositionId"
                  label="Pozisyon"
                  placeholder="Pozisyon Seçiniz"
                  options={jobPositonOptions}
                />
              </FormGroup>
              <FormGroup widths="equal">
                <HrmsInput
                  name="startDateOfWork"
                  type="date"
                  label="Başlangıç Tarihi"
                ></HrmsInput>
                <HrmsInput
                  name="endDateOfWork"
                  type="date"
                  label="Bitiş Tarihi"
                ></HrmsInput>
              </FormGroup>
              <Button type="submit" color="green">
                EKLE
              </Button>
            </Form>
          </Segment>
        )}
      </Formik>
    </div>
  );
}