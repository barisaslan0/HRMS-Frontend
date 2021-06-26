import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import JobPostingService from "../services/jobPostingService";
import { Table, Button, Icon, Image,Segment } from "semantic-ui-react";

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
      {jobPostings.map((jobPosting) => (
        <div>
          <Segment color="green" textAlign="center">
            İLAN DETAYI
          </Segment>
          <Table color="red" celled striped>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell colSpan="2">
                  {!jobPosting.employer.image ? (
                    <Image
                      circular
                      floated="left"
                      size="mini"
                      src="https://aday-spage.mncdn.com/Knet_img_bag-with-gray-bg.832c700.svg?v=p0611211353224"
                    ></Image>
                  ) : (
                    <Image
                      circular
                      floated="left"
                      size="mini"
                      src={jobPosting.employer.image.imageUrl}
                    ></Image>
                  )}{" "}
                  ŞİRKET
                  <br />
                  BİLGİLERİ
                </Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              <Table.Row>
                <Table.Cell>
                  <Icon name="warehouse" /> Şirket
                </Table.Cell>
                <Table.Cell>{jobPosting.employer.companyName}</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>
                  <Icon name="world" />
                  Web Sitesi
                </Table.Cell>
                <Table.Cell>
                  <a
                    target="_blank"
                    href={"https://" + jobPosting.employer.webSite}
                  >
                    {jobPosting.employer.webSite}
                  </a>
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell collapsing>
                  <Icon name="phone" />
                  Telefon Numarası
                </Table.Cell>
                <Table.Cell>{jobPosting.employer.phoneNumber}</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>
                  <Icon name="map marker alternate" />
                  Şehir
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
                <Table.Cell collapsing>Açık Pozisyon Sayısı</Table.Cell>
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
                <Table.Cell positive>{jobPosting.minSalary} TL</Table.Cell>
                <Table.Cell>Maksimum Maaş Skalası</Table.Cell>
                <Table.Cell positive>{jobPosting.maxSalary} TL</Table.Cell>
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
                <Table.Cell negative>{jobPosting.deadline}</Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
        </div>
      ))}
      <Button style={{ marginTop: "5pt" }} floated="right" color="green">
        BAŞVUR
      </Button>
    </div>
  );
}
