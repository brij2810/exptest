import React from 'react';
import './Cursor.css';

export interface CursorProps {
  type?: 'default' | 'pointer' | 'text' | 'move' | 'resize' | 'not-allowed' | 'wait' | 'help' | 'crosshair' | 'grab' | 'grabbing';
  className?: string;
}

export const Cursor: React.FC<CursorProps> = ({
  type = 'default',
  className = '',
}) => {
  return (
    <div
      className={`cursor cursor--${type} ${className}`}
      data-name={`Type=${type}`}
      style={{ cursor: type }}
    >
      <div className="cursor__icon" />
    </div>
  );
};

export default Cursor;

