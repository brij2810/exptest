import React from 'react';
import './Breadcrumbs.css';

export interface BreadcrumbsProps {
  type?: 'text' | 'folder' | 'subfolder' | 'page';
  icon?: boolean;
  state?: 'default' | 'hover' | 'active' | 'focused' | 'disabled' | 'inactive';
  label?: string;
  onClick?: () => void;
  className?: string;
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({
  type = 'text',
  icon = false,
  state = 'default',
  label = 'Bare',
  onClick,
  className = '',
}) => {
  const getIcon = () => {
    if (!icon) return null;
    
    switch (type) {
      case 'folder':
      case 'subfolder':
        return <div className="breadcrumbs__icon breadcrumbs__icon--folder" />;
      case 'page':
        return <div className="breadcrumbs__icon breadcrumbs__icon--file" />;
      default:
        return null;
    }
  };

  return (
    <div
      className={`breadcrumbs breadcrumbs--${type} breadcrumbs--${state} ${icon ? 'breadcrumbs--icon' : ''} ${className}`}
      onClick={onClick}
      data-name={`Type=${type}, Icon=${icon}, State=${state}`}
    >
      {icon && getIcon()}
      <div className="breadcrumbs__label">
        <p>{label}</p>
      </div>
    </div>
  );
};

export default Breadcrumbs;

