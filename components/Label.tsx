import React from 'react';
import './Label.css';

export interface LabelProps {
  type?: 'Text' | 'Number';
  state?: 'fill' | 'stroke';
  text?: string | number;
  className?: string;
}

export const Label: React.FC<LabelProps> = ({
  type = 'Text',
  state = 'fill',
  text,
  className = '',
}) => {
  const displayText = text !== undefined 
    ? String(text) 
    : type === 'Number' 
      ? '1' 
      : 'Label';

  return (
    <div
      className={`label label--type-${type.toLowerCase()} label--state-${state} ${className}`}
      data-name={`Type=${type}, State=${state}`}
    >
      <div className="label__content">
        <div className="label__text">{displayText}</div>
      </div>
    </div>
  );
};

export default Label;

