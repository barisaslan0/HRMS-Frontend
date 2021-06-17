import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import JobPostingService from "../services/jobPostingService";
import { Table, Header, Button } from "semantic-ui-react";
import BusinessIcon from "@material-ui/icons/Business";
import DetailsIcon from "@material-ui/icons/Details";
import WorkIcon from "@material-ui/icons/Work";
import LocationCityIcon from "@material-ui/icons/LocationCity";

export default function JobPostingDetail() {
  let { jobPostingId } = useParams();

  const [jobPostings, setJobPostings] = useState([]);

  useEffect(() => {
    let jobPostingService = new JobPostingService();
    jobPostingService
      .getByJobPostingId(jobPostingId)
      .then((result) => setJobPostings([result.data.data]));
  }, []);

  return (
    <div className="card">
      <Header as="h2" icon textAlign="center">
        <Header.Content>İŞ İLANI DETAYI</Header.Content>
        <DetailsIcon></DetailsIcon>
      </Header>
      {jobPostings.map((jobPosting) => (
        <Table color="yellow" celled striped>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell colSpan="3">DETAYLAR</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            <Table.Row>
              <Table.Cell collapsing>
                <BusinessIcon /> Şirket
              </Table.Cell>
              <Table.Cell>{jobPosting.employer.companyName}</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>
                <WorkIcon /> Pozisyon
              </Table.Cell>
              <Table.Cell>{jobPosting.jobPosition.positionName}</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>
                <LocationCityIcon /> Şehir
              </Table.Cell>
              <Table.Cell>{jobPosting.city.name}</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Açık Pozisyon Sayısı</Table.Cell>
              <Table.Cell>{jobPosting.numberOfOpenPosition}</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Minimum Maaş Skalası</Table.Cell>
              <Table.Cell>{jobPosting.minSalary} TL</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Maksimum Maaş Skalası</Table.Cell>
              <Table.Cell>{jobPosting.maxSalary} TL</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Çalışma Türü</Table.Cell>
              <Table.Cell>{jobPosting.workType.workType}</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Çalışma Zamanı</Table.Cell>
              <Table.Cell>{jobPosting.workTime.workTime}</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Son Başvuru Tarihi</Table.Cell>
              <Table.Cell>{jobPosting.deadline}</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Açıklama</Table.Cell>
              <Table.Cell>{jobPosting.jobDescription}</Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
      ))}
      <Button floated="right" inverted color="green">
        BAŞVUR
      </Button>
    </div>
  );
}
