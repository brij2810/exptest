import React from 'react';
import './AppIntegration.css';

export interface AppIntegrationProps {
  type?: 'tile' | 'box';
  state?: 'default' | 'hover' | 'add' | 'remove';
  name?: string;
  description?: string;
  icon?: React.ReactNode;
  image?: string;
  onAdd?: () => void;
  onRemove?: () => void;
  onClick?: () => void;
  className?: string;
}

export const AppIntegration: React.FC<AppIntegrationProps> = ({
  type = 'tile',
  state = 'default',
  name = 'Slack',
  description = 'Connected on july 2',
  icon,
  image,
  onAdd,
  onRemove,
  onClick,
  className = '',
}) => {
  if (type === 'box') {
    return (
      <div
        className={`app-integration app-integration--box app-integration--${state} ${className}`}
        onClick={onClick}
        data-name={`Type=${type}, State=${state}`}
      >
        <div className="app-integration__box-background" />
        <div className="app-integration__box-content">
          {image && (
            <div className="app-integration__box-image-container">
              <img src={image} alt={name} className="app-integration__box-image" />
            </div>
          )}
          {icon && <div className="app-integration__box-icon">{icon}</div>}
        </div>
        <p className="app-integration__box-name">{name}</p>
        {state === 'add' && (
          <button className="app-integration__box-button app-integration__box-button--add" onClick={onAdd}>
            Add
          </button>
        )}
        {state === 'remove' && (
          <button className="app-integration__box-button app-integration__box-button--remove" onClick={onRemove}>
            Remove
          </button>
        )}
        {state === 'hover' && (
          <button className="app-integration__box-button app-integration__box-button--select" onClick={onClick}>
            Select
          </button>
        )}
        {state === 'default' && (
          <button className="app-integration__box-button app-integration__box-button--default" onClick={onClick}>
            Button
          </button>
        )}
      </div>
    );
  }

  // tile type
  return (
    <div
      className={`app-integration app-integration--tile app-integration--${state} ${className}`}
      onClick={onClick}
      data-name={`Type=${type}, State=${state}`}
    >
      <div className="app-integration__tile-icon-container">
        {image ? (
          <img src={image} alt={name} className="app-integration__tile-image" />
        ) : (
          <div className="app-integration__tile-icon-background">
            {icon || <div className="app-integration__tile-icon-placeholder" />}
          </div>
        )}
      </div>
      <div className="app-integration__tile-content">
        <p className="app-integration__tile-name">{name}</p>
        <p className="app-integration__tile-description">{description}</p>
      </div>
      {state === 'add' && (
        <button className="app-integration__tile-action app-integration__tile-action--add" onClick={onAdd}>
          <div className="app-integration__tile-action-icon app-integration__tile-action-icon--plus" />
        </button>
      )}
      {state === 'remove' && (
        <button className="app-integration__tile-action app-integration__tile-action--remove" onClick={onRemove}>
          <div className="app-integration__tile-action-icon app-integration__tile-action-icon--minus" />
        </button>
      )}
      {state !== 'add' && state !== 'remove' && (
        <div className="app-integration__tile-chevron" />
      )}
    </div>
  );
};

export default AppIntegration;

