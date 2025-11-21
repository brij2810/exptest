import React from 'react';
import './AvatarStacked.css';
import { Avatar, AvatarProps } from './Avatar';

export interface AvatarStackedProps {
  type?: 'avatar' | 'subtle' | 'fill';
  size?: '24px' | '32px' | '48px';
  avatars?: Array<{
    src?: string;
    initials?: string;
    alt?: string;
  }>;
  overflowCount?: number;
  className?: string;
}

export const AvatarStacked: React.FC<AvatarStackedProps> = ({
  type = 'avatar',
  size = '24px',
  avatars = [
    { initials: 'JW' },
    { initials: 'FG' },
    { initials: 'TR' },
    { initials: 'MJ' },
  ],
  overflowCount = 99,
  className = '',
}) => {
  const sizeValue = parseInt(size.replace('px', ''));
  const overlap = sizeValue * 0.875; // ~87.5% overlap
  const visibleCount = type === 'avatar' ? 4 : 4;
  const visibleAvatars = avatars.slice(0, visibleCount);
  const remainingCount = avatars.length - visibleCount;

  const getAvatarProps = (avatar: typeof avatars[0], index: number): Partial<AvatarProps> => {
    if (type === 'subtle') {
      return {
        type: 'subtle',
        size,
        shape: 'circular',
        initials: avatar.initials || '',
      };
    }
    if (type === 'fill') {
      return {
        type: index === 0 ? 'icon' : 'fill',
        size,
        shape: 'circular',
        src: avatar.src,
        initials: avatar.initials,
      };
    }
    return {
      type: 'image',
      size,
      shape: 'circular',
      src: avatar.src,
      alt: avatar.alt,
    };
  };

  return (
    <div
      className={`avatar-stacked avatar-stacked--type-${type} avatar-stacked--size-${sizeValue} ${className}`}
      data-name={`Type=${type}, Size=${size}`}
    >
      {visibleAvatars.map((avatar, index) => (
        <div
          key={index}
          className="avatar-stacked__item"
          style={{
            left: `${index * overlap}px`,
            zIndex: visibleAvatars.length - index,
          }}
        >
          <Avatar {...getAvatarProps(avatar, index)} />
        </div>
      ))}
      {(remainingCount > 0 || overflowCount > 0) && (
        <div
          className="avatar-stacked__overflow"
          style={{
            left: `${visibleAvatars.length * overlap}px`,
            zIndex: 0,
          }}
        >
          <div className="avatar-stacked__overflow-avatar">
            <div className="avatar-stacked__overflow-circle" />
          </div>
          <div className="avatar-stacked__overflow-text">
            +{remainingCount > 0 ? remainingCount : overflowCount}
          </div>
        </div>
      )}
    </div>
  );
};

export default AvatarStacked;

