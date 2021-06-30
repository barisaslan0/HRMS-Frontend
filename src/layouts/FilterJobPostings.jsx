import React, { useEffect, useState } from "react";
import { Dropdown, Button } from "semantic-ui-react";
import CityService from "../services/cityService";
import JobPositionService from "../services/jobPositionService";
import WorkTimeService from "../services/workTimeService";
import WorkTypeService from "../services/workTypeService";

export default function FilterJobPostings({ jobPostingFilters }) {
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

  const [jobPositionIds, setJobPositionIds] = useState([]);
  const handleChangeJobPositionIds = (event, { value }) => {
    setJobPositionIds(value);
  };

  const [cityIds, setCityIds] = useState([]);
  const handleChangeCityIds = (event, { value }) => {
    setCityIds(value);
  };
  const [workTypeIds, setWorkTypeIds] = useState([]);
  const handleChangeWorkTypeIds = (event, { value }) => {
    setWorkTypeIds(value);
  };
  const [workTimeIds, setWorkTimeIds] = useState([]);
  const handleChangeWorkTimeIds = (event, { value }) => {
    setWorkTimeIds(value);
  };
  return (
    <div>
      <label>Pozisyon</label>
      <Dropdown
        placeholder="Pozisyon Seç"
        fluid
        multiple
        search
        selection
        options={jobPositonOptions}
        value={jobPositionIds}
        onChange={handleChangeJobPositionIds}
      />

      <div style={{ marginTop: "15pt" }}>
        <label>Şehir</label>
        <Dropdown
          placeholder="Şehir Seç"
          fluid
          multiple
          search
          selection
          options={cityOptions}
          value={cityIds}
          onChange={handleChangeCityIds}
        ></Dropdown>
      </div>

      <div style={{ marginTop: "15pt" }}>
        <label>Çalışma Türü</label>
        <Dropdown
          placeholder="Çalışma Türü Seçin"
          fluid
          multiple
          search
          selection
          options={workTypeOptions}
          value={workTypeIds}
          onChange={handleChangeWorkTypeIds}
        ></Dropdown>
      </div>

      <div style={{ marginTop: "15pt" }}>
        <label>Çalışma Zamanı</label>
        <Dropdown
          placeholder="Çalışma Zamanı Seçin"
          fluid
          multiple
          search
          selection
          options={workTimeOptions}
          value={workTimeIds}
          onChange={handleChangeWorkTimeIds}
        ></Dropdown>
      </div>
      <Button
        type="button"
        onClick={() =>
          jobPostingFilters({
            jobPositionIds: jobPositionIds,
            cityIds: cityIds,
            workTypeIds: workTypeIds,
            workTimeIds: workTimeIds,
          })
        }
        fluid
        primary
        style={{ marginTop: "15pt" }}
      >
        FİLTRELE
      </Button>
    </div>
  );
}
