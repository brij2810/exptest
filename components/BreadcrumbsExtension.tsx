import React from 'react';
import './BreadcrumbsExtension.css';

export interface BreadcrumbsExtensionProps {
  extension?: '1' | '2' | '3';
  onClick?: () => void;
  className?: string;
}

export const BreadcrumbsExtension: React.FC<BreadcrumbsExtensionProps> = ({
  extension = '2',
  onClick,
  className = '',
}) => {
  return (
    <div
      className={`breadcrumbs-extension breadcrumbs-extension--${extension} ${className}`}
      onClick={onClick}
      data-name={`Extension=${extension}`}
    >
      {extension === '1' && (
        <p className="breadcrumbs-extension__text">/</p>
      )}
      {extension === '2' && (
        <div className="breadcrumbs-extension__icon">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="5" r="1.5" fill="currentColor"/>
            <circle cx="12" cy="12" r="1.5" fill="currentColor"/>
            <circle cx="12" cy="19" r="1.5" fill="currentColor"/>
          </svg>
        </div>
      )}
      {extension === '3' && (
        <div className="breadcrumbs-extension__icon breadcrumbs-extension__icon--double">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 5L19 12L12 19M5 5L12 12L5 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      )}
    </div>
  );
};

export default BreadcrumbsExtension;

