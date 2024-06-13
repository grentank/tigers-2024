import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Grid } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { getOneChairThunk } from '../../redux/slices/chairs/chairThunks';

export default function OneChairPage(): JSX.Element {
  const { chairId } = useParams();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (Number.isNaN(Number(chairId))) return;
    const controller = dispatch(getOneChairThunk(Number(chairId)));
    return () => controller.abort();
  }, []);

  const currentChair = useAppSelector((store) => store.chair.currentChair);

  if (!currentChair) return <h1>Loading...</h1>;

  return (
    <Container>
      <Grid container justifyContent="center">
        <Grid item xs={12}>
          <h1>{currentChair.name}</h1>
        </Grid>
        <Grid item xs={12}>
          <img src={currentChair.image} alt={currentChair.name} />
        </Grid>
      </Grid>
    </Container>
  );
}
