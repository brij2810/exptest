import React from 'react';
import './ActionModal.css';
import { Button } from './Button';

export interface ActionModalProps {
  type?: 'confirmation' | 'danger' | 'warning';
  title?: string;
  message?: string;
  onConfirm?: () => void;
  onCancel?: () => void;
  confirmLabel?: string;
  cancelLabel?: string;
  className?: string;
}

export const ActionModal: React.FC<ActionModalProps> = ({
  type = 'confirmation',
  title,
  message = 'Non-disclosure agreement branding beta equity churn rate channels long tail paradigm shift validation strategy value proposition.',
  onConfirm,
  onCancel,
  confirmLabel = 'Confirm',
  cancelLabel = 'Cancel',
  className = '',
}) => {
  const getTitle = () => {
    if (title) return title;
    switch (type) {
      case 'danger':
        return 'Danger modal';
      case 'warning':
        return 'Warning modal';
      default:
        return 'Confirmation modal';
    }
  };

  return (
    <div className={`action-modal action-modal--${type} ${className}`} data-name={`Type=${type}`}>
      <div className="action-modal__content">
        <div className="action-modal__header">
          {type === 'danger' && (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" />
              <path d="M12 8V12M12 16H12.01" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          )}
          {type === 'warning' && (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 9V13M12 17H12.01M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          )}
          <h2 className="action-modal__title">{getTitle()}</h2>
          <button className="action-modal__close" onClick={onCancel} aria-label="Close">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </button>
        </div>
        <p className="action-modal__message">{message}</p>
      </div>
      <div className="action-modal__actions">
        <Button type="secondary" onClick={onCancel}>
          {cancelLabel}
        </Button>
        <Button
          type={type === 'danger' ? 'error' : type === 'warning' ? 'info' : 'primary'}
          onClick={onConfirm}
        >
          {confirmLabel}
        </Button>
      </div>
    </div>
  );
};

export default ActionModal;

