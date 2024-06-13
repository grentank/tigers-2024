import { Container, TextField } from '@mui/material';
import React, { useCallback, useMemo, useState } from 'react';
import { useAppDispatch } from '../../redux/hooks';
import { signupFormSchema } from '../../types/user';
import { signupThunk } from '../../redux/slices/auth/authThunks';
import SignUpForm from '../ui/SignUpForm';

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
  const [val, setVal] = useState('');
  const onSubmit: React.FormEventHandler<HTMLFormElement> = useCallback((e) => {
    e.preventDefault();
    const formData = Object.fromEntries(new FormData(e.currentTarget));
    const signupFormData = signupFormSchema.parse(formData);
    void dispatch(signupThunk(signupFormData));
  }, []);
  return (
    <Container>
      <TextField
        label="test"
        value={val}
        onChange={(e) => setVal(e.target.value)}
      />
      <SignUpForm onSubmit={onSubmit} inputs={inputs} />
    </Container>
  );
}
