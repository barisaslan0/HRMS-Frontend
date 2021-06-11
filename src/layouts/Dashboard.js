import React from "react";
import { Grid,Button } from "semantic-ui-react";
import JobPostingList from "../pages/JobPostingList";
import Cities from "./Cities";
import JobPositions from "./JobPositions";

export default function Dashboard() {
  return (
    <div>
      <Grid>
        <Grid.Row>
          <Grid.Column stretched width={4}>
            <Cities></Cities>
            <JobPositions></JobPositions>
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
