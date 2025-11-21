import React from 'react';
import './Checkbox.css';

export interface CheckboxProps {
  type?: 'icon' | 'text';
  status?: 'unchecked' | 'checked' | 'indeterminate';
  text?: boolean;
  state?: 'default' | 'hover' | 'focused' | 'error' | 'disabled';
  size?: 'small' | 'large';
  label?: string;
  onChange?: (checked: boolean) => void;
  className?: string;
}

export const Checkbox: React.FC<CheckboxProps> = ({
  type = 'icon',
  status = 'unchecked',
  text = false,
  state = 'default',
  size = 'large',
  label = 'Option',
  onChange,
  className = '',
}) => {
  const handleClick = () => {
    if (state === 'disabled') return;
    const newStatus = status === 'checked' ? 'unchecked' : 'checked';
    onChange?.(newStatus === 'checked');
  };

  const getCheckboxSize = () => {
    return size === 'small' ? 16 : 20;
  };

  const checkboxSize = getCheckboxSize();

  return (
    <div
      className={`checkbox checkbox--${type} checkbox--${status} checkbox--${state} checkbox--${size} ${text ? 'checkbox--text' : ''} ${className}`}
      onClick={handleClick}
      data-name={`Type=${type}, status=${status}, Text=${text}, state=${state}, Size=${size}`}
    >
      <div className="checkbox__input" style={{ width: checkboxSize, height: checkboxSize }}>
        {status === 'checked' && (
          <div className="checkbox__check-icon" />
        )}
        {status === 'indeterminate' && (
          <div className="checkbox__minus-icon" />
        )}
      </div>
      {text && (
        <label className="checkbox__label">{label}</label>
      )}
    </div>
  );
};

export default Checkbox;

