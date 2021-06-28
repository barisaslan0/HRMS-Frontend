import React from "react";
import { Formik, Form } from "formik";
import { Button, Segment, FormGroup, Message } from "semantic-ui-react";
import CurriculumVitaeService from "../../../../services/curriculumVitaeService";
import { toast } from "react-toastify";

export default function AddCurriculumVitae({ jobseekerId }) {
  let curriculumVitaeService = new CurriculumVitaeService();

  const initialValues = {
    jobseekerId: "",
  };

  const onSubmit = (values) => {
    values.jobseekerId = jobseekerId;
    console.log(values);
    curriculumVitaeService
      .add(values)
      .then(
        (result) => console.log(result.data.data),
        toast.success("Özgeçmiş Oluşturuldu"),
        window.location.reload()
      );
  };
  return (
    <div className="form">
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        <Form className="ui form">
          <Segment color="green">
            <FormGroup widths="equal">
              <Message size="huge" positive>
                Yeni bir özgeçmiş oluşturmak istiyor musunuz?
                Oluşturulan özgeçmişi daha sonra düzenleyebileceksiniz.
              </Message>
            </FormGroup>
            <Button style={{ marginLeft: "313pt" }} type="submit" color="green">
              OLUŞTUR
            </Button>
          </Segment>
        </Form>
      </Formik>
    </div>
  );
}
