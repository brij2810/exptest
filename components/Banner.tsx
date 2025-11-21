import React from 'react';
import './Banner.css';

export interface BannerProps {
  type?: 'error' | 'info' | 'success' | 'warning' | 'default';
  link?: boolean;
  icon?: boolean;
  message?: string;
  linkText?: string;
  linkUrl?: string;
  className?: string;
}

export const Banner: React.FC<BannerProps> = ({
  type = 'error',
  link = false,
  icon = false,
  message = 'Paragraph for banner above the nav.',
  linkText = 'Link to Redirect',
  linkUrl = '#',
  className = '',
}) => {
  const getIcon = () => {
    if (!icon) return null;
    
    switch (type) {
      case 'error':
        return <div className="banner__icon banner__icon--error" />;
      case 'info':
        return <div className="banner__icon banner__icon--info" />;
      case 'success':
        return <div className="banner__icon banner__icon--success" />;
      case 'warning':
        return <div className="banner__icon banner__icon--warning" />;
      default:
        return <div className="banner__icon banner__icon--default" />;
    }
  };

  return (
    <div
      className={`banner banner--${type} ${link ? 'banner--link' : ''} ${icon ? 'banner--icon' : ''} ${className}`}
      data-name={`Type=${type}, Link=${link}, Icon=${icon}`}
    >
      <div className="banner__content">
        {icon && getIcon()}
        <p className="banner__message">{message}</p>
        {link && (
          <a href={linkUrl} className="banner__link">
            {linkText}
          </a>
        )}
      </div>
    </div>
  );
};

export default Banner;

