import React from "react";
import { Grid } from "semantic-ui-react";
import JobPostingList from "../pages/JobPostingList";
import Cities from "./Cities";
import JobPositions from "./JobPositions";

export default function Dashboard() {
  return (
    <div>
      <Grid>
        <Grid.Row>
          <Grid.Column stretched={5} width={4}>
            <Cities></Cities>
            <JobPositions></JobPositions>
          </Grid.Column>
          <Grid.Column width={12}>
            <JobPostingList></JobPostingList>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}
