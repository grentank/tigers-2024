import { createAsyncThunk } from '@reduxjs/toolkit';
import authService from '../../../services/authService';
import type { AuthState, SignupFormType } from '../../../types/user';

export const signupThunk = createAsyncThunk<AuthState, SignupFormType>(
  'auth/signupThunk',
  (signupFormData) => authService.signup(signupFormData),
);

export const checkAuthThunk = createAsyncThunk('auth/checkAuthThunk', () =>
  authService.check(),
);

export const refreshThunk = createAsyncThunk('auth/refreshThunk', () =>
  authService.refresh(),
);
