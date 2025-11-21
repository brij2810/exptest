import React from 'react';
import './EmptyState.css';
import { Button } from './Button';

export interface EmptyStateProps {
  title?: boolean;
  paragraph?: boolean;
  button?: boolean;
  icon?: React.ReactNode;
  titleText?: string;
  paragraphText?: string;
  buttonText?: string;
  onButtonClick?: () => void;
  className?: string;
}

export const EmptyState: React.FC<EmptyStateProps> = ({
  title = false,
  paragraph = false,
  button = false,
  icon,
  titleText = 'No results',
  paragraphText = 'Try a quick search to explore hundreds of affordable options.',
  buttonText = 'Button',
  onButtonClick,
  className = '',
}) => {
  return (
    <div
      className={`empty-state ${className}`}
      data-name={`Title=${title}, Paragraph=${paragraph}, Button=${button}`}
    >
      <div className="empty-state__icon">
        {icon || (
          <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="20" y="20" width="80" height="80" rx="8" stroke="currentColor" strokeWidth="2"/>
            <path d="M40 50H80M40 60H80M40 70H60" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        )}
      </div>
      {(title || paragraph || button) && (
        <div className="empty-state__content">
          {title && (
            <h3 className="empty-state__title">{titleText}</h3>
          )}
          {paragraph && (
            <p className="empty-state__paragraph">{paragraphText}</p>
          )}
          {button && (
            <Button type="primary" size="medium" onClick={onButtonClick}>
              {buttonText}
            </Button>
          )}
        </div>
      )}
    </div>
  );
};

export default EmptyState;

