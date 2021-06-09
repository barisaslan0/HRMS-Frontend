import React, { useState, useEffect } from "react";
import JobPostingService from "../services/jobPostingService";
import { Header, Table } from "semantic-ui-react";
import WorkIcon from "@material-ui/icons/Work";

export default function JobPostingList() {
  const [jobPostings, setJobPostings] = useState([]);

  useEffect(() => {
    let jobPostingService = new JobPostingService();
    jobPostingService
      .getJobPostings()
      .then((result) => setJobPostings(result.data.data));
  }, []);

  return (
    <div>
      <Header textAlign="left">
        <WorkIcon></WorkIcon>
        <Header.Content>İŞ İLANLARI</Header.Content>
      </Header>
      <Table color="blue" inverted>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Pozisyon</Table.HeaderCell>
            <Table.HeaderCell>Şirket</Table.HeaderCell>
            <Table.HeaderCell>Şehir</Table.HeaderCell>
            <Table.HeaderCell>Açık Poszisyon Sayısı</Table.HeaderCell>
            <Table.HeaderCell>Bitiş Tarihi</Table.HeaderCell>
            <Table.HeaderCell>Açıklama</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {jobPostings.map((jobPosting) => (
            <Table.Row key={jobPosting.id}>
              <Table.Cell>{jobPosting.positionName}</Table.Cell>
              <Table.Cell>{jobPosting.companyName}</Table.Cell>
              <Table.Cell>{jobPosting.cityName}</Table.Cell>
              <Table.Cell>{jobPosting.numberOfOpenPosition}</Table.Cell>
              <Table.Cell>{jobPosting.deadline}</Table.Cell>
              <Table.Cell>{jobPosting.jobDescription}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
}
