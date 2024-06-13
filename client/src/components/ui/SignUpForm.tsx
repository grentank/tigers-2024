import React, { memo } from 'react';
import { Button, Grid, TextField } from '@mui/material';

type FormInputType = {
  name: string;
  type: string;
  label: string;
  required: boolean;
  placeholder: string;
  defaultValue?: string;
};

type Props = {
  inputs: FormInputType[];
  onSubmit: React.FormEventHandler;
};

function SignUpForm({ inputs, onSubmit }: Props): JSX.Element {
  console.log('Form render');
  return (
    <form onSubmit={onSubmit}>
      {inputs.map((input) => (
        <Grid key={input.name} container>
          <Grid item xs={6}>
            <TextField {...input} variant="standard" />
          </Grid>
        </Grid>
      ))}
      <Grid container>
        <Grid item xs={4}>
          <Button type="submit" variant="contained">
            Зарегистрироваться
          </Button>
        </Grid>
      </Grid>
    </form>
  );
}

export default memo(SignUpForm);
