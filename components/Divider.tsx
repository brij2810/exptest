import React from 'react';
import './Divider.css';

export interface DividerProps {
  align?: 'none' | 'first' | 'second' | 'last';
  rotate?: boolean;
  text?: string;
  className?: string;
}

export const Divider: React.FC<DividerProps> = ({
  align = 'none',
  rotate = false,
  text,
  className = '',
}) => {
  if (rotate) {
    return (
      <div
        className={`divider divider--rotate divider--${align} ${className}`}
        data-name={`Align=${align}, Rotate=on`}
      >
        <div className="divider__line divider__line--vertical" />
        {text && (
          <div className={`divider__text divider__text--${align}`}>
            {text}
          </div>
        )}
      </div>
    );
  }

  return (
    <div
      className={`divider divider--${align} ${className}`}
      data-name={`Align=${align}, Rotate=off`}
    >
      <div className="divider__line divider__line--horizontal" />
      {text && (
        <div className={`divider__text divider__text--${align}`}>
          {text}
        </div>
      )}
    </div>
  );
};

export default Divider;

