import React from 'react';
import './Avatar.css';

export interface AvatarProps {
  type?: 'subtle' | 'fill' | 'icon' | 'image';
  size?: '20px' | '24px' | '32px' | '48px' | '64px' | '80px' | '96px';
  shape?: 'circular' | 'rounded';
  pill?: boolean;
  status?: boolean;
  src?: string;
  alt?: string;
  initials?: string;
  icon?: React.ReactNode;
  className?: string;
}

export const Avatar: React.FC<AvatarProps> = ({
  type = 'subtle',
  size = '96px',
  shape = 'circular',
  pill = false,
  status = false,
  src,
  alt,
  initials,
  icon,
  className = '',
}) => {
  const sizeClass = `avatar--size-${size.replace('px', '')}`;
  const shapeClass = `avatar--shape-${shape}`;
  const pillClass = pill ? 'avatar--pill' : '';
  const statusClass = status ? 'avatar--status' : '';
  const typeClass = `avatar--type-${type}`;

  return (
    <div
      className={`avatar ${sizeClass} ${shapeClass} ${pillClass} ${statusClass} ${typeClass} ${className}`}
      data-name={`Type=${type}, Size=${size}, Shape=${shape}, Pill=${pill ? 'on' : 'off'}, Status=${status ? 'on' : 'off'}`}
    >
      {type === 'image' && src ? (
        <img src={src} alt={alt || ''} className="avatar__image" />
      ) : type === 'icon' && icon ? (
        <div className="avatar__icon-container">{icon}</div>
      ) : initials ? (
        <span className="avatar__initials">{initials}</span>
      ) : (
        <div className="avatar__placeholder" />
      )}
      {status && <div className="avatar__status-indicator" />}
    </div>
  );
};

export default Avatar;

