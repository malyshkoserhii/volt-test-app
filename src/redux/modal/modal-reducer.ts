import { createReducer } from '@reduxjs/toolkit';

import { closeModal, openModal } from './modal-actions';

export const modalReducer = createReducer(false, (builder) => {
  builder.addCase(openModal, () => true);
  builder.addCase(closeModal, () => false);
});
