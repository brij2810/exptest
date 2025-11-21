import React from 'react';
import './Header.css';
import { Avatar } from './Avatar';

export interface HeaderProps {
  onSearch?: (value: string) => void;
  onNotificationClick?: () => void;
  onHelpClick?: () => void;
  profileImage?: string;
  profileName?: string;
  className?: string;
}

export const Header: React.FC<HeaderProps> = ({
  onSearch,
  onNotificationClick,
  onHelpClick,
  profileImage,
  profileName,
  className = '',
}) => {
  const searchIcon = (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="8" cy="8" r="6" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M13 13L16 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  );

  const notificationIcon = (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10 2C7.24 2 5 4.24 5 7V11L3 13V14H17V13L15 11V7C15 4.24 12.76 2 10 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M8 14V15C8 16.1 8.9 17 10 17C11.1 17 12 16.1 12 15V14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );

  const helpIcon = (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="10" cy="10" r="8" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M10 7V10M10 13H10.01" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  );

  return (
    <header className={`header ${className}`}>
      <div className="header__content">
        <div className="header__actions">
          <div className="header__search">
            <div className="header__search-input">
              <span className="header__search-icon">{searchIcon}</span>
              <input
                type="text"
                className="header__search-field"
                placeholder="Search (/) for content, media, rules & more"
                onChange={(e) => onSearch?.(e.target.value)}
              />
            </div>
          </div>
          <button
            className="header__button"
            onClick={onNotificationClick}
            aria-label="Notifications"
          >
            {notificationIcon}
          </button>
          <button
            className="header__button"
            onClick={onHelpClick}
            aria-label="Help"
          >
            {helpIcon}
          </button>
          <div className="header__profile">
            <Avatar
              type="image"
              size="24px"
              shape="rounded"
              src={profileImage}
              alt={profileName || 'Profile'}
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

