import React from 'react';
import './MessageModal.css';
import { Button } from './Button';

export interface MessageModalProps {
  type?: 'success' | 'welcome' | 'error';
  title?: string;
  message?: string;
  primaryAction?: string;
  secondaryAction?: string;
  onPrimaryAction?: () => void;
  onSecondaryAction?: () => void;
  onClose?: () => void;
  className?: string;
}

export const MessageModal: React.FC<MessageModalProps> = ({
  type = 'error',
  title,
  message,
  primaryAction,
  secondaryAction,
  onPrimaryAction,
  onSecondaryAction,
  onClose,
  className = '',
}) => {
  const getTitle = () => {
    if (title) return title;
    switch (type) {
      case 'success':
        return 'Awesome!';
      case 'welcome':
        return 'Welcome to the team';
      default:
        return 'Something went wrong';
    }
  };

  const getMessage = () => {
    if (message) return message;
    switch (type) {
      case 'success':
        return "You've completed the taks successfully";
      case 'welcome':
        return "You've completed the taks successfully";
      default:
        return "We're having technical issues at the moment. Please have some patients.";
    }
  };

  return (
    <div className={`message-modal message-modal--${type} ${className}`} data-name={`Type=${type}`}>
      <button className="message-modal__close" onClick={onClose} aria-label="Close">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      </button>
      <div className="message-modal__content">
        <div className="message-modal__icon">
          {(type === 'success' || type === 'welcome') ? (
            <svg width="308" height="308" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" />
              <path d="M8 12L11 15L16 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          ) : (
            <svg width="86" height="86" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 9V13M12 17H12.01M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          )}
        </div>
        <div className="message-modal__text">
          <h2 className="message-modal__title">{getTitle()}</h2>
          <p className="message-modal__message">{getMessage()}</p>
        </div>
        <div className="message-modal__actions">
          {secondaryAction && (
            <Button type="secondary" onClick={onSecondaryAction}>
              {secondaryAction}
            </Button>
          )}
          <Button
            type={type === 'success' ? 'success' : type === 'error' ? 'error' : 'primary'}
            onClick={onPrimaryAction}
          >
            {primaryAction || (type === 'success' ? 'Complete another Task' : type === 'error' ? 'Retry' : 'Start Creating')}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MessageModal;

