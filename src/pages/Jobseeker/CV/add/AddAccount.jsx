import React from "react";
import { Formik, Form } from "formik";
import { FormGroup, Button, Segment } from "semantic-ui-react";
import { toast } from "react-toastify";
import AddressService from "../../../../services/accountService";
import HrmsInput from "../../../../utilities/customFormControls/HrmsInput";
import AccountService from "../../../../services/accountService";

export default function AddAccount({ curriculumVitaeId }) {
  let accountService = new AccountService();
  const initialValues = {
    linkedinAccount: "",
    githubAccount: "",
  };
  const onSubmit = (values) => {
    values.curriculumVitaeId = curriculumVitaeId;
    console.log(values);
    accountService
      .add(values)
      .then(
        (result) => console.log(result.data.data),
        toast.success("Hesaplar Eklendi"),
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
                name="linkedinAccount"
                type="text"
                label="LinkedIn Hesabı"
                placeholder="LinkedIn hesabı"
              ></HrmsInput>
            </FormGroup>
            <FormGroup widths="equal">
              <HrmsInput
                icon="github"
                iconPosition="left"
                name="githubAccount"
                type="text"
                label="GitHub Hesabı"
                placeholder="GitHub hesabı"
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
