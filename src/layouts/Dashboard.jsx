import React from "react";
import { Grid, Button } from "semantic-ui-react";
import JobPostingList from "../pages/JobPostingList";
import Cities from "./Cities";
import JobPositions from "./JobPositions";

export default function Dashboard() {
  return (
    <div>
      <Grid divided>
        <Grid.Row>
          <Grid.Column width={4}>
            <JobPositions></JobPositions>
            <Cities></Cities>
            <Button primary>UYGULA</Button>
          </Grid.Column>
          <Grid.Column width={12}>
            <JobPostingList></JobPostingList>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}
