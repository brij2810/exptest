import React from 'react';
import './Link.css';

export interface LinkProps {
  size?: 'small' | 'large';
  arrow?: boolean;
  underline?: boolean;
  state?: 'default' | 'hover' | 'focused';
  href?: string;
  children?: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

export const Link: React.FC<LinkProps> = ({
  size = 'small',
  arrow = false,
  underline = false,
  state = 'default',
  href,
  children = 'Link to Redirect',
  onClick,
  className = '',
}) => {
  const handleClick = (e: React.MouseEvent) => {
    if (onClick) {
      e.preventDefault();
      onClick();
    }
  };

  const linkContent = (
    <>
      <span className="link__text">{children}</span>
      {arrow && (
        <span className="link__arrow">
          <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 2L7 5.5L4 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </span>
      )}
    </>
  );

  const linkProps = {
    className: `link link--${size} link--${state} ${arrow ? 'link--arrow' : ''} ${underline ? 'link--underline' : ''} ${className}`,
    onClick: onClick ? handleClick : undefined,
    'data-name': `Size=${size}, Arrow=${arrow}, Underline=${underline}, State=${state}`,
  };

  if (href) {
    return (
      <a href={href} {...linkProps}>
        {linkContent}
      </a>
    );
  }

  return (
    <div {...linkProps} role="link" tabIndex={0} onKeyDown={(e) => { if (e.key === 'Enter' && onClick) onClick(); }}>
      {linkContent}
    </div>
  );
};

export default Link;

