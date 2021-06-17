import React, { useState, useEffect } from "react";
import JobPostingService from "../services/jobPostingService";
import { Card, Header,Icon } from "semantic-ui-react";
import BusinessIcon from "@material-ui/icons/Business";
import WorkIcon from "@material-ui/icons/Work";
import { NavLink } from "react-router-dom";

export default function JobPostingList() {
  const [jobPostings, setJobPostings] = useState([]);

  useEffect(() => {
    let jobPostingService = new JobPostingService();
    jobPostingService
      .getByConfirmAndActiveTrue()
      .then((result) => setJobPostings(result.data.data));
  }, []);

  return (
    <div>
      <Header className="app" as="h2" icon textAlign="center">
        <WorkIcon></WorkIcon>
        <Header.Content>İŞ İLANLARI</Header.Content>
      </Header>
      <Card.Group>
        {jobPostings.map((jobPosting) => (
          <Card
            fluid
            as={NavLink}
            to={`/jobpostings/${jobPosting.jobPostingId}`}
          >
            <Card.Content>
              <BusinessIcon></BusinessIcon>
              <Card.Header>{jobPosting.jobPosition.positionName}</Card.Header>
              <Card.Meta>{jobPosting.employer.companyName}</Card.Meta>
              <Card.Description>
                <Icon name="map marker alternate" />
                {jobPosting.city.name}
              </Card.Description>
            </Card.Content>
          </Card>
        ))}
      </Card.Group>
    </div>
  );
}
