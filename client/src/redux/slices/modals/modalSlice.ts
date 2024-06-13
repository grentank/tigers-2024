import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { ModalState } from '../../../types/modal';

const initialState: ModalState = {
  isOpened: false,
  type: '',
};

export const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openModal: (state, action: PayloadAction<ModalState['type']>) => {
      state.isOpened = true;
      state.type = action.payload;
    },
    closeModal: (state) => {
      state.isOpened = false;
      state.type = '';
    },
  },
});

// Action creators are generated for each case reducer function
export const { openModal, closeModal } = modalSlice.actions;

export default modalSlice.reducer;
