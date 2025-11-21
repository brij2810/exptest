import React from 'react';
import './Input.css';

export interface InputProps {
  type?: 'base' | 'number' | 'suffix' | 'prefix' | 'suffix-prefix' | 'left-icon' | 'right-icon' | 'copy-link';
  size?: '34' | '40';
  title?: boolean;
  description?: 'none' | 'top' | 'bottom' | 'right';
  state?: 'default' | 'hover' | 'focused' | 'error' | 'disabled';
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
  className?: string;
  prefixIcon?: React.ReactNode;
  suffixIcon?: React.ReactNode;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

export const Input: React.FC<InputProps> = ({
  type = 'base',
  size = '40',
  title = false,
  description = 'none',
  state = 'default',
  placeholder = 'Placeholder',
  value,
  onChange,
  className = '',
  prefixIcon,
  suffixIcon,
  leftIcon,
  rightIcon,
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (state === 'disabled') return;
    onChange?.(e.target.value);
  };

  const inputId = `input-${Math.random().toString(36).substr(2, 9)}`;

  return (
    <div className={`input-wrapper ${className}`}>
      {title && (
        <label htmlFor={inputId} className="input__title">
          Label
        </label>
      )}
      {description === 'top' && (
        <div className="input__description input__description--top">
          Informational Text
        </div>
      )}
      <div className={`input input--${type} input--${size} input--${state} ${description !== 'none' ? 'input--has-description' : ''}`}>
        {type === 'left-icon' && leftIcon && (
          <span className="input__icon input__icon--left">{leftIcon}</span>
        )}
        {type === 'prefix' && prefixIcon && (
          <span className="input__icon input__icon--prefix">{prefixIcon}</span>
        )}
        {type === 'suffix-prefix' && prefixIcon && (
          <span className="input__icon input__icon--prefix">{prefixIcon}</span>
        )}
        <input
          id={inputId}
          type={type === 'number' ? 'number' : 'text'}
          className="input__field"
          placeholder={placeholder}
          value={value}
          onChange={handleChange}
          disabled={state === 'disabled'}
          data-name={`Type=${type}, Size=${size}, State=${state}`}
        />
        {type === 'right-icon' && rightIcon && (
          <span className="input__icon input__icon--right">{rightIcon}</span>
        )}
        {type === 'suffix' && suffixIcon && (
          <span className="input__icon input__icon--suffix">{suffixIcon}</span>
        )}
        {type === 'suffix-prefix' && suffixIcon && (
          <span className="input__icon input__icon--suffix">{suffixIcon}</span>
        )}
        {type === 'copy-link' && (
          <button className="input__action" type="button">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6.5 9.5L9.5 6.5M9.5 6.5H6.5M9.5 6.5V9.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        )}
      </div>
      {description === 'bottom' && (
        <div className={`input__description input__description--bottom ${state === 'error' ? 'input__description--error' : ''}`}>
          Informational Text
        </div>
      )}
      {description === 'right' && (
        <div className="input__description input__description--right">
          Informational Text
        </div>
      )}
    </div>
  );
};

export default Input;

