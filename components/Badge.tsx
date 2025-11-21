import React from 'react';
import './Badge.css';

export interface BadgeProps {
  type?: 'fill' | 'subtle';
  size?: 'small' | 'medium' | 'large' | 'extra-large';
  color?: 'red' | 'blue' | 'yellow' | 'green' | 'pink' | 'lavender' | 'gray';
  icon?: boolean;
  removable?: boolean;
  onRemove?: () => void;
  children: React.ReactNode;
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  type = 'fill',
  size = 'large',
  color = 'red',
  icon = false,
  removable = false,
  onRemove,
  children,
  className = '',
}) => {
  const handleRemove = (e: React.MouseEvent) => {
    e.stopPropagation();
    onRemove?.();
  };

  return (
    <div
      className={`badge badge--${type} badge--${size} badge--${color} ${icon ? 'badge--icon' : ''} ${removable ? 'badge--removable' : ''} ${className}`}
      data-name={`Type=${type}, Size=${size}, Icon=${icon}, Removeable=${removable ? 'on' : 'off'}, Color=${color}`}
    >
      {icon && <div className="badge__icon" />}
      <span className="badge__text">{children}</span>
      {removable && (
        <button
          className="badge__remove"
          onClick={handleRemove}
          aria-label="Remove"
        >
          <div className="badge__remove-icon" />
        </button>
      )}
    </div>
  );
};

export default Badge;

