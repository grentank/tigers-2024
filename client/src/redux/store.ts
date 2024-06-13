import { configureStore } from '@reduxjs/toolkit';
import chairsReducer from './slices/chairs/chairSlice';
import authReducer from './slices/auth/authSlice';
import modalReducer from './slices/modals/modalSlice';

export const store = configureStore({
  reducer: {
    chair: chairsReducer,
    auth: authReducer,
    modal: modalReducer,
  },
});

export type AppStore = typeof store;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
