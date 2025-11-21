import React from 'react';
import './Carousel.css';

export interface CarouselProps {
  type?: 'rounded' | 'rectangular' | 'circular';
  state?: boolean;
  size?: 'small' | 'large';
  className?: string;
}

export const Carousel: React.FC<CarouselProps> = ({
  type = 'rounded',
  state = true,
  size = 'large',
  className = '',
}) => {
  return (
    <div
      className={`carousel carousel--${type} carousel--${state ? 'active' : 'inactive'} carousel--${size} ${className}`}
      data-name={`Type=${type}, State=${state ? 'active' : 'inactive'}, Size=${size}`}
    />
  );
};

export default Carousel;

