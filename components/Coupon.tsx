import React from 'react';
import './Coupon.css';

export interface CouponProps {
  type?: 'gray' | 'stroke' | 'color';
  size?: 'large' | 'small';
  children?: React.ReactNode;
  className?: string;
}

export const Coupon: React.FC<CouponProps> = ({
  type = 'gray',
  size = 'large',
  children = 'HAPPYPIZZA30',
  className = '',
}) => {
  return (
    <div
      className={`coupon coupon--${type} coupon--${size} ${className}`}
      data-name={`Type=${type}, Size=${size}`}
    >
      <p className="coupon__text">{children}</p>
    </div>
  );
};

export default Coupon;

