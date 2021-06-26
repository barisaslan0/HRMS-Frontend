import React from "react";
import { useState, useEffect } from "react";
import JobPositionService from "../services/jobPositionService";
import CityService from "../services/cityService";
import WorkTypeService from "../services/workTypeService";
import WorkTimeService from "../services/workTimeService";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import JobPostingService from "../services/jobPostingService";
import { Button, Segment, Header, Image, FormGroup } from "semantic-ui-react";
import { toast } from "react-toastify";
import logo from "../images/logo-kırmızı.png";
import HrmsDropdown from "../utilities/customFormControls/HrmsDropdown";
import HrmsInput from "../utilities/customFormControls/HrmsInput";
import HrmsTextAreaInput from "../utilities/customFormControls/HrmsTextAreaInput";

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

  const initialValues = {
    jobPositionId: "",
    cityId: "",
    numberOfOpenPosition: "",
    minSalary: "",
    maxSalary: "",
    workTypeId: "",
    workTimeId: "",
    deadline: "",
    jobDescription: "",
  };

  const validationSchema = Yup.object({
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
  });

  const onSubmit = (values) => {
    values.employerId = 10;
    console.log(values);
    jobPostingService
      .add(values)
      .then(
        (result) => console.log(result.data.data),
        toast.warning("İLAN ONAY BEKLİYOR")
      );
  };

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
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {({ setFieldValue }) => (
          <Segment color="red">
            <Form className="ui form">
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
                <HrmsDropdown
                  onChange={(fieldName, data) =>
                    setFieldValue("cityId", data.value)
                  }
                  name="cityId"
                  label="Şehir"
                  placeholder="Şehir Seçiniz"
                  options={cityOptions}
                />
              </FormGroup>
              <FormGroup widths="equal">
                <HrmsInput
                  name="numberOfOpenPosition"
                  type="number"
                  label="Açık Pozisyon Sayısı"
                  placeholder="Açık Pozisyon Sayısı"
                ></HrmsInput>
              </FormGroup>
              <FormGroup widths="equal">
                <HrmsInput
                  name="minSalary"
                  type="number"
                  label="Minimum Maaş Skalası"
                  placeholder="Minimum Maaş Skalası"
                ></HrmsInput>
                <HrmsInput
                  name="maxSalary"
                  type="number"
                  label="Maksimum Maaş Skalası"
                  placeholder="Maksimum Maaş Skalası"
                ></HrmsInput>
              </FormGroup>
              <FormGroup widths="equal">
                <HrmsDropdown
                  onChange={(fieldName, data) =>
                    setFieldValue("workTypeId", data.value)
                  }
                  name="workTypeId"
                  label="Çalışma Türü"
                  placeholder="Çalışma Türü Seçiniz"
                  options={workTypeOptions}
                />
                <HrmsDropdown
                  onChange={(fieldName, data) =>
                    setFieldValue("workTimeId", data.value)
                  }
                  name="workTimeId"
                  label="Çalışma Zamanı"
                  placeholder="Çalışma Zamanı Seçiniz"
                  options={workTimeOptions}
                />
              </FormGroup>
              <FormGroup widths="equal">
                <HrmsInput
                  name="deadline"
                  type="date"
                  label="Son Başvuru Tarihi"
                ></HrmsInput>
              </FormGroup>
              <FormGroup widths="equal">
                <HrmsTextAreaInput
                  name="jobDescription"
                  type="text"
                  label="Açıklama"
                  placeholder="Açıklama Yazınız..."
                ></HrmsTextAreaInput>
              </FormGroup>
              <Button type="submit" color="green">
                YAYINLA
              </Button>
            </Form>
          </Segment>
        )}
      </Formik>
    </div>
  );
}
