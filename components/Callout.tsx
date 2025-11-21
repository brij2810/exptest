import React from 'react';
import './Callout.css';

export interface CalloutProps {
  paragraph?: boolean;
  singleButton?: boolean;
  doubleButton?: boolean;
  singleLink?: boolean;
  doubleLink?: boolean;
  title?: string;
  message?: string;
  primaryAction?: string;
  secondaryAction?: string;
  onPrimaryAction?: () => void;
  onSecondaryAction?: () => void;
  onClose?: () => void;
  className?: string;
}

export const Callout: React.FC<CalloutProps> = ({
  paragraph = false,
  singleButton = false,
  doubleButton = false,
  singleLink = false,
  doubleLink = false,
  title = 'Callout important message',
  message = 'Non-disclosure agreement branding beta equity churn rate channels long tail paradigm shift validation strategy.',
  primaryAction = 'Action',
  secondaryAction = 'Action Secodary',
  onPrimaryAction,
  onSecondaryAction,
  onClose,
  className = '',
}) => {
  return (
    <div
      className={`callout ${paragraph ? 'callout--paragraph' : ''} ${singleButton ? 'callout--single-button' : ''} ${doubleButton ? 'callout--double-button' : ''} ${singleLink ? 'callout--single-link' : ''} ${doubleLink ? 'callout--double-link' : ''} ${className}`}
      data-name={`Paragraph=${paragraph}, Single button=${singleButton}, Double button=${doubleButton}, Single link=${singleLink}, Double link=${doubleLink}`}
    >
      <div className="callout__bar" />
      <div className="callout__content">
        <div className="callout__icon callout__icon--flag" />
        <div className="callout__main">
          <p className="callout__title">{title}</p>
          {paragraph && <p className="callout__message">{message}</p>}
          {(singleButton || doubleButton || singleLink || doubleLink) && (
            <div className="callout__actions">
              {singleButton && (
                <button className="callout__button callout__button--primary" onClick={onPrimaryAction}>
                  {primaryAction}
                </button>
              )}
              {doubleButton && (
                <>
                  <button className="callout__button callout__button--primary" onClick={onPrimaryAction}>
                    {primaryAction}
                  </button>
                  <button className="callout__button callout__button--secondary" onClick={onSecondaryAction}>
                    {secondaryAction}
                  </button>
                </>
              )}
              {singleLink && (
                <a href="#" className="callout__link" onClick={onPrimaryAction}>
                  {primaryAction}
                </a>
              )}
              {doubleLink && (
                <>
                  <a href="#" className="callout__link" onClick={onPrimaryAction}>
                    Action Primary
                  </a>
                  <a href="#" className="callout__link" onClick={onSecondaryAction}>
                    {secondaryAction}
                  </a>
                </>
              )}
            </div>
          )}
        </div>
        {onClose && (
          <button className="callout__close" onClick={onClose} aria-label="Close">
            <div className="callout__close-icon" />
          </button>
        )}
      </div>
    </div>
  );
};

export default Callout;

