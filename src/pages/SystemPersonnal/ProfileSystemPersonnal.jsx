import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import SystemPersonnalService from "../../services/systemPersonnalService";
import { Table, Icon, Image, Grid, Segment } from "semantic-ui-react";
import UpdateSystemPersonnalModal from "../../modals/SystemPersonnal/update/UpdateSystemPersonnalModal";

export default function ProfileSystemPersonnal() {
  let { userId } = useParams();
  const [systemPersonnals, setSystemPersonnals] = useState([]);

  useEffect(() => {
    let systemPersonnalService = new SystemPersonnalService();
    systemPersonnalService
      .getByUserId(userId)
      .then((result) => setSystemPersonnals([result.data.data]));
  });
  return (
    <div className="card">
      {systemPersonnals.map((systemPersonnal) => (
        <div>
          <Segment color="green" textAlign="center">
            PROFİL BİLGİLERİ
          </Segment>
          <Grid divided>
            <Grid.Row>
              <Grid.Column width={6}>
                {!systemPersonnal.image ? (
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
                    src={systemPersonnal.image.imageUrl}
                  ></Image>
                )}
              </Grid.Column>
              <Grid.Column width={10}>
                <Table color="green" celled striped>
                  <Table.Header>
                    <Table.Row>
                      <Table.HeaderCell colSpan="2">
                        KİŞİSEL BİLGİLER
                        <UpdateSystemPersonnalModal
                          userId={systemPersonnal.userId}
                          firstName={systemPersonnal.firstName}
                          lastName={systemPersonnal.lastName}
                          email={systemPersonnal.email}
                        ></UpdateSystemPersonnalModal>
                      </Table.HeaderCell>
                    </Table.Row>
                  </Table.Header>
                  <Table.Body>
                    <Table.Row>
                      <Table.Cell>Ad</Table.Cell>
                      <Table.Cell>{systemPersonnal.firstName}</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                      <Table.Cell>Soyad</Table.Cell>
                      <Table.Cell>{systemPersonnal.lastName}</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                      <Table.Cell collapsing>E-posta Adresi</Table.Cell>
                      <Table.Cell>{systemPersonnal.email}</Table.Cell>
                    </Table.Row>
                  </Table.Body>
                </Table>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </div>
      ))}
    </div>
  );
}
