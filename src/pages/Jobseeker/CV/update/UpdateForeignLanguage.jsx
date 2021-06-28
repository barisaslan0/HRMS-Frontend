import React from "react";
import { Formik, Form } from "formik";
import { FormGroup, Button, Segment } from "semantic-ui-react";
import { toast } from "react-toastify";
import HrmsInput from "../../../../utilities/customFormControls/HrmsInput";
import ForeignLanguageService from "../../../../services/foreignLanguageService";


export default function UpdateForeignLanguage({foreignLanguageId,language,level}) {
  let foreignLanguageService = new ForeignLanguageService();

  const initialValues = {
    language: language,
    level: level,
  };
  const onSubmit = (values) => {
    values.foreignLanguageId = foreignLanguageId;
    console.log(values);
    foreignLanguageService
      .update(values)
      .then(
        (result) => console.log(result.data.data),
        toast.success("Yabancı Dil Güncellendi"),
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
            <Button style={{marginLeft:"266pt"}} type="submit" color="green">
              GÜNCELLE
            </Button>
          </Form>
        </Segment>
      </Formik>
    </div>
  );
}
