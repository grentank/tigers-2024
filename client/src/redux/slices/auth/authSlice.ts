import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { AuthState } from '../../../types/user';
import { checkAuthThunk, refreshThunk, signupThunk } from './authThunks';

const initialState: AuthState = {
  user: {
    status: 'pending',
  },
  accessToken: '',
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state) => {
      state.accessToken = '';
      state.user = {
        status: 'guest',
      };
    },
    logUserIn: (state, action: PayloadAction<AuthState>) => {
      if (action.payload.user.status !== 'logged') return;
      state.user = {
        ...action.payload.user,
        status: 'logged',
      };
      state.accessToken = action.payload.accessToken;
    },
    setAccessToken: (state, action: PayloadAction<string>) => {
      state.accessToken = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(signupThunk.fulfilled, (state, action) => action.payload)
      .addCase(checkAuthThunk.fulfilled, (state, action) => action.payload)
      .addCase(checkAuthThunk.rejected, (state) => {
        state.user = {
          status: 'guest',
        };
        state.accessToken = '';
      })
      .addCase(refreshThunk.fulfilled, (state, action) => {
        state.accessToken = action.payload;
      });
  },
});

// Action creators are generated for each case reducer function
export const { logout, logUserIn, setAccessToken } = authSlice.actions;

export default authSlice.reducer;
