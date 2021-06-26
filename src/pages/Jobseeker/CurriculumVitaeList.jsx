import React, { useState, useEffect } from "react";
import { NavLink, useParams } from "react-router-dom";
import CurriculumVitaeService from "../../services/curriculumVitaeService";
import { Card, Header, Icon, Image, Segment, Button } from "semantic-ui-react";

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
            <Button
              as={NavLink}
              to={`/jobseeker/${3}/curriculumvitae/add`}
              floated="right"
              color="green"
            >
              YENİ OLUŞTUR
            </Button>
          </Header.Content>
        </Header>
        <Card.Group>
          {curriculumVitaes.map((curriculumVitae) => (
            <Card
              as={NavLink}
              to={`/jobseeker/${3}/curriculumvitae/${
                curriculumVitae.curriculumVitaeId
              }`}
              color="green"
              fluid
            >
              <Card.Content>
                {!curriculumVitae.jobseeker.image ? (
                  <Image
                    circular
                    floated="left"
                    size="tiny"
                    src="https://aday-spage.mncdn.com/Knet_img_bag-with-gray-bg.832c700.svg?v=p0611211353224"
                  ></Image>
                ) : (
                  <Image
                    circular
                    floated="left"
                    size="tiny"
                    src={curriculumVitae.jobseeker.image.imageUrl}
                  ></Image>
                )}

                <Card.Header>
                  <Icon name="pen square" />
                  Düzenlemek İçin Tıklayın
                </Card.Header>
                <Card.Description></Card.Description>
              </Card.Content>
            </Card>
          ))}
        </Card.Group>
      </Segment>
    </div>
  );
}
