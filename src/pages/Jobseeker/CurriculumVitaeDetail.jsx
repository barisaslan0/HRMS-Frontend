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
import AddEducation from "./AddEducation";
import AddForeignLanguage from "./AddForeignLanguage";
import AddTechnology from "./AddTechnology";
import UpdateCoverLetter from "./UpdateCoverLetter";
import AddCoverLetter from "./AddCoverLetter";
import UpdateWorkExperience from "./UpdateWorkExperience";

export default function CurriculumVitaeDetail() {
  let { curriculumVitaeId } = useParams();
  const [curriculumVitaes, setCurriculumVitaes] = useState([]);

  const [openWorkExperience, setOpenWorkExperience] = useState(false);
  const [openEducation, setOpenEducation] = useState(false);
  const [openLanguage, setOpenLanguage] = useState(false);
  const [openTechnology, setOpenTechnology] = useState(false);
  const [openAddCoverLetter, setOpenAddCoverLetter] = useState(false);
  const [openUpdateCoverLetter, setOpenUpdateCoverLetter] = useState(false);
  const [openUpdateWorkExperience, setOpenUpdateWorkExperience] = useState(false);

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
            ÖZGEÇMİŞ
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

          {!curriculumVitae.coverLetter ? (
            <Table color="blue">
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell colSpan="4">
                    <Icon name="paperclip" />
                    ÖN YAZI
                    <Modal
                      closeIcon
                      onClose={() => setOpenAddCoverLetter(false)}
                      onOpen={() => setOpenAddCoverLetter(true)}
                      open={openAddCoverLetter}
                      trigger={
                        <Button
                          style={{ marginBottom: "5pt" }}
                          floated="right"
                          color="green"
                        >
                          Ön Yazı Ekle
                        </Button>
                      }
                    >
                      <Modal.Header>Ön Yazı Ekleme</Modal.Header>
                      <Modal.Content>
                        <Modal.Description>
                          <AddCoverLetter
                            curriculumVitaeId={
                              curriculumVitae.curriculumVitaeId
                            }
                          ></AddCoverLetter>
                        </Modal.Description>
                      </Modal.Content>
                    </Modal>
                  </Table.HeaderCell>
                </Table.Row>
              </Table.Header>
            </Table>
          ) : (
            <Table color="blue">
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell colSpan="4">
                    <Icon name="paperclip" />
                    ÖN YAZI
                    <Modal
                      closeIcon
                      onClose={() => setOpenUpdateCoverLetter(false)}
                      onOpen={() => setOpenUpdateCoverLetter(true)}
                      open={openUpdateCoverLetter}
                      trigger={
                        <Button floated="right" size="tiny" icon>
                          <Icon name="pencil" />
                        </Button>
                      }
                    >
                      <Modal.Header>Önyazı Güncelleme</Modal.Header>
                      <Modal.Content>
                        <Modal.Description>
                          <UpdateCoverLetter
                            coverLetterId={
                              curriculumVitae.coverLetter.coverLetterId
                            }
                            coverLetter={
                              curriculumVitae.coverLetter.coverLetter
                            }
                          ></UpdateCoverLetter>
                        </Modal.Description>
                      </Modal.Content>
                    </Modal>
                  </Table.HeaderCell>
                </Table.Row>
              </Table.Header>
              <Table.Body>
                <Table.Row>
                  <Table.Cell>
                    {curriculumVitae.coverLetter.coverLetter}
                  </Table.Cell>
                </Table.Row>
              </Table.Body>
            </Table>
          )}

          <Segment color="yellow">
            İŞ DENEYİMLERİ{" "}
            <Modal
              closeIcon
              onClose={() => setOpenWorkExperience(false)}
              onOpen={() => setOpenWorkExperience(true)}
              open={openWorkExperience}
              trigger={
                <Button style={{ marginLeft: "335pt" }} color="green">
                  İş Deneyimi Ekle
                </Button>
              }
            >
              <Modal.Header>İş Deneyimi Ekleme</Modal.Header>
              <Modal.Content>
                <Modal.Description>
                  <AddWorkExperience
                    curriculumVitaeId={curriculumVitae.curriculumVitaeId}
                  ></AddWorkExperience>
                </Modal.Description>
              </Modal.Content>
            </Modal>
            {curriculumVitae.workExperiences.map((workExperience) => (
              <Table color="yellow" celled striped>
                <Table.Body>
                  <Table.Row>
                    <Table.Cell collapsing>
                      <Icon name="warehouse" />
                      Çalışma Yeri
                    </Table.Cell>
                    <Table.Cell colSpan="3">
                      {workExperience.workplaceName}
                      <Modal
                        closeIcon
                        onClose={() => setOpenUpdateWorkExperience(false)}
                        onOpen={() => setOpenUpdateWorkExperience(true)}
                        open={openUpdateWorkExperience}
                        trigger={
                          <Button floated="right" size="tiny" icon>
                            <Icon name="pencil" />
                          </Button>
                        }
                      >
                        <Modal.Header>İş Deneyimi Güncelleme</Modal.Header>
                        <Modal.Content>
                          <Modal.Description>
                            <UpdateWorkExperience
                              workExperienceId={
                                workExperience.workExperienceId
                              }
                              workplaceName={
                                workExperience.workplaceName
                              }
                              jobPositionId={
                                workExperience.jobPosition.jobPositionId
                              }
                              startDateOfWork={
                                workExperience.startDateOfWork
                              }
                              endDateOfWork={
                                workExperience.endDateOfWork
                              }
                            ></UpdateWorkExperience>
                          </Modal.Description>
                        </Modal.Content>
                      </Modal>
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
            <Modal
              closeIcon
              onClose={() => setOpenEducation(false)}
              onOpen={() => setOpenEducation(true)}
              open={openEducation}
              trigger={
                <Button style={{ marginLeft: "325pt" }} color="green">
                  Eğitim Bilgisi Ekle
                </Button>
              }
            >
              <Modal.Header>Eğitim Bilgisi Ekleme</Modal.Header>
              <Modal.Content>
                <Modal.Description>
                  <AddEducation
                    curriculumVitaeId={curriculumVitae.curriculumVitaeId}
                  ></AddEducation>
                </Modal.Description>
              </Modal.Content>
            </Modal>
            {curriculumVitae.educations.map((education) => (
              <Table color="blue" celled striped>
                <Table.Body>
                  <Table.Row>
                    <Table.Cell collapsing>
                      <Icon name="warehouse" />
                      Okul
                    </Table.Cell>
                    <Table.Cell colSpan="3">
                      {education.schoolName}{" "}
                      <Button floated="right" size="tiny" icon>
                        <Icon name="pencil" />
                      </Button>
                    </Table.Cell>
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
          <Segment color="red">
            YABANCI DİL{" "}
            <Modal
              closeIcon
              onClose={() => setOpenLanguage(false)}
              onOpen={() => setOpenLanguage(true)}
              open={openLanguage}
              trigger={
                <Button style={{ marginLeft: "355pt" }} color="green">
                  Yabancı Dil Ekle
                </Button>
              }
            >
              <Modal.Header>Yabancı Dil Ekleme</Modal.Header>
              <Modal.Content>
                <Modal.Description>
                  <AddForeignLanguage
                    curriculumVitaeId={curriculumVitae.curriculumVitaeId}
                  ></AddForeignLanguage>
                </Modal.Description>
              </Modal.Content>
            </Modal>
            {curriculumVitae.foreignLanguages.map((foreignLanguage) => (
              <Table color="blue" celled striped>
                <Table.Body>
                  <Table.Row>
                    <Table.Cell collapsing>
                      <Icon name="flag" />
                      Dil
                    </Table.Cell>
                    <Table.Cell colSpan="3">
                      {foreignLanguage.language}{" "}
                      <Button floated="right" size="tiny" icon>
                        <Icon name="pencil" />
                      </Button>
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
          <Segment color="violet">
            YETENEKLER{" "}
            <Modal
              closeIcon
              onClose={() => setOpenTechnology(false)}
              onOpen={() => setOpenTechnology(true)}
              open={openTechnology}
              trigger={
                <Button style={{ marginLeft: "370pt" }} color="green">
                  Yetenek Ekle
                </Button>
              }
            >
              <Modal.Header>Yetenek Ekleme</Modal.Header>
              <Modal.Content>
                <Modal.Description>
                  <AddTechnology
                    curriculumVitaeId={curriculumVitae.curriculumVitaeId}
                  ></AddTechnology>
                </Modal.Description>
              </Modal.Content>
            </Modal>
            {curriculumVitae.technologies.map((technology) => (
              <Message style={{ marginTop: "15pt" }} color="green">
                {technology.technologyName}{" "}
                <Button style={{ marginLeft: "460pt" }} size="tiny" icon>
                  <Icon name="pencil" />
                </Button>
              </Message>
            ))}
          </Segment>
        </div>
      ))}
    </div>
  );
}
