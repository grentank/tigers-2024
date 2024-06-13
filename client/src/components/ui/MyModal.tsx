import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { closeModal } from '../../redux/slices/modals/modalSlice';
import SignUpForm from './SignUpForm';
import { loginThunk } from '../../redux/slices/auth/authThunks';
import { Grid, TextField } from '@mui/material';
import { editOneChairThunk } from '../../redux/slices/chairs/chairThunks';

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
  const currentChair = useAppSelector((store) => store.chair.currentChair);
  const dispatch = useAppDispatch();

  const handleClose = () => {
    dispatch(closeModal());
  };

  const actionElement = (): JSX.Element => {
    switch (type) {
      case 'login':
        return (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              const formData = Object.fromEntries(
                new FormData(e.currentTarget as HTMLFormElement),
              ) as { email: string; password: string };
              void dispatch(loginThunk(formData)).then(handleClose);
            }}
          >
            {[
              {
                name: 'email',
                label: 'email',
                placeholder: 'email',
                required: true,
                type: 'email',
              },
              {
                name: 'password',
                label: 'password',
                placeholder: 'password',
                required: true,
                type: 'password',
              },
            ].map((input) => (
              <Grid key={input.name} container>
                <Grid item xs={6}>
                  <TextField {...input} variant="standard" />
                </Grid>
              </Grid>
            ))}
            <Grid container>
              <Grid item xs={4}>
                <Button type="submit" variant="contained">
                  Войти
                </Button>
              </Grid>
            </Grid>
          </form>
        );
      case 'edit':
        return (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              const formData = Object.fromEntries(
                new FormData(e.currentTarget as HTMLFormElement),
              ) as { name: string; description: string };
              if (!currentChair) return;
              
              void dispatch(
                editOneChairThunk({ ...currentChair, ...formData }),
              ).then(handleClose);
            }}
          >
            {[
              {
                name: 'name',
                label: 'name',
                placeholder: 'name',
                required: true,
                type: 'text',
                defaultValue: currentChair?.name,
              },
              {
                name: 'description',
                label: 'description',
                placeholder: 'description',
                required: true,
                type: 'text',
                defaultValue: currentChair?.description,
              },
            ].map((input) => (
              <Grid key={input.name} container>
                <Grid item xs={6}>
                  <TextField {...input} variant="standard" />
                </Grid>
              </Grid>
            ))}
            <Grid container>
              <Grid item xs={4}>
                <Button type="submit" variant="contained">
                  Изменить
                </Button>
              </Grid>
            </Grid>
          </form>
        );
      default:
        return <>Error</>;
    }
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
        {actionElement()}
      </Box>
    </Modal>
  );
}
