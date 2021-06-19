import React from "react";
import { useState, useEffect } from "react";
import JobPositionService from "../services/jobPositionService";
import CityService from "../services/cityService";
import WorkTypeService from "../services/workTypeService";
import WorkTimeService from "../services/workTimeService";
import { useFormik } from "formik";
import * as Yup from "yup";
import JobPostingService from "../services/jobPostingService";
import { Form, Button, Card, Segment, Header, Image } from "semantic-ui-react";
import { toast } from "react-toastify";
import logo from "../images/logo-kırmızı.png";

export default function AddJobPosting() {
  let jobPostingService = new JobPostingService();

  const [jobPositions, setJobPositions] = useState([]);
  const [cities, setCities] = useState([]);
  const [workTypes, setWorkTypes] = useState([]);
  const [workTimes, setWorkTimes] = useState([]);

  useEffect(() => {
    let jobPositionService = new JobPositionService();
    jobPositionService
      .getJobPositions()
      .then((result) => setJobPositions(result.data.data));

    let cityService = new CityService();
    cityService.getCities().then((result) => setCities(result.data.data));

    let workTypeService = new WorkTypeService();
    workTypeService
      .getWorkTypes()
      .then((result) => setWorkTypes(result.data.data));

    let workTimeService = new WorkTimeService();
    workTimeService
      .getWorkTimes()
      .then((result) => setWorkTimes(result.data.data));
  }, []);

  const {
    values,
    errors,
    touched,
    handleSubmit,
    handleReset,
    handleChange,
    handleBlur,
    onBlur,
    setFieldValue,
    dirty,
    isSubmitting,
  } = useFormik({
    initialValues: {
      jobPositionId: "",
      cityId: "",
      numberOfOpenPosition: "",
      minSalary: "",
      maxSalary: "",
      workTypeId: "",
      workTimeId: "",
      deadline: "",
      jobDescription: "",
    },
    validationSchema: Yup.object({
      jobPositionId: Yup.number().required("Bir pozisyon seçiniz!"),
      cityId: Yup.string().required("Bir şehir seçiniz!"),
      numberOfOpenPosition: Yup.number().required(
        "Açık pozisyon sayısı giriniz!"
      ),
      minSalary: Yup.number().required("Minimum maaş skalası giriniz!"),
      maxSalary: Yup.number().required("Maksimum maaş skalası giriniz!"),
      workTypeId: Yup.string().required("Bir çalışma türü seçiniz!"),
      workTimeId: Yup.string().required("Bir çalışma zamanı seçiniz!"),
      deadline: Yup.date().required("Bitiş tarihini giriniz!"),
      jobDescription: Yup.string().required("Açıklama giriniz!"),
    }),
    onSubmit: (values) => {
      values.employerId = 10;
      console.log(values);
      jobPostingService
        .add(values)
        .then(
          (result) => console.log(result.data.data),
          toast.warning("İLAN ONAY BEKLİYOR")
        );
    },
  });

  const jobPositonOptions = jobPositions.map((jobPosition) => ({
    key: jobPosition.jobPositionId,
    text: jobPosition.positionName,
    value: jobPosition.jobPositionId,
  }));

  const cityOptions = cities.map((city) => ({
    key: city.cityId,
    text: city.name,
    value: city.cityId,
  }));

  const workTypeOptions = workTypes.map((workType) => ({
    key: workType.workTypeId,
    text: workType.workType,
    value: workType.workTypeId,
  }));

  const workTimeOptions = workTimes.map((workTime) => ({
    key: workTime.workTimeId,
    text: workTime.workTime,
    value: workTime.workTimeId,
  }));

  return (
    <div className="form">
      <Header as="h2" inverted color="red" textAlign="center">
        <Header.Content>
          <Image src={logo} size="tiny" />
        </Header.Content>
        <Header.Content>İŞ İLANI YAYINLAMA</Header.Content>
      </Header>

      <Segment color="red">
        <Form onSubmit={handleSubmit}>
          <Form.Group widths="equal">
            <Form.Select
              id="jobPositionId"
              onChange={(fieldName, data) =>
                setFieldValue("jobPositionId", data.value)
              }
              onBlur={onBlur}
              value={values.jobPositionId}
              options={jobPositonOptions}
              label="Pozisyon"
              placeholder="Pozisyon Seçiniz"
              search
              selection
              error={
                errors.obPositionId &&
                touched.jobPositionId &&
                errors.jobPositionId
              }
            ></Form.Select>
            <Form.Select
              id="cityId"
              onChange={(fieldName, data) =>
                setFieldValue("cityId", data.value)
              }
              onBlur={onBlur}
              value={values.cityId}
              options={cityOptions}
              label="Şehir"
              placeholder="Şehir Seçiniz"
              search
              selection
            ></Form.Select>
          </Form.Group>
          <Form.Group widths="equal">
            <Form.Input
              id="numberOfOpenPosition"
              type="number"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.numberOfOpenPosition}
              fluid
              label="Açık Pozisyon Sayısı"
              placeholder="Açık Pozisyon Sayısı"
              error={
                errors.numberOfOpenPosition &&
                touched.numberOfOpenPosition &&
                errors.numberOfOpenPosition
              }
            ></Form.Input>
          </Form.Group>
          <Form.Group widths="equal">
            <Form.Input
              id="minSalary"
              type="number"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.minSalary}
              fluid
              label="Minimum Maaş Skalası"
              placeholder="Minimum Maaş Skalası"
              error={errors.minSalary && touched.minSalary && errors.minSalary}
            ></Form.Input>
            <Form.Input
              id="maxSalary"
              type="number"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.maxSalary}
              fluid
              label="Maksimum Maaş Skalası"
              placeholder="Maksimum Maaş Skalası"
              error={errors.maxSalary && touched.maxSalary && errors.maxSalary}
            ></Form.Input>
          </Form.Group>
          <Form.Group widths="equal">
            <Form.Select
              id="workTypeId"
              onChange={(fieldName, data) =>
                setFieldValue("workTypeId", data.value)
              }
              onBlur={onBlur}
              value={values.workTypeId}
              options={workTypeOptions}
              label="Çalışma Türü"
              placeholder="Çalışma Türü Seçiniz"
              search
              selection
              error={
                errors.workTypeId && touched.workTypeId && errors.workTypeId
              }
            ></Form.Select>
            <Form.Select
              id="workTimeId"
              onChange={(fieldName, data) =>
                setFieldValue("workTimeId", data.value)
              }
              onBlur={onBlur}
              value={values.workTimeId}
              options={workTimeOptions}
              label="Çalışma Zamanı"
              placeholder="Çalışma Zamanı Seçiniz"
              search
              selection
              error={
                errors.workTimeId && touched.workTimeId && errors.workTimeId
              }
            ></Form.Select>
          </Form.Group>
          <Form.Group widths="equal">
            <Form.Input
              id="deadline"
              type="date"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.deadline}
              fluid
              label="Son Başvuru Tarihi"
              error={errors.deadline && touched.deadline && errors.deadline}
            ></Form.Input>
          </Form.Group>
          <Form.Group widths="equal">
            <Form.TextArea
              id="jobDescription"
              type="text"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.jobDescription}
              fluid
              label="Açıklama"
              placeholder="Açıklama Yazınız..."
              error={
                errors.jobDescription &&
                touched.jobDescription &&
                errors.jobDescription
              }
            ></Form.TextArea>
          </Form.Group>
          <Button
            handleReset={handleReset}
            type="submit"
            disabled={!dirty || isSubmitting}
            primary
          >
            YAYINLA
          </Button>
        </Form>
      </Segment>
    </div>
  );
}
