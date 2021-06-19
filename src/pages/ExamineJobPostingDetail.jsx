import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import JobPostingService from "../services/jobPostingService";
import { Button, Table, Header, Icon } from "semantic-ui-react";
import BusinessIcon from "@material-ui/icons/Business";
import DetailsIcon from "@material-ui/icons/Details";
import { toast } from "react-toastify";

export default function JobPostingDetail() {
  let jobPostingService = new JobPostingService();

  let { jobPostingId } = useParams();

  const [jobPostings, setJobPostings] = useState([]);

  const history = useHistory();

  useEffect(() => {
    let jobPostingService = new JobPostingService();
    jobPostingService
      .getByJobPostingIdAndConfirmFalse(jobPostingId)
      .then((result) => setJobPostings([result.data.data]));
  }, []);

  const confirm = (jobPostingId) => {
    jobPostingService
      .confirm(jobPostingId)
      .then(toast.success("İLAN ONAYLANDI"),history.push("/confirmjobposting"));
  };

  return (
    <div className="card">
      <Header as="h2" icon textAlign="center">
        <Header.Content>İŞ İLANI DETAYI</Header.Content>
        <DetailsIcon></DetailsIcon>
      </Header>
      {jobPostings.map((jobPosting) => (
        <div>
          <Table color="red" celled striped>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell colSpan="2">ŞİRKET</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              <Table.Row>
                <Table.Cell>
                  <BusinessIcon /> Şirket
                </Table.Cell>
                <Table.Cell>{jobPosting.employer.companyName}</Table.Cell>
              </Table.Row>

              <Table.Row>
                <Table.Cell collapsing>
                  <Icon name="map marker alternate" /> Şehir
                </Table.Cell>
                <Table.Cell>{jobPosting.city.name}</Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
          <Table color="yellow" celled striped>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell colSpan="2">
                  <Icon name="users" />
                  İŞ
                </Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              <Table.Row>
                <Table.Cell>Pozisyon</Table.Cell>
                <Table.Cell>{jobPosting.jobPosition.positionName}</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>Açık Pozisyon Sayısı</Table.Cell>
                <Table.Cell>{jobPosting.numberOfOpenPosition}</Table.Cell>
              </Table.Row>

              <Table.Row>
                <Table.Cell>Çalışma Türü</Table.Cell>
                <Table.Cell>{jobPosting.workType.workType}</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>Çalışma Zamanı</Table.Cell>
                <Table.Cell>{jobPosting.workTime.workTime}</Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
          <Table color="green" celled striped>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell colSpan="4">
                  <Icon name="money" />
                  MAAŞ
                </Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              <Table.Row>
                <Table.Cell>Minimum Maaş Skalası</Table.Cell>
                <Table.Cell>{jobPosting.minSalary} TL</Table.Cell>
                <Table.Cell>Maksimum Maaş Skalası</Table.Cell>
                <Table.Cell>{jobPosting.maxSalary} TL</Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
          <Table color="blue">
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell colSpan="4">
                  <Icon name="paperclip" />
                  AÇIKLAMA
                </Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              <Table.Row>
                <Table.Cell>{jobPosting.jobDescription}</Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
          <Table color="black">
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell colSpan="4">
                  <Icon name="time" />
                  Son Başvuru Tarihi
                </Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              <Table.Row>
                <Table.Cell>{jobPosting.deadline}</Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
          <Button
            onClick={() => confirm(jobPosting.jobPostingId)}
            style={{ marginTop: "5pt" }}
            floated="right"
            inverted
            color="green"
            size="medium"
          >
            ONAYLA
          </Button>
        </div>
      ))}
    </div>
  );
}
