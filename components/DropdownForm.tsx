import React, { useState } from 'react';
import './DropdownForm.css';

export interface DropdownFormProps {
  size?: '34' | '40';
  title?: boolean;
  topInstruction?: boolean;
  bottomInstruction?: boolean;
  state?: 'default' | 'hover' | 'focused' | 'error' | 'disabled';
  options?: Array<{ value: string; label: string }>;
  value?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  className?: string;
}

export const DropdownForm: React.FC<DropdownFormProps> = ({
  size = '40',
  title = false,
  topInstruction = false,
  bottomInstruction = false,
  state = 'default',
  options = [],
  value,
  onChange,
  placeholder = 'Select option',
  className = '',
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const selectedOption = options.find(opt => opt.value === value);

  const handleChange = (newValue: string) => {
    if (state === 'disabled') return;
    onChange?.(newValue);
    setIsOpen(false);
  };

  const inputId = `dropdown-form-${Math.random().toString(36).substr(2, 9)}`;

  return (
    <div className={`dropdown-form-wrapper ${className}`}>
      {title && (
        <label htmlFor={inputId} className="dropdown-form__title">
          Label
        </label>
      )}
      {topInstruction && (
        <div className="dropdown-form__instruction dropdown-form__instruction--top">
          Informational Text
        </div>
      )}
      <div className={`dropdown-form dropdown-form--${size} dropdown-form--${state} ${isOpen ? 'dropdown-form--open' : ''}`}>
        <button
          id={inputId}
          type="button"
          className="dropdown-form__trigger"
          onClick={() => !state && setIsOpen(!isOpen)}
          disabled={state === 'disabled'}
          data-name={`Size=${size}, State=${state}`}
        >
          <span className="dropdown-form__value">
            {selectedOption ? selectedOption.label : placeholder}
          </span>
          <svg
            className={`dropdown-form__chevron ${isOpen ? 'dropdown-form__chevron--open' : ''}`}
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M4 6L8 10L12 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        {isOpen && !state && options.length > 0 && (
          <div className="dropdown-form__menu">
            {options.map((option) => (
              <button
                key={option.value}
                type="button"
                className={`dropdown-form__option ${value === option.value ? 'dropdown-form__option--selected' : ''}`}
                onClick={() => handleChange(option.value)}
              >
                {option.label}
              </button>
            ))}
          </div>
        )}
      </div>
      {bottomInstruction && (
        <div className={`dropdown-form__instruction dropdown-form__instruction--bottom ${state === 'error' ? 'dropdown-form__instruction--error' : ''}`}>
          Informational Text
        </div>
      )}
    </div>
  );
};

export default DropdownForm;

