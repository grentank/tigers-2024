import { Container, Grid } from '@mui/material';
import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from './ui/NavBar';

export default function Layout(): JSX.Element {
  return (
    <Container>
      <Grid container>
        <Grid item xs={12}>
          <NavBar />
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xs={12}>
          <Outlet />
        </Grid>
      </Grid>
    </Container>
  );
}
