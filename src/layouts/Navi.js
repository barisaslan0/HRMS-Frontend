import React from "react";
import { Button, Container, Dropdown, Menu, Header } from "semantic-ui-react";
import AssessmentIcon from '@material-ui/icons/Assessment';

export default function Navi() {
  return (
    <div>
      <Menu color="red" inverted fixed="top" size="huge">
        <Container>
          <Menu.Item><AssessmentIcon></AssessmentIcon></Menu.Item>
          <Menu.Item>HRMS</Menu.Item>
          <Menu.Item>Ana Sayfa</Menu.Item>

          <Menu.Menu position="right">
            <Menu.Item>
              <Button inverted color="black">
                KAYIT OL
              </Button>
            </Menu.Item>
            <Menu.Item>
              <Button inverted color="black">
                GİRİŞ YAP
              </Button>
            </Menu.Item>
            <Dropdown item text="İŞVEREN">
              <Dropdown.Menu inverted color="black">
                <Dropdown.Item>KAYIT OL</Dropdown.Item>
                <Dropdown.Item>GİRİŞ YAP</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Menu.Menu>
        </Container>
      </Menu>
    </div>
  );
}
