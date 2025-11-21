import React, { useState } from 'react';
import './ColorSwatch.css';

export interface ColorSwatchProps {
  type?: 'custom & swatch' | 'local & document';
  colors?: string[];
  onColorSelect?: (color: string) => void;
  className?: string;
}

export const ColorSwatch: React.FC<ColorSwatchProps> = ({
  type = 'custom & swatch',
  colors = [
    '#FFEBEE', '#FFF8E1', '#FFFDE7', '#E8F5E9', '#E3F2FD', '#EDE7F6', '#F3E5F5',
    '#FFCDD2', '#FFECB3', '#FFF9C4', '#C8E6C9', '#BBDEFB', '#D1C4E9', '#E1BEE7',
    '#EF9A9A', '#FFE082', '#FFF59D', '#A5D6A7', '#90CAF9', '#B39DDB', '#CE93D8',
  ],
  onColorSelect,
  className = '',
}) => {
  const [activeTab, setActiveTab] = useState<'custom' | 'swatches'>('custom');

  return (
    <div className={`color-swatch color-swatch--${type} ${className}`}>
      <div className="color-swatch__tabs">
        <button
          className={`color-swatch__tab ${activeTab === 'custom' ? 'color-swatch__tab--active' : ''}`}
          onClick={() => setActiveTab('custom')}
        >
          Custom
        </button>
        <button
          className={`color-swatch__tab ${activeTab === 'swatches' ? 'color-swatch__tab--active' : ''}`}
          onClick={() => setActiveTab('swatches')}
        >
          Swatches
        </button>
      </div>
      <div className="color-swatch__grid">
        {colors.map((color, index) => (
          <button
            key={index}
            className="color-swatch__item"
            style={{ backgroundColor: color }}
            onClick={() => onColorSelect?.(color)}
            aria-label={`Select color ${color}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ColorSwatch;

