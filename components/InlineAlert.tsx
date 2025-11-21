import React from 'react';
import './InlineAlert.css';

export interface InlineAlertProps {
  type?: 'error' | 'info' | 'success' | 'warning' | 'default';
  message?: string;
  onClose?: () => void;
  className?: string;
}

export const InlineAlert: React.FC<InlineAlertProps> = ({
  type = 'error',
  message = 'This is an inline alert message.',
  onClose,
  className = '',
}) => {
  const getIcon = () => {
    switch (type) {
      case 'error':
        return <div className="inline-alert__icon inline-alert__icon--error" />;
      case 'info':
        return <div className="inline-alert__icon inline-alert__icon--info" />;
      case 'success':
        return <div className="inline-alert__icon inline-alert__icon--success" />;
      case 'warning':
        return <div className="inline-alert__icon inline-alert__icon--warning" />;
      default:
        return <div className="inline-alert__icon inline-alert__icon--default" />;
    }
  };

  return (
    <div
      className={`inline-alert inline-alert--${type} ${className}`}
      data-name={`Type=${type}`}
    >
      <div className="inline-alert__content">
        {getIcon()}
        <div className="inline-alert__message">{message}</div>
        {onClose && (
          <button className="inline-alert__close" onClick={onClose} aria-label="Close">
            <div className="inline-alert__close-icon" />
          </button>
        )}
      </div>
    </div>
  );
};

export default InlineAlert;

