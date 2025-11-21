import React from 'react';
import './InsetText.css';

export interface InsetTextProps {
  title?: string;
  children: React.ReactNode;
  state?: 'success' | 'error' | 'info' | 'warning';
  className?: string;
}

export const InsetText: React.FC<InsetTextProps> = ({
  title,
  children,
  state = 'error',
  className = '',
}) => {
  return (
    <div
      className={`inset-text inset-text--${state} ${className}`}
      data-name={`Title=${title ? 'on' : 'off'}, State=${state}`}
    >
      <div className="inset-text__indicator" />
      <div className="inset-text__content">
        {title && <p className="inset-text__title">{title}</p>}
        <p className="inset-text__text">{children}</p>
      </div>
    </div>
  );
};

export default InsetText;

