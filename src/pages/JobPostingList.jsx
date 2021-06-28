import React, { useState, useEffect } from "react";
import JobPostingService from "../services/jobPostingService";
import { Card, Header, Icon, Image, Grid } from "semantic-ui-react";
import { NavLink } from "react-router-dom";
import AddFavorite from "./Jobseeker/Favorite/AddFavorite";
import DeleteFavorite from "./Jobseeker/Favorite/DeleteFavorite";

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
      <Header className="app" as="h2" icon textAlign="left">
        <Header.Content>İŞ İLANLARI</Header.Content>
      </Header>
      <Card.Group>
        {jobPostings.map((jobPosting) => (
          <Grid>
            <Grid.Row>
              <Grid.Column width={13}>
                <Card
                  as={NavLink}
                  to={`/jobpostings/${jobPosting.jobPostingId}`}
                  color="yellow"
                  fluid
                >
                  <Card.Content>
                    {!jobPosting.employer.image ? (
                      <Image
                        rounded
                        floated="left"
                        size="tiny"
                        src="https://aday-spage.mncdn.com/Knet_img_bag-with-gray-bg.832c700.svg?v=p0611211353224"
                      ></Image>
                    ) : (
                      <Image
                        rounded
                        floated="left"
                        size="tiny"
                        src={jobPosting.employer.image.imageUrl}
                      ></Image>
                    )}

                    <Card.Header>
                      {jobPosting.jobPosition.positionName}
                    </Card.Header>
                    <Card.Meta>{jobPosting.employer.companyName}</Card.Meta>
                    <Card.Meta>{jobPosting.workTime.workTime}</Card.Meta>
                    <Card.Description>
                      <Icon name="map marker alternate" />
                      {jobPosting.city.name}
                    </Card.Description>
                  </Card.Content>
                </Card>
              </Grid.Column>
              <Grid.Column width={3}>
                <AddFavorite jobseekerId={3} jobPostingId={jobPosting.jobPostingId}></AddFavorite>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        ))}
      </Card.Group>
    </div>
  );
}
