import React from "react";
import { Formik, Form } from "formik";
import { FormGroup, Button, Segment } from "semantic-ui-react";
import { toast } from "react-toastify";
import AddressService from "../../../../services/addressService";
import HrmsInput from "../../../../utilities/customFormControls/HrmsInput";

export default function AddAddress({ curriculumVitaeId }) {
  let addressService = new AddressService();
  const initialValues = {
    linkedinAddress: "",
    githubAddress: "",
  };
  const onSubmit = (values) => {
    values.curriculumVitaeId = curriculumVitaeId;
    console.log(values);
    addressService
      .add(values)
      .then(
        (result) => console.log(result.data.data),
        toast.success("Adresler Eklendi"),
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
                icon="linkedin"
                iconPosition="left"
                name="linkedinAddress"
                type="text"
                label="LinkedIn Adresi"
                placeholder="LinkedIn adresi"
              ></HrmsInput>
            </FormGroup>
            <FormGroup widths="equal">
              <HrmsInput
                icon="github"
                iconPosition="left"
                name="githubAddress"
                type="text"
                label="GitHub Adresi"
                placeholder="GitHub adresi"
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
