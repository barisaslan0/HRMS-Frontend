import React, { useState, useEffect } from "react";
import JobPostingService from "../services/jobPostingService";
import {
  Card,
  Header,
  Message,
  Icon,
  Image,
  Grid,
  Pagination,
  Select,
} from "semantic-ui-react";
import { NavLink } from "react-router-dom";
import AddFavorite from "./Jobseeker/Favorite/AddFavorite";

export default function JobPostingList() {
  const [pageNo, setPageNo] = useState(1);
  const [pageSize, setPageSize] = useState(3);
  const [totalPages, setTotalPages] = useState(0);

  const handleChangePageNo = (event, { activePage }) => {
    setPageNo(activePage);
  };

  const handleChangePageSize = (event, { value }) => {
    setPageSize(value);
  };

  const pageSizeOptions = [
    { key: 2, value: 10, text: "10 İLAN" },
    { key: 3, value: 20, text: "20 İLAN" },
    { key: 5, value: 50, text: "50 İLAN" },
    { key: 5, value: 100, text: "100 İLAN" },
  ];

  const [jobPostings, setJobPostings] = useState([]);
  useEffect(() => {
    let jobPostingService = new JobPostingService();
    jobPostingService
      .getByConfirmAndActiveTrue(pageNo, pageSize)
      .then((result) => {
        setJobPostings(result.data.data);
        setTotalPages(parseInt(result.data.message));
      });
  }, [pageNo, pageSize]);

  return (
    <div>
      <Message size="large">
        İŞ İLANLARI
        Bir Saydaki İlan Sayısı{" "}
        <Select
          onChange={handleChangePageSize}
          placeholder="Seçiniz"
          options={pageSizeOptions}
        />
      </Message>
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
                  style={{ marginLeft: "10pt" }}
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
                <AddFavorite
                  jobseekerId={3}
                  jobPostingId={jobPosting.jobPostingId}
                ></AddFavorite>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        ))}
      </Card.Group>
      <Pagination
        style={{ marginTop: "25pt" }}
        firstItem={null}
        lastItem={null}
        activePage={pageNo}
        onPageChange={handleChangePageNo}
        totalPages={totalPages}
      />
    </div>
  );
}
