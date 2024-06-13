import React from 'react';
import { ModalType } from '../../types/modal';
import SignUpForm from './SignUpForm';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { loginThunk } from '../../redux/slices/auth/authThunks';
import { editOneChairThunk } from '../../redux/slices/chairs/chairThunks';

type Props = {
  type: ModalType;
  handleClose: () => void;
};

export default function GenerateFormByType({
  type,
  handleClose,
}: Props): JSX.Element {
  const currentChair = useAppSelector((store) => store.chair.currentChair);
  const dispatch = useAppDispatch();
  switch (type) {
    case 'login':
      return (
        <SignUpForm
          onSubmit={(e) => {
            e.preventDefault();
            const formData = Object.fromEntries(
              new FormData(e.currentTarget as HTMLFormElement),
            ) as { email: string; password: string };
            void dispatch(loginThunk(formData)).then(handleClose);
          }}
          inputs={[
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
          ]}
        />
      );
    case 'edit':
      return (
        <SignUpForm
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
          inputs={[
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
          ]}
        />
      );
    default:
      return <>Error</>;
  }
}
