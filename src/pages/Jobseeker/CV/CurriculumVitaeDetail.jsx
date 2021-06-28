import React from "react";
import CurriculumVitaeService from "../../../services/curriculumVitaeService";
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
import { useState, useEffect } from "react";
import { useParams } from "react-router";
import AddAccountModal from "../../../modals/CV/add/AddAccountModal";
import UpdateAccountModal from "../../../modals/CV/update/UpdateAccountModal";
import DeleteAccountModal from "../../../modals/CV/delete/DeleteAccountModal";
import AddCoverLetterModal from "../../../modals/CV/add/AddCoverLetterModal";
import UpdateCoverLetterModal from "../../../modals/CV/update/UpdateCoverLetterModal";
import DeleteCoverLetterModal from "../../../modals/CV/delete/DeleteCoverLetterModal";
import AddWorkExperienceModal from "../../../modals/CV/add/AddWorkExperienceModal";
import UpdateWorkExperienceModal from "../../../modals/CV/update/UpdateWorkExperienceModal";
import DeleteWokrExperienceModal from "../../../modals/CV/delete/DeleteWokrExperienceModal";
import AddEducationModal from "../../../modals/CV/add/AddEducationModal";
import UpdateEducationModal from "../../../modals/CV/update/UpdateEducationModal";
import DeleteEducationModal from "../../../modals/CV/delete/DeleteEducationModal";
import AddForeignLanguageModal from "../../../modals/CV/add/AddForeignLanguageModal";
import UpdateForeignLanguageModal from "../../../modals/CV/update/UpdateForeignLanguageModal";
import DeleteForeignLanguageModal from "../../../modals/CV/delete/DeleteForeignLanguageModal";
import AddTechnologyModal from "../../../modals/CV/add/AddTechnologyModal";
import UpdateTechnologyModal from "../../../modals/CV/update/UpdateTechnologyModal";
import DeleteTechnologyModal from "../../../modals/CV/delete/DeleteTechnologyModal";
import DeleteCurriculumVitaeModal from "../../../modals/CV/delete/DeleteCurriculumVitaeModal";

