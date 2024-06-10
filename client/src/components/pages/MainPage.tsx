import { Container, Grid } from '@mui/material';
import React from 'react';
import ChairCard from '../ui/ChairCard';
import { useChairsContext } from '../../contexts/chairContext';

export default function MainPage(): JSX.Element {
  const { chairs } = useChairsContext();
  return (
    <Container>
      <Grid container>
        {chairs.map((chair) => (
          <Grid item xs={4} key={chair.id}>
            <ChairCard chair={chair} key={chair.id} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
