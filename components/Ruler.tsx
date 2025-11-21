import React from 'react';
import './Ruler.css';

export interface RulerProps {
  position?: 'vertical' | 'horizontal';
  size?: '8px' | '16px';
  text?: 'Left' | 'right' | 'top' | 'bottom';
  className?: string;
}

export const Ruler: React.FC<RulerProps> = ({
  position = 'vertical',
  size = '8px',
  text = 'Left',
  className = '',
}) => {
  const sizeValue = parseInt(size.replace('px', ''));
  const positionClass = `ruler--position-${position}`;
  const sizeClass = `ruler--size-${sizeValue}`;
  const textClass = `ruler--text-${text.toLowerCase()}`;

  return (
    <div
      className={`ruler ${positionClass} ${sizeClass} ${textClass} ${className}`}
      data-name={`Position=${position}, Size=${size}, Text=${text}`}
    >
      <div className="ruler__indicator">
        <div className="ruler__top-indicator" />
        <div className="ruler__bottom-indicator" />
        <div className="ruler__line" />
      </div>
      <div className="ruler__label">
        <p>{sizeValue}</p>
      </div>
    </div>
  );
};

export default Ruler;

