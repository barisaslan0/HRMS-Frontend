import React from "react";
import { Grid, Button } from "semantic-ui-react";
import JobPostingList from "../pages/JobPostingList";
import Cities from "./Cities";
import JobPositions from "./JobPositions";
import WorkTypes from "./WorkTypes";
import WorkTimes from "./WorkTimes";

export default function Dashboard() {
  return (
    <div>
      <Grid divided>
        <Grid.Row>
          <Grid.Column width={4}>
            <JobPositions></JobPositions>
            <Cities></Cities>
            <WorkTypes></WorkTypes>
            <WorkTimes></WorkTimes>
            <Button primary style={{ marginTop: "15pt" }}>
              UYGULA
            </Button>
          </Grid.Column>
          <Grid.Column width={12}>
            <JobPostingList></JobPostingList>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}
