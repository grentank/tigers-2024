import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button, Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useChairsContext } from '../../contexts/chairContext';

export default function ChairsPage(): JSX.Element {
  const { addChairHandler } = useChairsContext();
  const navigate = useNavigate();
  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
      onSubmit={(e) => void addChairHandler(e).then(() => navigate('/'))}
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
            <Button variant="contained" type="submit">
              Добавить стул
            </Button>
          </Grid>
        </Grid>
      </div>
    </Box>
  );
}
