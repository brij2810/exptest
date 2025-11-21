import React, { useState } from 'react';
import './Collapsible.css';

export interface CollapsibleProps {
  variant?: 'menu' | 'sub-menu';
  state?: 'default' | 'hover' | 'selected' | 'focused' | 'disabled' | 'active';
  icon?: React.ReactNode;
  label?: string;
  children?: React.ReactNode;
  isOpen?: boolean;
  onToggle?: () => void;
  onClick?: () => void;
  className?: string;
}

export const Collapsible: React.FC<CollapsibleProps> = ({
  variant = 'menu',
  state = 'default',
  icon,
  label = 'Payment method',
  children,
  isOpen: controlledIsOpen,
  onToggle,
  onClick,
  className = '',
}) => {
  const [internalIsOpen, setInternalIsOpen] = useState(false);
  const isOpen = controlledIsOpen !== undefined ? controlledIsOpen : internalIsOpen;

  const handleToggle = () => {
    if (state === 'disabled') return;
    if (onToggle) {
      onToggle();
    } else {
      setInternalIsOpen(!internalIsOpen);
    }
    onClick?.();
  };

  const currentState = isOpen && variant === 'menu' ? 'selected' : state;

  return (
    <div
      className={`collapsible collapsible--${variant} collapsible--${currentState} ${className}`}
      data-name={`Variant=${variant}, State=${currentState}`}
    >
      <div
        className="collapsible__header"
        onClick={handleToggle}
        role="button"
        tabIndex={state === 'disabled' ? -1 : 0}
        onKeyDown={(e) => {
          if ((e.key === 'Enter' || e.key === ' ') && state !== 'disabled') {
            e.preventDefault();
            handleToggle();
          }
        }}
      >
        {variant === 'menu' && icon && (
          <div className="collapsible__icon">{icon}</div>
        )}
        <span className="collapsible__label">{label}</span>
        {variant === 'menu' && (
          <div className={`collapsible__chevron ${isOpen ? 'collapsible__chevron--open' : ''}`}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        )}
      </div>
      {isOpen && children && (
        <div className="collapsible__content">
          {children}
        </div>
      )}
    </div>
  );
};

export default Collapsible;

