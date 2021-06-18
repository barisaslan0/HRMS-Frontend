import React from "react";
import { Button, Container, Dropdown, Menu, Image } from "semantic-ui-react";
import { NavLink } from "react-router-dom";
import logo from "../images/logo.png";

export default function Navi() {
  return (
    <div>
      <Menu color="red" inverted fixed="top" size="large">
        <Container className="app">
          <Menu.Item>
            <Image
              src={logo}
              size="tiny"
            />
          </Menu.Item>
          <Menu.Item as={NavLink} to="/home">
            Ana Sayfa
          </Menu.Item>
          <Menu.Item as={NavLink} to="/jobpostings">
            İş İlanları
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
              <Dropdown item text="İŞVEREN" style={{ marginRight: "0.5em" }}>
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
