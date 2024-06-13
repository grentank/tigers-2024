import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { ChairsStateType, ChairType } from '../../../types/chair';
import {
  addNewChairThunk,
  deleteChairThunk,
  editOneChairThunk,
  getAllChairs,
  getOneChairThunk,
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
    setCurrentChair: (state, action: PayloadAction<ChairType>) => {
      state.currentChair = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllChairs.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllChairs.fulfilled, (state, action) => {
        state.chairs = action.payload;
        state.isLoading = false;
      })
      .addCase(addNewChairThunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addNewChairThunk.fulfilled, (state, action) => {
        state.chairs.push(action.payload);
        state.isLoading = false;
      })
      .addCase(deleteChairThunk.fulfilled, (state, action) => {
        state.chairs = state.chairs.filter(
          (chair) => chair.id !== action.payload,
        );
      })
      .addCase(getOneChairThunk.fulfilled, (state, action) => {
        state.currentChair = action.payload;
      })
      .addCase(editOneChairThunk.fulfilled, (state, action) => {
        const chairIndex = state.chairs.findIndex(
          (chair) => chair.id === action.payload.id,
        );
        if (chairIndex === -1) return;
        state.chairs[chairIndex] = action.payload;
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
export const { deleteAllChairs, addChair, addToFavorites, clearError, setCurrentChair } =
  chairSlice.actions;

export default chairSlice.reducer;
