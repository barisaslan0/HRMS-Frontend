import React from "react";
import { NavLink } from "react-router-dom";
import {
  Container,
  Dropdown,
  Menu,
  Image,
  Icon,
  Divider,
} from "semantic-ui-react";
import logo from "../images/logo.png";

export default function SignedInJobseeker({ signOutJobseeker }) {
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
          <Menu.Item as={NavLink} to={`/jobseeker/${3}/curriculumvitaes`}>
            Özgeçmişler
          </Menu.Item>
          <Menu.Menu position="right">
            <Menu.Item>
              <Image
                src={
                  "https://yt3.ggpht.com/DTHNfg3dNsf85L_9BgIPpQ6JgI8xq516Em7Hmocm_dR9_msRsxotMvEfzx62BuUteBUZTGy8Xg=s108-c-k-c0x00ffffff-no-rj"
                }
                size="mini"
                circular
              ></Image>
              <Dropdown
                item
                text="BARIŞ ASLAN"
                style={{ marginRight: "0.5em" }}
              >
                <Dropdown.Menu>
                  <Dropdown.Item as={NavLink} to={`/jobseeker/${3}/profile`}>
                    <Icon name="user" /> Profil
                  </Dropdown.Item>
                  <Dropdown.Item
                    as={NavLink}
                    to={`/jobseeker/${3}/curriculumvitaes`}
                  >
                    <Icon name="file alternate" /> Özgeçmişler
                  </Dropdown.Item>
                  <Dropdown.Item
                    as={NavLink}
                    to={`/jobseeker/${3}/favorites`}
                  >
                    <Icon color="red" name="heart" /> Favoriler
                  </Dropdown.Item>
                  <Dropdown.Item as={NavLink} to={`/jobseeker/${3}/settings`}>
                    <Icon name="setting" /> Ayarlar
                  </Dropdown.Item>
                  <Divider />
                  <Dropdown.Item onClick={signOutJobseeker}>
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
