import React from "react";
import { Grid, Segment, Menu } from "semantic-ui-react";
import { Route } from "react-router";
import CurriculumVitaeList from "../pages/Jobseeker/CurriculumVitaeList";
import JobseekerMenu from "./JobseekerMenu";
import Settings from "../pages/Settings";
import Profile from "../pages/Profile";
import { NavLink, Router, useRouteMatch } from "react-router-dom";
import { Switch } from "react-router-dom";

export default function JobseekerDashboard() {

  let { path, url } = useRouteMatch();

  return (
    <div>
      <Grid>
        <Grid.Row>
          <Grid.Column width={4}>
            <Menu pointing vertical>
                <Menu.Item
                  name="Profil"
                />
                <Menu.Item
                  name="Özgeçmişler"
                />
                <Menu.Item
                  name="Ayarlar"
                />
            </Menu>
          </Grid.Column>
          <Grid.Column width={12}>
            <Segment color="green">
              <Switch>
                
              </Switch>
            </Segment>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}
