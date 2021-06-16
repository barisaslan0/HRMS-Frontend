import React from "react";
import { Button, Container, Dropdown, Menu} from "semantic-ui-react";
import AssessmentIcon from "@material-ui/icons/Assessment";
import { NavLink } from "react-router-dom";

export default function Navi() {
  return (
    <div>
      <Menu color="red" inverted fixed="top" size="large">
        <Container>
          <Menu.Item>
            <AssessmentIcon></AssessmentIcon>
          </Menu.Item>
          <Menu.Item>HRMS</Menu.Item>
          <Menu.Item as={NavLink} to="/home">
            Ana Sayfa
          </Menu.Item>
          <Menu.Item as={NavLink} to="/confirmjobposting">
            Bildirimler
          </Menu.Item>

          <Menu.Menu position="right">
            <Menu.Item>
              <Button inverted color="black" style={{ marginRight: "0.5em" }}>
                KAYIT OL
              </Button>
              <Button inverted color="black" style={{ marginRight: "0.5em" }}>
                GİRİŞ YAP
              </Button>
              <Dropdown item text='İŞVEREN' style={{ marginRight: "0.5em" }}>
                <Dropdown.Menu>
                  <Dropdown.Item>KAYIT OL</Dropdown.Item>
                  <Dropdown.Item>GİRİŞ YAP</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              <Button
                basic
                inverted
                color="teal"
                as={NavLink}
                to="/jobpostings/add"
              >
                İLAN YAYINLA
              </Button>
            </Menu.Item>
          </Menu.Menu>
        </Container>
      </Menu>
    </div>
  );
}
