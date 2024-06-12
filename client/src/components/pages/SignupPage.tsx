import { Button, Container, Grid, TextField } from '@mui/material';
import React, { useMemo } from 'react';
import { useAppDispatch } from '../../redux/hooks';
import { signupFormSchema } from '../../types/user';
import { signupThunk } from '../../redux/slices/auth/authThunks';

export default function SignupPage(): JSX.Element {
  const inputs = useMemo(
    () => [
      {
        name: 'email',
        type: 'email',
        label: 'Почта',
        required: true,
        placeholder: 'example@mail.ru',
      },
      {
        name: 'password',
        type: 'password',
        label: 'Пароль',
        required: true,
        placeholder: 'Пароль',
      },
      {
        name: 'name',
        type: 'text',
        label: 'Имя',
        required: true,
        placeholder: 'Иван',
      },
    ],
    [],
  );
  const dispatch = useAppDispatch();
  return (
    <Container>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const formData = Object.fromEntries(new FormData(e.currentTarget));
          const signupFormData = signupFormSchema.parse(formData);
          void dispatch(signupThunk(signupFormData));
        }}
      >
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
    </Container>
  );
}
