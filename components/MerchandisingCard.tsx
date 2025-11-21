import React from 'react';
import './MerchandisingCard.css';

export interface MerchandisingCardProps {
  title?: string;
  description?: string;
  imageUrl?: string;
  price?: string;
  pin?: boolean;
  boost?: boolean;
  bury?: boolean;
  slot?: boolean;
  filter?: boolean;
  include?: boolean;
  sort?: boolean;
  className?: string;
}

export const MerchandisingCard: React.FC<MerchandisingCardProps> = ({
  title = 'Product Title',
  description = 'Product description goes here',
  imageUrl,
  price = '$99.99',
  pin = false,
  boost = false,
  bury = false,
  slot = false,
  filter = false,
  include = false,
  sort = false,
  className = '',
}) => {
  return (
    <div className={`merchandising-card ${className}`}>
      <div className="merchandising-card__image">
        {imageUrl ? (
          <img src={imageUrl} alt={title} />
        ) : (
          <div className="merchandising-card__image-placeholder" />
        )}
        {pin && (
          <div className="merchandising-card__badge merchandising-card__badge--pin">
            Pin
          </div>
        )}
        {boost && (
          <div className="merchandising-card__badge merchandising-card__badge--boost">
            Boost
          </div>
        )}
        {bury && (
          <div className="merchandising-card__badge merchandising-card__badge--bury">
            Bury
          </div>
        )}
      </div>
      <div className="merchandising-card__content">
        <h3 className="merchandising-card__title">{title}</h3>
        <p className="merchandising-card__description">{description}</p>
        <div className="merchandising-card__footer">
          <span className="merchandising-card__price">{price}</span>
          {(slot || filter || include || sort) && (
            <div className="merchandising-card__tags">
              {slot && <span className="merchandising-card__tag">Slot</span>}
              {filter && <span className="merchandising-card__tag">Filter</span>}
              {include && <span className="merchandising-card__tag">Include</span>}
              {sort && <span className="merchandising-card__tag">Sort</span>}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MerchandisingCard;

