import { IconButton, Snackbar } from '@mui/material';
import React from 'react';
import CloseIcon from '@mui/icons-material/Close';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { clearError } from '../../redux/slices/chairs/chairSlice';

export default function SimpleChairSnackbar(): JSX.Element {
  const error = useAppSelector((store) => store.chair.error);
  const dispatch = useAppDispatch();
  const open = !!error;
  const handleClose = (): void => {
    dispatch(clearError());
  };
  return (
    <Snackbar
      open={open}
      autoHideDuration={6000}
      onClose={handleClose}
      message={error}
      sx={{ color: 'red' }}
      action={
        <IconButton
          size="small"
          aria-label="close"
          color="inherit"
          onClick={handleClose}
        >
          <CloseIcon fontSize="small" />
        </IconButton>
      }
    />
  );
}
