import * as React from 'react';
import { Button, Dialog, DialogBody, DialogFooter } from '@blueprintjs/core';

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
  actionButton = null,
}) => {
  return (
    <Dialog usePortal isOpen={isOpen} onClose={onClose}>
      <DialogBody>{children}</DialogBody>
      <DialogFooter
        actions={
          <>
            {actionButton}
            <Button intent="primary" text="Close" onClick={onClose} />
          </>
        }
      />
    </Dialog>
  );
};
