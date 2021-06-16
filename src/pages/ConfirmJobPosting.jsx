import React from "react";
import { useState, useEffect } from "react";
import { Button, Card } from "semantic-ui-react";
import JobPostingService from "../services/jobPostingService";

export default function ConfirmJobPosting() {
  let jobPostingService = new JobPostingService();

  const [jobPostings, setJobPostings] = useState([]);

  useEffect(() => {
    let jobPostingService = new JobPostingService();
    jobPostingService
      .getJobPostingsConfirmFalse()
      .then((result) => setJobPostings(result.data.data));
  }, []);

  const confirm = (jobPostingId) => {
    jobPostingService.confirmJobPosting(jobPostingId).then(function () {
      window.location.reload();
    });
  };

  return (
    <div>
      <Card.Group>
        {jobPostings.map((jobPosting) => (
          <Card fluid>
            <Card.Content>
              <Card.Header>{jobPosting.employer.companyName}</Card.Header>
              <Card.Meta>Friends of Elliot</Card.Meta>
              <Card.Description>
                Steve wants to add you to the group{" "}
                <strong>best friends</strong>
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <div className="ui two buttons">
                <Button
                  onClick={(e) => confirm(jobPosting.jobPostingId)}
                  basic
                  color="green"
                >
                  Onayla
                </Button>
                <Button basic color="red">
                  Reddet
                </Button>
              </div>
            </Card.Content>
          </Card>
        ))}
      </Card.Group>
    </div>
  );
}
