import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { closeModal } from '../../redux/slices/modals/modalSlice';
import GenerateFormByType from './GenerateFormByType';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function MyModal() {
  const { isOpened, type } = useAppSelector((state) => state.modal);
  const dispatch = useAppDispatch();

  const handleClose = () => {
    dispatch(closeModal());
  };

  return (
    <Modal
      open={isOpened}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          {type}
        </Typography>
        <GenerateFormByType type={type} handleClose={handleClose} />
      </Box>
    </Modal>
  );
}
