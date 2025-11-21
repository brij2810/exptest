import React from 'react';
import './Map.css';

export interface MapProps {
  address?: string;
  city?: string;
  state?: string;
  zipCode?: string;
  country?: string;
  onViewLargerMap?: () => void;
  onGetDirections?: () => void;
  className?: string;
}

export const Map: React.FC<MapProps> = ({
  address = '1 Market St.',
  city = 'San Fransisco',
  state = 'CA',
  zipCode = '94105',
  country = 'USA',
  onViewLargerMap,
  onGetDirections,
  className = '',
}) => {
  return (
    <div className={`map ${className}`} data-name="Map">
      <div className="map__container">
        <div className="map__image">
          {/* Map image placeholder */}
        </div>
        <div className="map__info-card">
          <div className="map__address">
            <h3 className="map__address-line">{address}</h3>
            <p className="map__address-detail">
              {address}, {city}, {state}
            </p>
            <p className="map__address-detail">
              {zipCode}, {country}
            </p>
          </div>
          <div className="map__actions">
            <button className="map__direction-btn" onClick={onGetDirections} aria-label="Get directions">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <span className="map__direction-label">Direction</span>
          </div>
          <button className="map__view-larger" onClick={onViewLargerMap}>
            View Larger Map
          </button>
        </div>
        <div className="map__zoom-controls">
          <button className="map__zoom-btn map__zoom-btn--plus" aria-label="Zoom in">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 5V19M5 12H19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </button>
          <div className="map__zoom-divider" />
          <button className="map__zoom-btn map__zoom-btn--minus" aria-label="Zoom out">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 12H19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Map;