export default function CurriculumVitaeDetail() {
  let { curriculumVitaeId } = useParams();
  const [curriculumVitaes, setCurriculumVitaes] = useState([]);

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
            <DeleteCurriculumVitaeModal
              curriculumVitaeId={curriculumVitae.curriculumVitaeId}
            ></DeleteCurriculumVitaeModal>
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
                    size="medium"
                    src={curriculumVitae.jobseeker.image.imageUrl}
                  ></Image>
                )}
              </Grid.Column>
              <Grid.Column width={10}>
                <Table color="green" celled striped>
                  <Table.Header>
                    <Table.Row>
                      <Table.HeaderCell colSpan="2">
                        İLETİŞİM BİLGİLERİ
                      </Table.HeaderCell>
                    </Table.Row>
                  </Table.Header>
                  <Table.Body>
                    <Table.Row>
                      <Table.Cell>Ad</Table.Cell>
                      <Table.Cell>
                        {curriculumVitae.jobseeker.firstname}
                      </Table.Cell>
                    </Table.Row>
                    <Table.Row>
                      <Table.Cell>Soyad</Table.Cell>
                      <Table.Cell>
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
                  </Table.Body>
                </Table>
              </Grid.Column>
            </Grid.Row>
          </Grid>
          {!curriculumVitae.account ? (
            <Table color="green" celled striped>
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell colSpan="2">
                    HESAPLAR
                    <AddAccountModal
                      curriculumVitaeId={curriculumVitae.curriculumVitaeId}
                    ></AddAccountModal>
                  </Table.HeaderCell>
                </Table.Row>
              </Table.Header>
            </Table>
          ) : (
            <Table color="green" celled striped>
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell colSpan="2">
                    <Grid>
                      <Grid.Row>
                        <Grid.Column width={12}>HESAPLAR</Grid.Column>
                        <Grid.Column width={2}>
                          <UpdateAccountModal
                            accountId={curriculumVitae.account.accountId}
                            linkedinAccount={
                              curriculumVitae.account.linkedinAccount
                            }
                            githubAccount={
                              curriculumVitae.account.githubAccount
                            }
                          ></UpdateAccountModal>
                        </Grid.Column>
                        <Grid.Column width={2}>
                          <DeleteAccountModal
                            accountId={curriculumVitae.account.accountId}
                          ></DeleteAccountModal>
                        </Grid.Column>
                      </Grid.Row>
                    </Grid>
                  </Table.HeaderCell>
                </Table.Row>
              </Table.Header>
              <Table.Body>
                <Table.Row>
                  <Table.Cell collapsing>
                    <Icon name="linkedin" />
                    LinkedIn Hesabı
                  </Table.Cell>
                  <Table.Cell>
                    <a
                      target="_blank"
                      href={curriculumVitae.account.linkedinAccount}
                    >
                      {curriculumVitae.account.linkedinAccount}
                    </a>
                  </Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>
                    <Icon name="github" />
                    GitHub Hesabı
                  </Table.Cell>
                  <Table.Cell>
                    <a
                      target="_blank"
                      href={curriculumVitae.account.githubAccount}
                    >
                      {curriculumVitae.account.githubAccount}
                    </a>
                  </Table.Cell>
                </Table.Row>
              </Table.Body>
            </Table>
          )}

          {!curriculumVitae.coverLetter ? (
            <Table color="blue">
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell colSpan="4">
                    ÖN YAZI
                    <AddCoverLetterModal
                      curriculumVitaeId={curriculumVitae.curriculumVitaeId}
                    ></AddCoverLetterModal>
                  </Table.HeaderCell>
                </Table.Row>
              </Table.Header>
            </Table>
          ) : (
            <Table color="blue">
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell colSpan="4">
                    <Grid>
                      <Grid.Row>
                        <Grid.Column width={12}>ÖN YAZI</Grid.Column>
                        <Grid.Column width={2}>
                          <UpdateCoverLetterModal
                            coverLetterId={
                              curriculumVitae.coverLetter.coverLetterId
                            }
                            coverLetter={
                              curriculumVitae.coverLetter.coverLetter
                            }
                          ></UpdateCoverLetterModal>
                        </Grid.Column>
                        <Grid.Column width={2}>
                          <DeleteCoverLetterModal
                            coverLetterId={
                              curriculumVitae.coverLetter.coverLetterId
                            }
                          ></DeleteCoverLetterModal>
                        </Grid.Column>
                      </Grid.Row>
                    </Grid>
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
            İŞ DENEYİMLERİ
            <AddWorkExperienceModal
              curriculumVitaeId={curriculumVitae.curriculumVitaeId}
            ></AddWorkExperienceModal>
            {curriculumVitae.workExperiences.map((workExperience) => (
              <Grid>
                <Grid.Row>
                  <Grid.Column width={14}>
                    <Table
                      style={{ marginTop: "10pt" }}
                      color="yellow"
                      celled
                      striped
                    >
                      <Table.Body>
                        <Table.Row>
                          <Table.Cell collapsing>Çalışma Yeri</Table.Cell>
                          <Table.Cell colSpan="3">
                            {workExperience.workplaceName}
                          </Table.Cell>
                        </Table.Row>
                        <Table.Row>
                          <Table.Cell collapsing>Pozisyon</Table.Cell>
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
                  </Grid.Column>
                  <Grid.Column width={2}>
                    <UpdateWorkExperienceModal
                      workExperienceId={workExperience.workExperienceId}
                      workplaceName={workExperience.workplaceName}
                      jobPositionId={workExperience.jobPositionId}
                      startDateOfWork={workExperience.startDateOfWork}
                      endDateOfWork={workExperience.endDateOfWork}
                    ></UpdateWorkExperienceModal>
                    <DeleteWokrExperienceModal
                      workExperienceId={workExperience.workExperienceId}
                    ></DeleteWokrExperienceModal>
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            ))}
          </Segment>
          <Segment color="blue">
            EĞİTİM BİLGİLERİ
            <AddEducationModal
              curriculumVitaeId={curriculumVitae.curriculumVitaeId}
            ></AddEducationModal>
            {curriculumVitae.educations.map((education) => (
              <Grid>
                <Grid.Row>
                  <Grid.Column width={14}>
                    <Table
                      style={{ marginTop: "10pt" }}
                      color="blue"
                      celled
                      striped
                    >
                      <Table.Body>
                        <Table.Row>
                          <Table.Cell collapsing>Okul</Table.Cell>
                          <Table.Cell colSpan="3">
                            {education.schoolName}
                          </Table.Cell>
                        </Table.Row>
                        <Table.Row>
                          <Table.Cell collapsing>Bölüm</Table.Cell>
                          <Table.Cell colSpan="3">
                            {education.department}
                          </Table.Cell>
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
                  </Grid.Column>
                  <Grid.Column width={2}>
                    <UpdateEducationModal
                      educationId={education.educationId}
                      schoolName={education.schoolName}
                      department={education.department}
                      startDateOfSchool={education.startDateOfSchool}
                      endDateOfSchool={education.endDateOfSchool}
                    ></UpdateEducationModal>
                    <DeleteEducationModal
                      educationId={education.educationId}
                    ></DeleteEducationModal>
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            ))}
          </Segment>
          <Segment color="red">
            YABANCI DİL
            <AddForeignLanguageModal
              curriculumVitaeId={curriculumVitae.curriculumVitaeId}
            ></AddForeignLanguageModal>
            {curriculumVitae.foreignLanguages.map((foreignLanguage) => (
              <Grid>
                <Grid.Row>
                  <Grid.Column width={14}>
                    <Table
                      style={{ marginTop: "10pt" }}
                      color="blue"
                      celled
                      striped
                    >
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
                  </Grid.Column>
                  <Grid.Column width={2}>
                    <UpdateForeignLanguageModal
                      foreignLanguageId={foreignLanguage.foreignLanguageId}
                      language={foreignLanguage.language}
                      level={foreignLanguage.level}
                    ></UpdateForeignLanguageModal>
                    <DeleteForeignLanguageModal
                      foreignLanguageId={foreignLanguage.foreignLanguageId}
                    ></DeleteForeignLanguageModal>
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            ))}
          </Segment>
          <Segment color="violet">
            YETENEKLER
            <AddTechnologyModal
              curriculumVitaeId={curriculumVitae.curriculumVitaeId}
            ></AddTechnologyModal>
            {curriculumVitae.technologies.map((technology) => (
              <Grid>
                <Grid.Row>
                  <Grid.Column width={12}>
                    <Message style={{ marginTop: "10pt" }} color="green">
                      {technology.technologyName}
                    </Message>
                  </Grid.Column>
                  <Grid.Column width={2}>
                    <UpdateTechnologyModal
                      technologyId={technology.technologyId}
                      technologyName={technology.technologyName}
                    ></UpdateTechnologyModal>
                  </Grid.Column>
                  <Grid.Column width={2}>
                    <DeleteTechnologyModal
                      technologyId={technology.technologyId}
                    ></DeleteTechnologyModal>
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            ))}
          </Segment>
        </div>
      ))}
    </div>
  );
}
