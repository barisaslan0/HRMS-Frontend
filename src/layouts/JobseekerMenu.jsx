import React from "react";
import { NavLink } from "react-router-dom";
import { Menu } from "semantic-ui-react";

export default function JobseekerMenu() {
  return (
    <div>
      <Menu pointing vertical>
        <Menu.Item as={NavLink} to={`/jobseeker/${3}/profile`} name="Profil" />
        <Menu.Item
          as={NavLink}
          to={`/jobseeker/${3}/curriculumvitaes`}
          name="Özgeçmişler"
        />
        <Menu.Item
          as={NavLink}
          to={`/jobseeker/${3}/settings`}
          name="Ayarlar"
        />
      </Menu>
    </div>
  );
}
