import * as React from 'react';
import { Dialog, DialogBody } from '@blueprintjs/core';

import { dialog } from './modal.styles';

export type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  actionButton?: React.ReactNode;
};

export const Modal: React.FunctionComponent<ModalProps> = ({
  children,
  isOpen,
  onClose,
}) => {
  return (
    <Dialog usePortal isOpen={isOpen} onClose={onClose} className={dialog}>
      <DialogBody>{children}</DialogBody>
    </Dialog>
  );
};
