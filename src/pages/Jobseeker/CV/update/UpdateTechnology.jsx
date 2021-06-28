import React from "react";
import TechnologyService from "../../../../services/technologyService";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { FormGroup, Button, Segment } from "semantic-ui-react";
import { toast } from "react-toastify";
import HrmsInput from "../../../../utilities/customFormControls/HrmsInput";

export default function UpdateTechnology({technologyId,technologyName}) {
  let technologyService = new TechnologyService();
  const initialValues = {
    technologyName: technologyName,
  };
  const onSubmit = (values) => {
    values.technologyId=technologyId;
    console.log(values);
    technologyService
      .update(values)
      .then(
        (result) => console.log(result.data.data),
        toast.success("Teknoloji Güncellendi"),
        window.location.reload()
      );
  };
  return (
    <div>
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        <Segment color="green">
          <Form className="ui form">
            <FormGroup widths="equal">
              <HrmsInput
                name="technologyName"
                type="text"
                label="Yetenek"
                placeholder="Yetenek"
              ></HrmsInput>
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
