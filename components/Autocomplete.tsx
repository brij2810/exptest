import React from 'react';
import './Autocomplete.css';

export interface AutocompleteProps {
  variant?: 'text' | 'icon' | 'avatar' | 'image';
  icon?: boolean;
  avatar?: boolean;
  image?: boolean;
  state?: 'default' | 'hover';
  primaryText?: string;
  secondaryText?: string;
  avatarSrc?: string;
  imageSrc?: string;
  iconElement?: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

export const Autocomplete: React.FC<AutocompleteProps> = ({
  variant = 'text',
  icon = false,
  avatar = false,
  image = false,
  state = 'default',
  primaryText = 'One',
  secondaryText = 'One',
  avatarSrc,
  imageSrc,
  iconElement,
  onClick,
  className = '',
}) => {
  const isHover = state === 'hover';

  return (
    <div
      className={`autocomplete autocomplete--${variant} autocomplete--${state} ${icon ? 'autocomplete--icon' : ''} ${avatar ? 'autocomplete--avatar' : ''} ${image ? 'autocomplete--image' : ''} ${className}`}
      onClick={onClick}
      data-name={`Variant=${variant}, Icon=${icon}, Avatar=${avatar}, Image=${image}, State=${state}`}
    >
      {icon && iconElement && (
        <div className="autocomplete__icon-container">
          {iconElement}
        </div>
      )}
      {avatar && avatarSrc && (
        <img src={avatarSrc} alt="" className="autocomplete__avatar" />
      )}
      {image && imageSrc && (
        <img src={imageSrc} alt="" className="autocomplete__image" />
      )}
      <div className="autocomplete__text-container">
        <p className="autocomplete__primary-text">{primaryText}</p>
        {secondaryText && (
          <p className="autocomplete__secondary-text">{secondaryText}</p>
        )}
      </div>
    </div>
  );
};

export default Autocomplete;

