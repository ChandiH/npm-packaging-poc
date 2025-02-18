import React from 'react';
import { Typography, Grid } from '@material-ui/core';
import {
  InfoCard,
} from '@backstage/core-components';

export const CounterComponent = () => {
  const [state, setState] = React.useState(0);

  const increment = () => setState(state + 1);

  return (
    <Grid container spacing={3} direction="column">
      <Grid item>
        <InfoCard title="Information card">
          <Typography variant="body1">
            This is a sample component that uses React hooks.
          </Typography>
        </InfoCard>
      </Grid>
      <Grid item>
        <InfoCard title="Counter">
          <Typography variant="h3">{state}</Typography>
          <button onClick={increment}>Increment</button>
        </InfoCard>
      </Grid>
    </Grid>
  )
}