import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { ChairsStateType, ChairType } from '../../../types/chair';
import {
  addNewChairThunk,
  deleteChairThunk,
  getAllChairs,
} from './chairThunks';

const initialState: ChairsStateType = {
  chairs: [],
  isLoading: false,
  error: null,
  currentChair: null,
  favoriteChairs: [],
};

export const chairSlice = createSlice({
  name: 'chair',
  initialState,
  reducers: {
    deleteAllChairs: (state) => {
      state.chairs = [];
      state.favoriteChairs = [];
    },
    addChair: (state, action: PayloadAction<ChairType>) => {
      state.chairs.push(action.payload);
    },
    addToFavorites: (state, action: PayloadAction<ChairType['id']>) => {
      const target = state.chairs.find((chair) => chair.id === action.payload);
      if (!target) return;
      const indexInFavorites = state.favoriteChairs.findIndex(
        (chair) => chair.id === action.payload,
      );
      if (indexInFavorites !== -1)
        state.favoriteChairs.splice(indexInFavorites, 1);
      else state.favoriteChairs.push(target);
    },
    clearError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getAllChairs.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getAllChairs.fulfilled, (state, action) => {
      state.chairs = action.payload;
      state.isLoading = false;
    });
    builder.addCase(addNewChairThunk.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(addNewChairThunk.fulfilled, (state, action) => {
      state.chairs.push(action.payload);
      state.isLoading = false;
    });
    builder.addCase(deleteChairThunk.fulfilled, (state, action) => {
      state.chairs = state.chairs.filter(
        (chair) => chair.id !== action.payload,
      );
    });
    builder.addMatcher(
      (action: PayloadAction) => action.type.endsWith('/rejected'),
      (state) => {
        state.error = 'Возникла ошибка';
      },
    );
  },
});

// Action creators are generated for each case reducer function
export const { deleteAllChairs, addChair, addToFavorites, clearError } =
  chairSlice.actions;

export default chairSlice.reducer;
