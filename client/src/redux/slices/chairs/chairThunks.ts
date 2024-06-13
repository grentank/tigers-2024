import { createAsyncThunk } from '@reduxjs/toolkit';
import chairService from '../../../services/chairService';
import type { ChairType, NewChairForm } from '../../../types/chair';

export const getAllChairs = createAsyncThunk(
  'chair/getAllChairs',
  // Описание функции
  () => chairService.getAllChairs(),
);

export const addNewChairThunk = createAsyncThunk<ChairType, NewChairForm>(
  'chair/addNewChairThunk',
  (formData) => chairService.sendNewChair(formData),
);

export const deleteChairThunk = createAsyncThunk<
  ChairType['id'],
  ChairType['id']
>('chair/deleteChairThunk', (chairId) => chairService.deleteChairById(chairId));

export const getOneChairThunk = createAsyncThunk<ChairType, ChairType['id']>(
  'chair/getOneChairThunk',
  (chairId, {signal}) => chairService.getOneChair(chairId, signal),
);

export const editOneChairThunk = createAsyncThunk<ChairType, ChairType>(
  'chair/editOneChairThunk',
  (chair) => chairService.editOneChair(chair),
);