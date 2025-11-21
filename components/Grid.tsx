import React from 'react';
import './Grid.css';

export interface GridProps {
  position?: 'horizontal' | 'vertical';
  size?: '4px' | '8px' | '16px' | '24px' | '32px' | '40px' | '48px' | '56px' | '64px';
  className?: string;
}

export const Grid: React.FC<GridProps> = ({
  position = 'horizontal',
  size = '4px',
  className = '',
}) => {
  const sizeValue = parseInt(size.replace('px', ''));

  return (
    <div
      className={`grid grid--position-${position} grid--size-${sizeValue} ${className}`}
      data-name={`Position=${position}, Size=${size}`}
    >
      <div className="grid__base" />
      <div className="grid__label">
        <p>{sizeValue}</p>
      </div>
      <div className="grid__left-line" />
      <div className="grid__right-line" />
    </div>
  );
};

export default Grid;

