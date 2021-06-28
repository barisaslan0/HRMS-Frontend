import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import {
  Container,
  Dropdown,
  Menu,
  Image,
  Icon,
  Divider,
} from "semantic-ui-react";
import logo from "../images/logo.png";

export default function SignedInSystemPersonnal({ signOut }) {
  return (
    <div>
      <Menu color="red" inverted fixed="top" size="large">
        <Container className="app">
          <Menu.Item>
            <Image src={logo} size="tiny" />
          </Menu.Item>
          <Menu.Item as={NavLink} to="/jobpostings">
            İş İlanları
          </Menu.Item>
          <Menu.Item as={NavLink} to="/confirmjobposting">
            Bildirimler
          </Menu.Item>
          <Menu.Menu position="right">
            <Menu.Item>
              <Image
                src="https://www.uclg-planning.org/sites/default/files/styles/featured_home_left/public/no-user-image-square.jpg?itok=PANMBJF-"
                size="mini"
                circular
              ></Image>
              <Dropdown
                item
                text="BARIŞ ASLAN"
                style={{ marginRight: "0.5em" }}
              >
                <Dropdown.Menu>
                  <Dropdown.Item as={NavLink} to={`/systempersonnal/${14}/profile`}>
                    <Icon name="user" /> Profil
                  </Dropdown.Item>
                  <Dropdown.Item as={NavLink} to={`/jobseeker/${3}/settings`}>
                    <Icon name="setting" /> Ayarlar
                  </Dropdown.Item>
                  <Divider />
                  <Dropdown.Item onClick={signOut}>
                    <Icon color="red" name="log out" /> Çıkış
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Menu.Item>
          </Menu.Menu>
        </Container>
      </Menu>
    </div>
  );
}
