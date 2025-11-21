import React from 'react';
import './Card.css';
import { Badge } from './Badge';

export interface CardProps {
  option?: boolean;
  badge?: boolean;
  size?: 'small' | 'medium' | 'large';
  image?: string;
  title?: string;
  author?: string;
  duration?: string;
  badgeText?: string;
  badgeColor?: 'red' | 'blue' | 'yellow' | 'green' | 'pink' | 'lavender' | 'gray';
  onOptionClick?: () => void;
  onClick?: () => void;
  className?: string;
}

export const Card: React.FC<CardProps> = ({
  option = false,
  badge = false,
  size = 'medium',
  image,
  title = 'Title goes to 2 line for a eye catchy Heading',
  author = 'Joe James',
  duration = '90 minutes watch',
  badgeText = 'Badge',
  badgeColor = 'lavender',
  onOptionClick,
  onClick,
  className = '',
}) => {
  const getSizeClasses = () => {
    switch (size) {
      case 'small':
        return { width: '255px', imageHeight: '190px' };
      case 'large':
        return { width: '540px', imageHeight: '218px' };
      default:
        return { width: '350px', imageHeight: '222px' };
    }
  };

  const sizeClasses = getSizeClasses();

  return (
    <div
      className={`card card--${size} ${className}`}
      onClick={onClick}
      style={{ width: sizeClasses.width }}
      data-name={`Option=${option}, Badge=${badge}, Size=${size}`}
    >
      <div className="card__image-container">
        {image && (
          <div className="card__image-wrapper" style={{ height: sizeClasses.imageHeight }}>
            <img src={image} alt={title} className="card__image" />
          </div>
        )}
        {option && (
          <button
            className="card__option-button"
            onClick={(e) => {
              e.stopPropagation();
              onOptionClick?.();
            }}
            aria-label="More options"
          >
            <div className="card__option-icon" />
          </button>
        )}
        {badge && (
          <div className="card__badge-container">
            <Badge type="fill" size="large" color={badgeColor}>
              {badgeText}
            </Badge>
          </div>
        )}
      </div>
      <div className="card__content">
        <div className="card__header">
          <h3 className="card__title">{title}</h3>
          <p className="card__author">{author}</p>
        </div>
        {size === 'medium' && duration && (
          <p className="card__duration">{duration}</p>
        )}
      </div>
    </div>
  );
};

export default Card;

