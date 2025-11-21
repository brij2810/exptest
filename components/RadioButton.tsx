import React from 'react';
import './RadioButton.css';

export interface RadioButtonProps {
  checked?: boolean;
  text?: boolean;
  state?: 'default' | 'hover' | 'focused' | 'error' | 'disabled';
  textSize?: '14' | '16';
  label?: string;
  value?: string;
  name?: string;
  onChange?: (checked: boolean) => void;
  className?: string;
}

export const RadioButton: React.FC<RadioButtonProps> = ({
  checked = false,
  text = false,
  state = 'default',
  textSize = '16',
  label = 'Option',
  value,
  name,
  onChange,
  className = '',
}) => {
  const handleClick = () => {
    if (state === 'disabled') return;
    onChange?.(!checked);
  };

  return (
    <div
      className={`radio-button radio-button--${state} ${checked ? 'radio-button--checked' : ''} ${text ? 'radio-button--has-text' : ''} radio-button--text-${textSize} ${className}`}
      onClick={handleClick}
      data-name={`checked=${checked}, Text=${text}, state=${state}, Text Size=${textSize}`}
    >
      <div className="radio-button__input">
        {checked && (
          <div className="radio-button__dot" />
        )}
      </div>
      {text && (
        <label className="radio-button__label">{label}</label>
      )}
      <input
        type="radio"
        checked={checked}
        value={value}
        name={name}
        onChange={() => {}}
        className="radio-button__native"
        disabled={state === 'disabled'}
      />
    </div>
  );
};

export default RadioButton;

