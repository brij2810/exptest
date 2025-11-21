import React from 'react';
import './InProductNotification.css';

export interface InProductNotificationProps {
  icon?: boolean;
  link?: boolean;
  linkText?: string;
  state?: 'read' | 'unread';
  children: React.ReactNode;
  onLinkClick?: () => void;
  className?: string;
}

export const InProductNotification: React.FC<InProductNotificationProps> = ({
  icon = false,
  link = false,
  linkText = 'Learn more',
  state = 'unread',
  children,
  onLinkClick,
  className = '',
}) => {
  return (
    <div
      className={`in-product-notification in-product-notification--${state} ${icon ? 'in-product-notification--with-icon' : ''} ${className}`}
      data-name={`Icon=${icon ? 'on' : 'off'}, Link=${link ? 'on' : 'off'}, State=${state}`}
    >
      {icon && (
        <div className="in-product-notification__icon">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 9V13M12 17H12.01M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </div>
      )}
      <div className="in-product-notification__content">
        <p className="in-product-notification__text">{children}</p>
        {link && (
          <button
            className="in-product-notification__link"
            onClick={onLinkClick}
            type="button"
          >
            {linkText}
          </button>
        )}
      </div>
    </div>
  );
};

export default InProductNotification;

