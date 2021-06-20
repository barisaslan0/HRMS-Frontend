import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import WorkTimeService from "../services/workTimeService";
import { Dropdown } from "semantic-ui-react";

export default function WorkTimes() {
  const [workTimes, setWorkTimes] = useState([]);

  useEffect(() => {
    let workTimeService = new WorkTimeService();
    workTimeService
      .getWorkTimes()
      .then((result) => setWorkTimes(result.data.data));
  });

  const workTimeOptions = workTimes.map((workTime) => ({
    key: workTime.workTimeId,
    text: workTime.workTime,
    value: workTime.workTime,
  }));

  return (
    <div style={{ marginTop: "15pt" }}>
      <label>Çalışma Zamanı</label>
      <Dropdown
        placeholder="Çalışma Zamanı Seçin"
        fluid
        multiple
        search
        selection
        options={workTimeOptions}
      ></Dropdown>
    </div>
  );
}
