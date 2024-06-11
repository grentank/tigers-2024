import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button, Grid } from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { addNewChairThunk } from '../../redux/slices/chairs/chairThunks';
import type { NewChairForm } from '../../types/chair';

export default function AddChairForm(): JSX.Element {
  const isLoading = useAppSelector((store) => store.chair.isLoading);
  const dispatch = useAppDispatch();
  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
      onSubmit={(e) => {
        e.preventDefault();
        const formData = Object.fromEntries(
          new FormData(e.currentTarget),
        ) as NewChairForm;
        void dispatch(addNewChairThunk(formData)).then(() => {
          if (e.target instanceof HTMLFormElement) e.target.reset();
        });
      }}
    >
      <div>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              name="name"
              label="Название стула"
              placeholder="Название стула"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              name="description"
              label="Описание стула"
              placeholder="Описание стула"
              multiline
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              name="dimensions"
              label="Размеры"
              placeholder="Размеры"
              variant="standard"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              name="image"
              label="Картинка"
              placeholder="Картинка"
              variant="standard"
            />
          </Grid>
          <Grid item xs={12}>
            <LoadingButton loading={isLoading} type="submit" variant="outlined">
              Добавить стул
            </LoadingButton>
          </Grid>
        </Grid>
      </div>
    </Box>
  );
}
