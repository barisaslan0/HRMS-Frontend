import React from "react";
import { useState, useEffect } from "react";
import { Button, Card, Header ,Icon} from "semantic-ui-react";
import JobPostingService from "../services/jobPostingService";
import HourglassFullRoundedIcon from "@material-ui/icons/HourglassFullRounded";
import { NavLink } from "react-router-dom";
import { toast } from "react-toastify";
import BusinessIcon from "@material-ui/icons/Business";

export default function ConfirmJobPosting() {
  let jobPostingService = new JobPostingService();

  const [jobPostings, setJobPostings] = useState([]);

  useEffect(() => {
    let jobPostingService = new JobPostingService();
    jobPostingService
      .getByConfirmFalse()
      .then((result) => setJobPostings(result.data.data));
  }, []);

  const confirm = (jobPostingId) => {
    jobPostingService
      .confirm(jobPostingId)
      .then(toast.success("İLAN ONAYLANDI"),window.location.reload());
  };

  return (
    <div>
      <Header as="h2" icon textAlign="center">
        <HourglassFullRoundedIcon></HourglassFullRoundedIcon>
        <Header.Content>ONAY BEKLEYEN İŞ İLANLARI</Header.Content>
      </Header>
      <Card.Group>
        {jobPostings.map((jobPosting) => (
          <Card fluid>
            <Card.Content>
              <BusinessIcon></BusinessIcon>
              <Card.Header>{jobPosting.jobPosition.positionName}</Card.Header>
              <Card.Meta>{jobPosting.employer.companyName}</Card.Meta>
              <Card.Description>
                <Icon name="map marker alternate" />
                {jobPosting.city.name}
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <div className="ui two buttons">
                <Button
                  onClick={() => confirm(jobPosting.jobPostingId)}
                  inverted
                  color="green"
                >
                  ONAYLA
                </Button>
                <Button
                  as={NavLink}
                  to={`/examinejobposting/${jobPosting.jobPostingId}`}
                  inverted
                  color="blue"
                >
                  İNCELE
                </Button>
              </div>
            </Card.Content>
          </Card>
        ))}
      </Card.Group>
    </div>
  );
}
