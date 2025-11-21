import React, { useState } from 'react';
import './DropdownAction.css';

export interface DropdownActionProps {
  type?: 'text' | 'text-icon' | 'icon' | 'button';
  text?: string;
  icon?: React.ReactNode;
  state?: 'default' | 'hover' | 'focused' | 'error' | 'disabled';
  options?: Array<{ value: string; label: string; icon?: React.ReactNode }>;
  value?: string;
  onChange?: (value: string) => void;
  className?: string;
}

export const DropdownAction: React.FC<DropdownActionProps> = ({
  type = 'text',
  text = 'Dropdown',
  icon,
  state = 'default',
  options = [],
  value,
  onChange,
  className = '',
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleChange = (newValue: string) => {
    if (state === 'disabled') return;
    onChange?.(newValue);
    setIsOpen(false);
  };

  return (
    <div className={`dropdown-action-wrapper ${className}`}>
      <div className={`dropdown-action dropdown-action--${type} dropdown-action--${state} ${isOpen ? 'dropdown-action--open' : ''}`}>
        <button
          type="button"
          className="dropdown-action__trigger"
          onClick={() => state !== 'disabled' && setIsOpen(!isOpen)}
          disabled={state === 'disabled'}
          data-name={`Type=${type}, State=${state}`}
        >
          {type === 'icon' && icon && (
            <span className="dropdown-action__icon">{icon}</span>
          )}
          {(type === 'text-icon' || type === 'button') && icon && (
            <span className="dropdown-action__icon">{icon}</span>
          )}
          {type !== 'icon' && (
            <span className="dropdown-action__text">{text}</span>
          )}
          <svg
            className={`dropdown-action__chevron ${isOpen ? 'dropdown-action__chevron--open' : ''}`}
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M4 6L8 10L12 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        {isOpen && state !== 'disabled' && options.length > 0 && (
          <div className="dropdown-action__menu">
            {options.map((option) => (
              <button
                key={option.value}
                type="button"
                className={`dropdown-action__option ${value === option.value ? 'dropdown-action__option--selected' : ''}`}
                onClick={() => handleChange(option.value)}
              >
                {option.icon && <span className="dropdown-action__option-icon">{option.icon}</span>}
                <span className="dropdown-action__option-text">{option.label}</span>
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default DropdownAction;

