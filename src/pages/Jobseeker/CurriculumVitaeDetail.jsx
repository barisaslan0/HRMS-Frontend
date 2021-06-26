import React from "react";
import { NavLink, Route, useParams } from "react-router-dom";
import CurriculumVitaeService from "../../services/curriculumVitaeService";
import {
  Table,
  Button,
  Icon,
  Image,
  Segment,
  Grid,
  Rating,
  Message,
  Header,
  Modal,
} from "semantic-ui-react";
import { useEffect } from "react";
import { useState } from "react";
import AddWorkExperience from "./AddWorkExperience";

export default function CurriculumVitaeDetail() {
  let { curriculumVitaeId } = useParams();
  const [curriculumVitaes, setCurriculumVitaes] = useState([]);

  const [open, setOpen] = useState(false);

  useEffect(() => {
    let curriculumVitaeService = new CurriculumVitaeService();
    curriculumVitaeService
      .getByCurriculumVitaeId(curriculumVitaeId)
      .then((result) => setCurriculumVitaes([result.data.data]));
  }, []);
  return (
    <div className="card">
      {curriculumVitaes.map((curriculumVitae) => (
        <div>
          <Segment color="green" textAlign="center">
            ÖZGEÇMİŞ DETAYI
          </Segment>
          <Grid divided>
            <Grid.Row>
              <Grid.Column width={6}>
                {!curriculumVitae.jobseeker.image ? (
                  <Image
                    circular
                    floated="left"
                    size="huge"
                    src="https://www.insidesport.com/images/nophoto.png"
                  ></Image>
                ) : (
                  <Image
                    circular
                    floated="left"
                    size="huge"
                    src={curriculumVitae.jobseeker.image.imageUrl}
                  ></Image>
                )}
              </Grid.Column>
              <Grid.Column width={10}>
                <Table color="green" celled striped>
                  <Table.Header>
                    <Table.Row>
                      <Table.HeaderCell colSpan="2">
                        {" "}
                        İLETİŞİM
                        <br />
                        BİLGİLERİ
                      </Table.HeaderCell>
                    </Table.Row>
                  </Table.Header>
                  <Table.Body>
                    <Table.Row>
                      <Table.Cell>
                        {curriculumVitae.jobseeker.firstname}{" "}
                        {curriculumVitae.jobseeker.lastName}
                      </Table.Cell>
                    </Table.Row>
                    <Table.Row>
                      <Table.Cell collapsing>
                        <Icon name="mail" /> E-posta Adresi
                      </Table.Cell>
                      <Table.Cell>{curriculumVitae.jobseeker.email}</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                      <Table.Cell collapsing>
                        <Icon name="birthday" />
                        Doğum Tarihi
                      </Table.Cell>
                      <Table.Cell>
                        {curriculumVitae.jobseeker.birthDate}
                      </Table.Cell>
                    </Table.Row>
                    <Table.Row>
                      <Table.Cell collapsing>
                        <Icon name="linkedin" />
                        LinkedIn Adresi
                      </Table.Cell>
                      <Table.Cell>{curriculumVitae.linkedinAddress}</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                      <Table.Cell collapsing>
                        <Icon name="github" />
                        GitHub Adresi
                      </Table.Cell>
                      <Table.Cell>{curriculumVitae.githubAddress}</Table.Cell>
                    </Table.Row>
                  </Table.Body>
                </Table>
              </Grid.Column>
            </Grid.Row>
          </Grid>
          <Table color="blue">
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell colSpan="4">
                  <Icon name="paperclip" />
                  ÖN YAZI
                </Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              <Table.Row>
                <Table.Cell>{curriculumVitae.coverLetter}</Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
          <Segment color="blue">
            İŞ DENEYİMLERİ{" "}
            <Modal
              closeIcon
              onClose={() => setOpen(false)}
              onOpen={() => setOpen(true)}
              open={open}
              trigger={
                <Button
                  style={{ marginBottom: "5pt" }}
                  floated="right"
                  color="green"
                >
                  İş Deneyimi Ekle
                </Button>
              }
            >
              <Modal.Header>İş Deneyimi Ekleme</Modal.Header>
              <Modal.Content>
                <Modal.Description>
                  <AddWorkExperience curriculumVitaeId={curriculumVitae.curriculumVitaeId}></AddWorkExperience>
                </Modal.Description>
              </Modal.Content>
            </Modal>
            {curriculumVitae.workExperiences.map((workExperience) => (
              <Table color="blue" celled striped>
                <Table.Body>
                  <Table.Row>
                    <Table.Cell collapsing>
                      <Icon name="warehouse" />
                      Çalışma Yeri
                    </Table.Cell>
                    <Table.Cell colSpan="3">
                      {workExperience.workplaceName}
                    </Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell collapsing>
                      <Icon name="target" />
                      Pozisyon
                    </Table.Cell>
                    <Table.Cell colSpan="3">
                      {workExperience.jobPosition.positionName}
                    </Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell collapsing>Başlangıç Tarihi</Table.Cell>
                    <Table.Cell positive>
                      {workExperience.startDateOfWork}
                    </Table.Cell>
                    <Table.Cell collapsing>Bitiş Tarihi</Table.Cell>
                    <Table.Cell positive>
                      {workExperience.endDateOfWork}
                    </Table.Cell>
                  </Table.Row>
                </Table.Body>
              </Table>
            ))}
          </Segment>
          <Segment color="blue">
            EĞİTİM BİLGİLERİ{" "}
            <Button
              style={{ marginBottom: "5pt" }}
              floated="right"
              color="green"
            >
              Eğitim Bilgisi Ekle
            </Button>
            {curriculumVitae.educations.map((education) => (
              <Table color="blue" celled striped>
                <Table.Body>
                  <Table.Row>
                    <Table.Cell collapsing>
                      <Icon name="warehouse" />
                      Okul
                    </Table.Cell>
                    <Table.Cell colSpan="3">{education.schoolName}</Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell collapsing>
                      <Icon name="graduation" />
                      Bölüm
                    </Table.Cell>
                    <Table.Cell colSpan="3">{education.department}</Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell collapsing>Başlangıç Tarihi</Table.Cell>
                    <Table.Cell positive>
                      {education.startDateOfSchool}
                    </Table.Cell>
                    <Table.Cell collapsing>Bitiş Tarihi</Table.Cell>
                    <Table.Cell positive>
                      {education.endDateOfSchool}
                    </Table.Cell>
                  </Table.Row>
                </Table.Body>
              </Table>
            ))}
          </Segment>
          <Segment color="blue">
            YABANCI DİL{" "}
            <Button
              style={{ marginBottom: "5pt" }}
              floated="right"
              color="green"
            >
              Yabancı Dil Ekle
            </Button>
            {curriculumVitae.foreignLanguages.map((foreignLanguage) => (
              <Table color="blue" celled striped>
                <Table.Body>
                  <Table.Row>
                    <Table.Cell collapsing>
                      <Icon name="flag" />
                      Dil
                    </Table.Cell>
                    <Table.Cell colSpan="3">
                      {foreignLanguage.language}
                    </Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell collapsing>
                      <Icon name="level up" />
                      Seviye
                    </Table.Cell>
                    <Table.Cell>
                      <Rating
                        maxRating={5}
                        defaultRating={foreignLanguage.level}
                        icon="star"
                        size="massive"
                        disabled
                      />
                    </Table.Cell>
                  </Table.Row>
                </Table.Body>
              </Table>
            ))}
          </Segment>
          <Segment color="blue">
            YETENEKLER{" "}
            <Button
              style={{ marginBottom: "15pt" }}
              floated="right"
              color="green"
            >
              Yetenek Ekle
            </Button>
            {curriculumVitae.technologies.map((technology) => (
              <Message style={{ marginTop: "15pt" }} color="green">
                {technology.technologyName}
              </Message>
            ))}
          </Segment>
        </div>
      ))}
    </div>
  );
}
