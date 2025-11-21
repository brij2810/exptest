import React from 'react';
import './MarketingModal.css';
import { Button } from './Button';

export interface MarketingModalProps {
  title?: string;
  description?: string;
  imageUrl?: string;
  primaryAction?: string;
  secondaryAction?: string;
  onPrimaryAction?: () => void;
  onSecondaryAction?: () => void;
  onClose?: () => void;
  className?: string;
}

export const MarketingModal: React.FC<MarketingModalProps> = ({
  title = 'Subscribe to our newsletter',
  description = 'Get the latest updates and news delivered to your inbox.',
  imageUrl,
  primaryAction = 'Subscribe',
  secondaryAction = 'Maybe later',
  onPrimaryAction,
  onSecondaryAction,
  onClose,
  className = '',
}) => {
  return (
    <div className={`marketing-modal ${className}`} data-name="Marketing modal">
      <button className="marketing-modal__close" onClick={onClose} aria-label="Close">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      </button>
      {imageUrl && (
        <div className="marketing-modal__image">
          <img src={imageUrl} alt={title} />
        </div>
      )}
      <div className="marketing-modal__content">
        <h2 className="marketing-modal__title">{title}</h2>
        <p className="marketing-modal__description">{description}</p>
        <div className="marketing-modal__actions">
          {secondaryAction && (
            <Button type="secondary" onClick={onSecondaryAction}>
              {secondaryAction}
            </Button>
          )}
          <Button type="primary" onClick={onPrimaryAction}>
            {primaryAction}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MarketingModal;

