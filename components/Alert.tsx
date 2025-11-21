import React from 'react';
import './Alert.css';

export interface AlertProps {
  type?: 'error' | 'info' | 'success' | 'warning' | 'default';
  title?: string;
  message?: string;
  onClose?: () => void;
  className?: string;
}

export const Alert: React.FC<AlertProps> = ({
  type = 'error',
  title = 'Title',
  message = 'Paragraph for banner above the nav.',
  onClose,
  className = '',
}) => {
  const getIcon = () => {
    switch (type) {
      case 'error':
        return <div className="alert__icon alert__icon--error" />;
      case 'info':
        return <div className="alert__icon alert__icon--info" />;
      case 'success':
        return <div className="alert__icon alert__icon--success" />;
      case 'warning':
        return <div className="alert__icon alert__icon--warning" />;
      default:
        return <div className="alert__icon alert__icon--default" />;
    }
  };

  return (
    <div
      className={`alert alert--${type} ${className}`}
      data-name={`Type=${type}`}
    >
      <div className="alert__bar" />
      <div className="alert__content">
        <div className="alert__main">
          {getIcon()}
          <div className="alert__text">
            <div className="alert__title">{title}</div>
            <div className="alert__message">{message}</div>
          </div>
        </div>
        {onClose && (
          <button className="alert__close" onClick={onClose} aria-label="Close">
            <div className="alert__close-icon" />
          </button>
        )}
      </div>
    </div>
  );
};

export default Alert;

