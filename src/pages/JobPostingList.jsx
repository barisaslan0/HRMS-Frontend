import React, { useState, useEffect } from "react";
import JobPostingService from "../services/jobPostingService";
import {
  Card,
  Message,
  Rating,
  Icon,
  Image,
  Grid,
  Pagination,
  Select,
  Menu,
  Button,
  Dropdown,
  Container,
  Segment,
} from "semantic-ui-react";
import { NavLink } from "react-router-dom";
import AddFavorite from "./Jobseeker/Favorite/AddFavorite";
import FilterJobPostings from "../layouts/FilterJobPostings";

export default function JobPostingList() {
  const [jobPostingFilters, setJobPostingFilters] = useState({});
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

  const sortOptions = [
    { key: 2, value: 10, text: "10 İLAN" },
    { key: 3, value: 20, text: "20 İLAN" },
  ];

  const [jobPostings, setJobPostings] = useState([]);
  useEffect(() => {
    let jobPostingService = new JobPostingService();
    jobPostingService
      .getByFilter(jobPostingFilters, pageNo, pageSize)
      .then((result) => {
        setJobPostings(result.data.data);
        setTotalPages(parseInt(result.data.message));
      });
  }, [jobPostingFilters, pageNo, pageSize]);

  const handleFilter = (jobPostingFilters) => {
    if (jobPostingFilters.jobPositionIds.length === 0) {
      jobPostingFilters.jobPositionIds = null;
    }
    if (jobPostingFilters.cityIds.length === 0) {
      jobPostingFilters.cityIds = null;
    }
    if (jobPostingFilters.workTypeIds.length === 0) {
      jobPostingFilters.workTypeIds = null;
    }
    if (jobPostingFilters.workTimeIds.length === 0) {
      jobPostingFilters.workTimeIds = null;
    }

    setJobPostingFilters(jobPostingFilters);
    setPageNo(1);
  };
  return (
    <div>
      <Menu className="fixedMenu" size="small">
        <Container className="app">
          <Menu.Item>İŞ İLANLARI</Menu.Item>
          <Menu.Menu position="right">
            <Menu.Item>
              Bir Sayfadaki İlan Sayısı{" "}
              <Select
                placeholder="Seçiniz"
                onChange={handleChangePageSize}
                options={pageSizeOptions}
              ></Select>
            </Menu.Item>
          </Menu.Menu>
        </Container>
      </Menu>
      <Container>
        <Grid divided>
          <Grid.Row>
            <Grid.Column width={4}>
              <div className="filters">
                <FilterJobPostings
                  jobPostingFilters={handleFilter}
                ></FilterJobPostings>
              </div>
            </Grid.Column>
            <Grid.Column width={12}>
              <Card.Group style={{ marginTop: "115pt" }}>
                {jobPostings.map((jobPosting) => (
                  <Card color="yellow" fluid style={{ marginLeft: "10pt" }}>
                    <Card.Header textAlign="right">
                      Favorilere Ekle
                      <AddFavorite
                        jobseekerId={3}
                        jobPostingId={jobPosting.jobPostingId}
                      ></AddFavorite>
                    </Card.Header>
                    <Card.Content
                      as={NavLink}
                      to={`/jobpostings/${jobPosting.jobPostingId}`}
                    >
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
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </div>
  );
}
