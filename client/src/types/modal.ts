export type ModalType = 'login' | 'edit' | '';

export type ModalState = {
  isOpened: boolean;
  type: ModalType;
};
