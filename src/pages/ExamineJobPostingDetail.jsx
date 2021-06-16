import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import JobPostingService from "../services/jobPostingService";
import { Button, Card, Header, Icon } from "semantic-ui-react";
import BusinessIcon from "@material-ui/icons/Business";
import DetailsIcon from "@material-ui/icons/Details";
import WorkIcon from "@material-ui/icons/Work";
import LocationCityIcon from "@material-ui/icons/LocationCity";

export default function JobPostingDetail() {
  let jobPostingService = new JobPostingService();

  let { jobPostingId } = useParams();

  const [jobPostings, setJobPostings] = useState([]);

  useEffect(() => {
    let jobPostingService = new JobPostingService();
    jobPostingService
      .getByJobPostingId(jobPostingId)
      .then((result) => setJobPostings([result.data.data]));
  }, []);

  const confirm = (jobPostingId) => {
    jobPostingService.confirmJobPosting(jobPostingId).then(function () {
      window.location.reload();
    });
  };

  return (
    <div className="card">
      <Header as="h2" icon textAlign="center">
        <DetailsIcon></DetailsIcon>
        <Header.Content>İŞ İLANI DETAYI</Header.Content>
      </Header>
      {jobPostings.map((jobPosting) => (
        <Card fluid>
          <Card.Content>
            <Card.Header>
              <BusinessIcon></BusinessIcon> Şirket:{" "}
              {jobPosting.employer.companyName}
            </Card.Header>
            <Card.Header>
              <WorkIcon></WorkIcon> Pozisyon:{" "}
              {jobPosting.jobPosition.positionName}
            </Card.Header>
            <Card.Header>
              <LocationCityIcon></LocationCityIcon> Şehir:{" "}
              {jobPosting.city.name}
            </Card.Header>
            <Card.Description>
              {jobPosting.numberOfOpenPosition}
            </Card.Description>
            <Card.Meta>{jobPosting.employer.companyName}</Card.Meta>
            <Card.Meta>{jobPosting.city.name}</Card.Meta>
          </Card.Content>
          <Card.Content extra>
            <Button
              onClick={(e) => confirm(jobPosting.jobPostingId)}
              floated="right"
              inverted
              color="green"
            >
              ONAYLA
            </Button>
          </Card.Content>
        </Card>
      ))}
    </div>
  );
}
