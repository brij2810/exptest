import React from 'react';
import './DropdownCards.css';

export interface DropdownCardItem {
  title: string;
  description?: string;
  image?: string;
  icon?: React.ReactNode;
  onClick?: () => void;
}

export interface DropdownCardsProps {
  variant?: 'card';
  type?: '1' | '2' | '3';
  items?: DropdownCardItem[];
  className?: string;
}

export const DropdownCards: React.FC<DropdownCardsProps> = ({
  variant = 'card',
  type = '1',
  items = [
    { title: 'One', description: 'One' },
    { title: 'One', description: 'One' },
    { title: 'One', description: 'One' },
  ],
  className = '',
}) => {
  return (
    <div
      className={`dropdown-cards dropdown-cards--variant-${variant} dropdown-cards--type-${type} ${className}`}
      data-name={`Variant=${variant}, Type=${type}`}
    >
      {items.map((item, index) => (
        <div
          key={index}
          className={`dropdown-cards__item ${index === 2 && type === '1' ? 'dropdown-cards__item--active' : ''}`}
          onClick={item.onClick}
        >
          {type === '2' || type === '3' ? (
            <>
              {item.image && (
                <div className="dropdown-cards__image">
                  <img src={item.image} alt={item.title} />
                </div>
              )}
              <div className="dropdown-cards__content">
                <div className="dropdown-cards__title">{item.title}</div>
                {item.description && (
                  <div className="dropdown-cards__description">{item.description}</div>
                )}
              </div>
            </>
          ) : (
            <>
              {index === 0 ? (
                <div className="dropdown-cards__item-wrapper">
                  {item.icon && (
                    <div className="dropdown-cards__icon">{item.icon}</div>
                  )}
                  <div className="dropdown-cards__content">
                    <div className="dropdown-cards__title">{item.title}</div>
                    {item.description && (
                      <div className="dropdown-cards__description">{item.description}</div>
                    )}
                  </div>
                </div>
              ) : (
                <>
                  {item.icon && (
                    <div className="dropdown-cards__icon">{item.icon}</div>
                  )}
                  <div className="dropdown-cards__content">
                    <div className="dropdown-cards__title">{item.title}</div>
                    {item.description && (
                      <div className="dropdown-cards__description">{item.description}</div>
                    )}
                  </div>
                </>
              )}
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default DropdownCards;

