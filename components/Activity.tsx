import React from 'react';
import './Activity.css';

export interface ActivityProps {
  variation?: '1' | '2' | '3' | '4' | '5' | '6';
  avatar?: React.ReactNode;
  name?: string;
  action?: string;
  target?: string;
  timestamp?: string;
  message?: string;
  className?: string;
}

export const Activity: React.FC<ActivityProps> = ({
  variation = '1',
  avatar,
  name = 'John Doe',
  action,
  target,
  timestamp = 'Just now',
  message,
  className = '',
}) => {
  const renderContent = () => {
    switch (variation) {
      case '1':
        return (
          <>
            <div className="activity__content">
              <p className="activity__text">
                <span className="activity__text--bold">{name}</span>{' '}
                <span className="activity__text--muted">Edited the file and modified</span>
              </p>
            </div>
            <div className="activity__timestamp">{timestamp}</div>
          </>
        );
      case '2':
        return (
          <>
            <div className="activity__content">
              <p className="activity__text">
                <span className="activity__text--bold">{name}</span>{' '}
                <span className="activity__text--muted">Paid to the</span>{' '}
                <span className="activity__text--link">{target}</span>
              </p>
            </div>
            <div className="activity__timestamp">{timestamp}</div>
          </>
        );
      case '3':
        return (
          <>
            <div className="activity__content activity__content--multiline">
              <p className="activity__text">
                {name} <span className="activity__text--muted">commended</span>
              </p>
              <p className="activity__text activity__text--muted">
                {message || "Hello! i'm taking care of this product of Design. Check "}
                <span className="activity__text--link">@Arijona</span>
                {' '}for the update.
              </p>
              <p className="activity__timestamp activity__timestamp--inline">{timestamp}</p>
            </div>
          </>
        );
      case '4':
        return (
          <>
            <div className="activity__content">
              <p className="activity__text">
                <span className="activity__text--bold">{name}</span>{' '}
                <span className="activity__text--muted">added a .doc file to</span>{' '}
                <span className="activity__text--link">{target}</span>
              </p>
            </div>
            <div className="activity__timestamp">{timestamp}</div>
          </>
        );
      case '5':
        return (
          <>
            <div className="activity__content">
              <p className="activity__text">
                <span className="activity__text--bold">{name}</span>{' '}
                <span className="activity__text--muted">added a .doc file to</span>{' '}
                <span className="activity__text--link">{target}</span>
              </p>
            </div>
            <div className="activity__timestamp">{timestamp}</div>
          </>
        );
      case '6':
        return (
          <>
            <div className="activity__content activity__content--vertical">
              <p className="activity__text activity__text--bold">{name}</p>
              <p className="activity__text">
                {action || 'Booked a meeting'}{' '}
                <span className="activity__text--link">{target}</span>
              </p>
            </div>
            <div className="activity__timestamp">{timestamp}</div>
          </>
        );
      default:
        return null;
    }
  };

  const renderIcon = () => {
    if (variation === '2') {
      return (
        <div className="activity__icon-container activity__icon-container--check">
          <div className="activity__icon activity__icon--check" />
        </div>
      );
    }
    if (variation === '3' || variation === '4') {
      return (
        <div className="activity__icon-container activity__icon-container--overlay">
          <div className="activity__icon activity__icon--background" />
          <div className={`activity__icon activity__icon--${variation === '3' ? 'message' : 'folder'}`} />
        </div>
      );
    }
    return null;
  };

  return (
    <div className={`activity activity--variation-${variation} ${className}`} data-name={`Type=Activity, variation=${variation}`}>
      {variation === '2' || variation === '3' || variation === '4' ? (
        renderIcon()
      ) : (
        avatar || <div className="activity__avatar" />
      )}
      {renderContent()}
    </div>
  );
};

export default Activity;

