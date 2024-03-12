import { createReducer } from '@reduxjs/toolkit';

import { closeModal, openModal } from './modal-actions';

const modal = createReducer(false, (builder) => {
  builder.addCase(openModal, () => true);
  builder.addCase(closeModal, () => false);
});

export default modal;
