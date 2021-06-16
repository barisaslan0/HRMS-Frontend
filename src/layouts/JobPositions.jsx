import React, { useState, useEffect } from "react";
import JobPositionService from "../services/jobPositionService";
import { Dropdown,Header,Button} from "semantic-ui-react";

export default function JobPositions() {
    const [jobPositions, setJobPositions] = useState([]);

    useEffect(() => {
        let jobPositionService = new JobPositionService();
        jobPositionService.getJobPositions().then((result)=>setJobPositions(result.data.data))
      }, []);

      const jobPositonOptions=jobPositions.map((jobPosition)=>({
        key:jobPosition.jobPositionId,
        text:jobPosition.positionName,
        value:jobPosition.positionName
      }))

    return (
        <div>
            <Header textAlign="left">Pozisyon</Header>
            <Dropdown placeholder="Pozisyon Seç" fluid multiple search selection options={jobPositonOptions} />
            <Button primary>UYGULA</Button>
        </div>
    )
}
