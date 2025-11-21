import React from 'react';
import './Textarea.css';

export interface TextareaProps {
  size?: '34' | '40';
  title?: boolean;
  description?: 'none' | 'top' | 'bottom' | 'right';
  state?: 'default' | 'hover' | 'focused' | 'error' | 'disabled';
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
  rows?: number;
  className?: string;
}

export const Textarea: React.FC<TextareaProps> = ({
  size = '40',
  title = false,
  description = 'none',
  state = 'default',
  placeholder = 'Placeholder',
  value,
  onChange,
  rows = 4,
  className = '',
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (state === 'disabled') return;
    onChange?.(e.target.value);
  };

  const textareaId = `textarea-${Math.random().toString(36).substr(2, 9)}`;

  return (
    <div className={`textarea-wrapper ${className}`}>
      {title && (
        <label htmlFor={textareaId} className="textarea__title">
          Label
        </label>
      )}
      {description === 'top' && (
        <div className="textarea__description textarea__description--top">
          Informational Text
        </div>
      )}
      <div className={`textarea textarea--${size} textarea--${state} ${description !== 'none' ? 'textarea--has-description' : ''}`}>
        <textarea
          id={textareaId}
          className="textarea__field"
          placeholder={placeholder}
          value={value}
          onChange={handleChange}
          disabled={state === 'disabled'}
          rows={rows}
          data-name={`Size=${size}, State=${state}`}
        />
      </div>
      {description === 'bottom' && (
        <div className={`textarea__description textarea__description--bottom ${state === 'error' ? 'textarea__description--error' : ''}`}>
          Informational Text
        </div>
      )}
      {description === 'right' && (
        <div className="textarea__description textarea__description--right">
          Informational Text
        </div>
      )}
    </div>
  );
};

export default Textarea;

