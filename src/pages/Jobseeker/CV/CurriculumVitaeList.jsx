import React, { useState, useEffect } from "react";
import { NavLink, useParams } from "react-router-dom";
import CurriculumVitaeService from "../../../services/curriculumVitaeService";
import {
  Card,
  Header,
  Icon,
  Image,
  Segment,
  Button,
  Modal,
} from "semantic-ui-react";
import DeleteCurriculumVitaeModal from "../../../modals/CV/delete/DeleteCurriculumVitaeModal";
import AddCurriculumVitaeModal from "../../../modals/CV/add/AddCurriculumVitaeModal";
export default function CurriculumVitaeList() {
  let { jobseekerId } = useParams();

  const [curriculumVitaes, setCurriculumVitaes] = useState([]);
  
  useEffect(() => {
    let curriculumVitaeService = new CurriculumVitaeService();
    curriculumVitaeService
      .getByJobseekerId(jobseekerId)
      .then((result) => setCurriculumVitaes(result.data.data));
  }, []);

  return (
    <div>
      <Segment color="green">
        <Header className="app" as="h2" icon textAlign="left">
          <Header.Content>
            ÖZGEÇMİŞLER{" "}
            <AddCurriculumVitaeModal jobseekerId={3}></AddCurriculumVitaeModal>
          </Header.Content>
        </Header>
        <Card.Group>
          {curriculumVitaes.map((curriculumVitae) => (
            <Card color="green" fluid>
              <Card.Content>
                {!curriculumVitae.jobseeker.image ? (
                  <Image
                    circular
                    floated="left"
                    size="tiny"
                    src="https://www.insidesport.com/images/nophoto.png"
                  ></Image>
                ) : (
                  <Image
                    circular
                    floated="left"
                    size="tiny"
                    src={curriculumVitae.jobseeker.image.imageUrl}
                  ></Image>
                )}

                <Card.Header
                  as={NavLink}
                  to={`/jobseeker/${3}/curriculumvitae/${
                    curriculumVitae.curriculumVitaeId
                  }`}
                >
                  <Icon name="pen square" />
                  Düzenlemek İçin Tıklayın
                </Card.Header>
                <Card.Meta>
                  <DeleteCurriculumVitaeModal curriculumVitaeId={curriculumVitae.curriculumVitaeId}></DeleteCurriculumVitaeModal>
                </Card.Meta>
                <Card.Meta>Oluşturulma Tarihi: {curriculumVitae.createdDate}</Card.Meta>
              </Card.Content>
            </Card>
          ))}
        </Card.Group>
      </Segment>
    </div>
  );
}
