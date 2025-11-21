import React from 'react';
import './Dialog.css';
import { Button } from './Button';

export interface DialogProps {
  type?: 'small' | 'medium' | 'large' | 'scroll';
  title?: string;
  children?: React.ReactNode;
  primaryAction?: string;
  secondaryAction?: string;
  onPrimaryAction?: () => void;
  onSecondaryAction?: () => void;
  onClose?: () => void;
  className?: string;
}

export const Dialog: React.FC<DialogProps> = ({
  type = 'small',
  title = 'Share your works',
  children,
  primaryAction = 'Confirm',
  secondaryAction = 'Cancel',
  onPrimaryAction,
  onSecondaryAction,
  onClose,
  className = '',
}) => {
  return (
    <div
      className={`dialog dialog--${type} ${className}`}
      data-name={`Type=${type}`}
    >
      <div className="dialog__header">
        <h2 className="dialog__title">{title}</h2>
        {onClose && (
          <button className="dialog__close" onClick={onClose} aria-label="Close">
            <div className="dialog__close-icon" />
          </button>
        )}
      </div>
      <div className="dialog__content">
        {children || (
          <p className="dialog__default-content">
            This is place holder text. The basic dialog for modals should contain only valuable and relevant information. Simplify dialogs by removing unnecessary elements or content that does not support user tasks. If you find that the number of required elements for your design are making the dialog excessively large, then try a different design solution.
          </p>
        )}
      </div>
      <div className="dialog__footer">
        <div className="dialog__actions">
          {onPrimaryAction && (
            <Button type="primary" size="large" onClick={onPrimaryAction}>
              {primaryAction}
            </Button>
          )}
          {onSecondaryAction && (
            <Button type="secondary" size="large" onClick={onSecondaryAction}>
              {secondaryAction}
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dialog;

