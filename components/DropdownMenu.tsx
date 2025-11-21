import React from 'react';
import './DropdownMenu.css';

export interface DropdownMenuProps {
  type?: 'text' | 'icon';
  icon?: boolean;
  arrow?: boolean;
  paragraph?: boolean;
  state?: 'default' | 'hover' | 'focused' | 'active';
  label?: string;
  description?: string;
  onClick?: () => void;
  className?: string;
}

export const DropdownMenu: React.FC<DropdownMenuProps> = ({
  type = 'text',
  icon = false,
  arrow = false,
  paragraph = false,
  state = 'default',
  label = 'Default',
  description = 'Short Description',
  onClick,
  className = '',
}) => {
  const handleClick = () => {
    if (state === 'disabled') return;
    onClick?.();
  };

  return (
    <div
      className={`dropdown-menu dropdown-menu--${type} dropdown-menu--${state} ${icon ? 'dropdown-menu--has-icon' : ''} ${arrow ? 'dropdown-menu--has-arrow' : ''} ${paragraph ? 'dropdown-menu--has-paragraph' : ''} ${className}`}
      onClick={handleClick}
      data-name={`Type=${type}, State=${state}`}
    >
      {icon && (
        <div className="dropdown-menu__icon">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 8V12M8 8V4M8 8H12M8 8H4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
        </div>
      )}
      <div className="dropdown-menu__content">
        <div className="dropdown-menu__label">{label}</div>
        {paragraph && (
          <div className="dropdown-menu__description">{description}</div>
        )}
      </div>
      {arrow && (
        <div className="dropdown-menu__arrow">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 4L10 8L6 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;

