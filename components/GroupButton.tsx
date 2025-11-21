import React from 'react';
import './GroupButton.css';
import { Button, ButtonProps } from './Button';

export interface GroupButtonProps {
  type?: 'primary' | 'secondary' | 'icon-primary' | 'icon-secondary';
  size?: 'small' | 'medium' | 'large' | 'extra-large';
  buttons?: Array<{
    label?: string;
    onClick?: () => void;
    icon?: ButtonProps['icon'];
  }>;
  className?: string;
}

export const GroupButton: React.FC<GroupButtonProps> = ({
  type = 'primary',
  size = 'extra-large',
  buttons = [
    { label: 'Button' },
    { label: 'Button' },
    { label: 'Button' },
  ],
  className = '',
}) => {
  return (
    <div
      className={`group-button group-button--${type} group-button--${size} ${className}`}
      data-name={`Type=${type}, Size=${size}`}
    >
      {buttons.map((button, index) => (
        <React.Fragment key={index}>
          <Button
            type={type}
            size={size}
            icon={button.icon}
            onClick={button.onClick}
            className="group-button__item"
          >
            {button.label}
          </Button>
          {index < buttons.length - 1 && <div className="group-button__divider" />}
        </React.Fragment>
      ))}
    </div>
  );
};

export default GroupButton;

