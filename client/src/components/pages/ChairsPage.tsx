import { Grid } from '@mui/material';
import React from 'react';
import AddChairForm from '../ui/AddChairForm';
import { useAppSelector } from '../../redux/hooks';
import ChairCard from '../ui/ChairCard';

export default function ChairsPage(): JSX.Element {
  const chairs = useAppSelector((store) => store.chair.chairs);
  return (
    <Grid container>
      <Grid item xs={12}>
        <AddChairForm />
      </Grid>
      <Grid item xs={12}>
        <Grid container>
          {chairs.map((chair) => (
            <Grid item xs={4} key={chair.id}>
              <ChairCard chair={chair} key={chair.id} />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
}
