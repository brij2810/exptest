import React from 'react';
import './Button.css';

export interface ButtonProps {
  size?: 'small' | 'medium' | 'large' | 'extra-large';
  type?: 'primary' | 'secondary' | 'tertiary' | 'error' | 'warning' | 'info' | 'success' | 'icon-primary' | 'icon-secondary' | 'icon-tertiary';
  icon?: 'none' | 'left' | 'right' | 'center';
  state?: 'default' | 'hover' | 'clicked' | 'focused' | 'disabled';
  children?: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  size = 'extra-large',
  type = 'primary',
  icon = 'none',
  state = 'default',
  children = 'Button',
  onClick,
  className = '',
}) => {
  const handleClick = () => {
    if (state === 'disabled') return;
    onClick?.();
  };

  return (
    <button
      className={`button button--${size} button--${type} button--${state} ${icon !== 'none' ? `button--icon-${icon}` : ''} ${className}`}
      onClick={handleClick}
      disabled={state === 'disabled'}
      data-name={`Size=${size}, Type=${type}, Icon=${icon}, State=${state}`}
    >
      {icon === 'left' && (
        <span className="button__icon button__icon--left">
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="9" cy="9" r="8" stroke="currentColor" strokeWidth="1.5"/>
            <path d="M9 5V13M5 9H13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
        </span>
      )}
      {icon === 'center' && (
        <span className="button__icon button__icon--center">
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="9" cy="9" r="8" stroke="currentColor" strokeWidth="1.5"/>
            <path d="M9 5V13M5 9H13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
        </span>
      )}
      {children && <span className="button__text">{children}</span>}
      {icon === 'right' && (
        <span className="button__icon button__icon--right">
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="9" cy="9" r="8" stroke="currentColor" strokeWidth="1.5"/>
            <path d="M9 5V13M5 9H13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
        </span>
      )}
    </button>
  );
};

export default Button;

