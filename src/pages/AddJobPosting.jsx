import React from "react";
import { useState, useEffect } from "react";
import JobPositionService from "../services/jobPositionService";
import CityService from "../services/cityService";
import WorkTypeService from "../services/workTypeService";
import WorkTimeService from "../services/workTimeService";
import { useFormik } from "formik";
import * as Yup from "yup";
import JobPostingService from "../services/jobPostingService";
import { Form ,Button} from "semantic-ui-react";

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
      jobDescription: ""
    },
    validationSchema: Yup.object({
      jobPositionId: Yup.number().required("Bir pozisyon seçiniz!"),
      cityId: Yup.number().required("Bir şehir seçiniz!"),
      numberOfOpenPosition: Yup.number().required(
        "Açık pozisyon sayısı girin!"
      ),
      minSalary: Yup.number().required("Minimum maaş skalası giriniz!"),
      maxSalary: Yup.number().required("Maksimum maaş skalası giriniz!"),
      workTypeId: Yup.number().required("Bir çalışma türü seçiniz!"),
      workTimeId: Yup.number().required("Bir çalışma zamanı seçiniz!"),
      deadline: Yup.date().required("Bitiş tarihini giriniz!"),
      jobDescription: Yup.string().required("Açıklama giriniz!"),
    }),
    onSubmit: (values) => {
      values.employerId = 10;
      jobPostingService
        .AddJobPosting(values)
        .then((result) => console.log(result.data.data));
    }
  });

  const jobPositonOptions = jobPositions.map((jobPosition) => ({
    key: jobPosition.jobPositionId,
    text: jobPosition.positionName,
    value: jobPosition.jobPositionId,
  }));

  const cityOptions = cities.map((city) => ({
    key: city.cityId,
    text: city.name,
    value: city.cityId
  }));

  const workTypeOptions = workTypes.map((workType) => ({
    key: workType.workTypeId,
    text: workType.workType,
    value: workType.workTypeId
  }));

  const workTimeOptions = workTimes.map((workTime) => ({
    key: workTime.workTimeId,
    text: workTime.workTime,
    value: workTime.workTimeId
  }));

  return (
    <div className="form">
      <Form onSubmit={handleSubmit}>
        <Form.Group widths="equal">
          <Form.Select
            id="jobPositionId"
            onChange={() => setFieldValue("jobPositionId")}
            onBlur={onBlur}
            value={values.jobPositionId}
            options={jobPositonOptions}
            label="Pozisyon"
            placeholder="Pozisyon Seçiniz"
            search
          ></Form.Select>

          <Form.Select
            id="cityId"
            onChange={() => setFieldValue("cityId")}
            onBlur={onBlur}
            value={values.cityId}
            options={cityOptions}
            label="Şehir"
            placeholder="Şehir Seçiniz"
            search
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
          ></Form.Input>
        </Form.Group>
        <Form.Group widths="equal">
          <Form.Input
            id="minSalary"
            type="number"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.minSalar}
            fluid
            label="Minimum Maaş Skalası"
            placeholder="Minimum Maaş Skalası"
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
          ></Form.Input>
        </Form.Group>
        <Form.Group widths="equal">
          <Form.Select
            id="workTypeId"
            onChange={() => setFieldValue("workTypeId")}
            onBlur={onBlur}
            value={values.workTypeId}
            options={workTypeOptions}
            label="Çalışma Türü"
            placeholder="Çalışma Türü Seçiniz"
            search
          ></Form.Select>
          <Form.Select
            id="workTimeId"
            onChange={() => setFieldValue("workTimeId")}
            onBlur={onBlur}
            value={values.workTimeId}
            options={workTimeOptions}
            label="Çalışma Zamanı"
            placeholder="Çalışma Zamanı Seçiniz"
            search
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
            label="Bitiş Tarihi"
            placeholder="Tarih Seçin"
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
          ></Form.TextArea>
        </Form.Group>

        <Button type="submit" type="button" disabled={!dirty || isSubmitting} primary>YAYINLA</Button>
      </Form>
    </div>
  );
}
