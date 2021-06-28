import React from "react";
import { Formik, Form } from "formik";
import { Button, Segment, FormGroup, Message } from "semantic-ui-react";
import CurriculumVitaeService from "../../../../services/curriculumVitaeService";
import { toast } from "react-toastify";

export default function AddCurriculumVitae({jobseekerId}) {
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
        <Segment color="green">
          <Form className="ui form">
            <FormGroup widths="equal">
              <Message positive>
                Yeni bir özgeçmiş oluşturmak istiyor musunuz?
              </Message>
            </FormGroup>
            <FormGroup>
              <Message>Alanları daha sonra düzenleyebileceksiniz.</Message>
            </FormGroup>
            <Button style={{ marginLeft: "315pt" }} type="submit" color="green">
              OLUŞTUR
            </Button>
          </Form>
        </Segment>
      </Formik>
    </div>
  );
}
