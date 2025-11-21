import React, { useState } from 'react';
import './Select.css';

export interface SelectProps {
  size?: '34' | '40';
  title?: boolean;
  topInstruction?: boolean;
  bottomInstruction?: boolean;
  state?: 'default' | 'hover' | 'focused' | 'error' | 'disabled';
  options?: Array<{ value: string; label: string }>;
  value?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  multiple?: boolean;
  className?: string;
}

export const Select: React.FC<SelectProps> = ({
  size = '40',
  title = false,
  topInstruction = false,
  bottomInstruction = false,
  state = 'default',
  options = [],
  value,
  onChange,
  placeholder = 'Select option',
  multiple = false,
  className = '',
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const selectedOptions = multiple && value
    ? value.split(',').filter(Boolean)
    : value ? [value] : [];
  
  const selectedOption = !multiple ? options.find(opt => opt.value === value) : null;

  const handleChange = (newValue: string) => {
    if (state === 'disabled') return;
    
    if (multiple) {
      const currentValues = selectedOptions;
      const newValues = currentValues.includes(newValue)
        ? currentValues.filter(v => v !== newValue)
        : [...currentValues, newValue];
      onChange?.(newValues.join(','));
    } else {
      onChange?.(newValue);
      setIsOpen(false);
    }
  };

  const inputId = `select-${Math.random().toString(36).substr(2, 9)}`;

  return (
    <div className={`select-wrapper ${className}`}>
      {title && (
        <label htmlFor={inputId} className="select__title">
          Label
        </label>
      )}
      {topInstruction && (
        <div className="select__instruction select__instruction--top">
          Informational Text
        </div>
      )}
      <div className={`select select--${size} select--${state} ${isOpen ? 'select--open' : ''} ${multiple ? 'select--multiple' : ''}`}>
        <button
          id={inputId}
          type="button"
          className="select__trigger"
          onClick={() => state !== 'disabled' && setIsOpen(!isOpen)}
          disabled={state === 'disabled'}
          data-name={`Size=${size}, State=${state}, Multiple=${multiple}`}
        >
          <span className="select__value">
            {multiple
              ? selectedOptions.length > 0
                ? `${selectedOptions.length} selected`
                : placeholder
              : selectedOption
              ? selectedOption.label
              : placeholder}
          </span>
          <svg
            className={`select__chevron ${isOpen ? 'select__chevron--open' : ''}`}
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
          <div className="select__menu">
            {options.map((option) => {
              const isSelected = multiple
                ? selectedOptions.includes(option.value)
                : value === option.value;
              
              return (
                <button
                  key={option.value}
                  type="button"
                  className={`select__option ${isSelected ? 'select__option--selected' : ''}`}
                  onClick={() => handleChange(option.value)}
                >
                  {multiple && (
                    <span className="select__checkbox">
                      {isSelected && (
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M10 3L4.5 8.5L2 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      )}
                    </span>
                  )}
                  <span className="select__option-text">{option.label}</span>
                </button>
              );
            })}
          </div>
        )}
      </div>
      {bottomInstruction && (
        <div className={`select__instruction select__instruction--bottom ${state === 'error' ? 'select__instruction--error' : ''}`}>
          Informational Text
        </div>
      )}
    </div>
  );
};

export default Select;

