import React from 'react';
import './Capacity.css';

export interface CapacityProps {
  type?: 'green' | 'orange' | 'red' | 'blue' | 'lavenda' | 'gray';
  className?: string;
}

export const Capacity: React.FC<CapacityProps> = ({
  type = 'green',
  className = '',
}) => {
  return (
    <div
      className={`capacity capacity--${type} ${className}`}
      data-name={`Type=${type}`}
    >
      <div className="capacity__bar" />
    </div>
  );
};

export default Capacity;

