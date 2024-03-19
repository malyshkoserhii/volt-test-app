import * as React from 'react'
import {
  Button,
  Dialog as BlueprintDialog,
  DialogBody,
  DialogFooter,
} from '@blueprintjs/core'

import { dialog } from './dialog.styles'

export type DialogProps = {
  text: string
  isOpen: boolean
  loading?: boolean
  onClose: () => void
  onApprove: () => void
}

export const Dialog: React.FunctionComponent<DialogProps> = ({
  text,
  isOpen,
  loading = false,
  onClose,
  onApprove,
}) => {
  return (
    <BlueprintDialog
      usePortal
      isOpen={isOpen}
      onClose={onClose}
      className={dialog}
    >
      <DialogBody>
        <p>{text}</p>
      </DialogBody>

      <DialogFooter
        actions={
          <>
            <Button
              intent="danger"
              text="Yes"
              onClick={onApprove}
              loading={loading}
            />
            <Button text="No" onClick={onClose} />
          </>
        }
      />
    </BlueprintDialog>
  )
}
