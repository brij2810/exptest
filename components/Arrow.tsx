import React from 'react';
import './Arrow.css';

export interface ArrowProps {
  type?: 'arrow vertical' | 'arrow label vetical ball' | 'arrow horizontal' | 'arrow label vertical' | 'arrow vertical ball' | 'arrow horizontal ball' | 'arrow label horizontal ball' | 'arrow label horizontal';
  rotate?: boolean;
  label?: string;
  className?: string;
}

export const Arrow: React.FC<ArrowProps> = ({
  type = 'arrow horizontal',
  rotate = false,
  label = 'Label',
  className = '',
}) => {
  const rotateClass = rotate ? 'arrow--rotate' : '';
  const typeClass = `arrow--type-${type.replace(/\s+/g, '-')}`;

  return (
    <div
      className={`arrow ${typeClass} ${rotateClass} ${className}`}
      data-name={`Type=${type}, Rotate=${rotate ? 'on' : 'off'}`}
    >
      {type.includes('ball') && (
        <>
          <div className="arrow__oval-large" />
          <div className="arrow__path" />
          <div className="arrow__oval-small" />
          <div className="arrow__arrowhead" />
        </>
      )}
      {type.includes('label') && !type.includes('ball') && (
        <>
          <div className="arrow__path" />
          <div className="arrow__arrowhead" />
          <div className="arrow__label">
            <div className="arrow__label-text">{label}</div>
          </div>
        </>
      )}
      {type.includes('label') && type.includes('ball') && (
        <>
          <div className="arrow__arrow-ball" />
          <div className="arrow__label">
            <div className="arrow__label-text">{label}</div>
          </div>
        </>
      )}
      {!type.includes('label') && !type.includes('ball') && (
        <>
          <div className="arrow__path" />
          <div className="arrow__arrowhead" />
        </>
      )}
    </div>
  );
};

export default Arrow;

