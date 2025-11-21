import React from 'react';
import './DatePicker.css';

export interface DatePickerProps {
  size?: '34' | '40';
  title?: boolean;
  topInstruction?: boolean;
  bottomInstruction?: boolean;
  state?: 'default' | 'hover' | 'focused' | 'error' | 'disabled';
  value?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  className?: string;
}

export const DatePicker: React.FC<DatePickerProps> = ({
  size = '40',
  title = false,
  topInstruction = false,
  bottomInstruction = false,
  state = 'default',
  value,
  onChange,
  placeholder = 'dd-mm-yyyy',
  className = '',
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (state === 'disabled') return;
    onChange?.(e.target.value);
  };

  const inputId = `datepicker-${Math.random().toString(36).substr(2, 9)}`;

  return (
    <div className={`datepicker-wrapper ${className}`}>
      {title && (
        <label htmlFor={inputId} className="datepicker__title">
          Select a date
        </label>
      )}
      {topInstruction && (
        <div className="datepicker__instruction datepicker__instruction--top">
          Informational Text
        </div>
      )}
      <div className={`datepicker datepicker--${size} datepicker--${state}`}>
        <input
          id={inputId}
          type="text"
          className="datepicker__input"
          placeholder={placeholder}
          value={value}
          onChange={handleChange}
          disabled={state === 'disabled'}
          data-name={`Size=${size}, State=${state}`}
        />
        <div className="datepicker__icon">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 2V4M14 2V4M3 8H17M4 4H16C16.5523 4 17 4.44772 17 5V17C17 17.5523 16.5523 18 16 18H4C3.44772 18 3 17.5523 3 17V5C3 4.44772 3.44772 4 4 4Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>
      {bottomInstruction && (
        <div className={`datepicker__instruction datepicker__instruction--bottom ${state === 'error' ? 'datepicker__instruction--error' : ''}`}>
          Informational Text
        </div>
      )}
    </div>
  );
};

export default DatePicker;

