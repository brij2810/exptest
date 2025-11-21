import React from 'react';
import './Drag.css';

export interface DragProps {
  type?: 'text' | 'text & paragraph' | 'image' | 'image & paragraph';
  drag?: boolean;
  title?: string;
  description?: string;
  imageUrl?: string;
  onMoveUp?: () => void;
  onMoveDown?: () => void;
  className?: string;
}

export const Drag: React.FC<DragProps> = ({
  type = 'text',
  drag = false,
  title = 'Item',
  description,
  imageUrl,
  onMoveUp,
  onMoveDown,
  className = '',
}) => {
  return (
    <div
      className={`drag drag--${type} ${drag ? 'drag--active' : ''} ${className}`}
      data-name={`Type=${type}, Drag=${drag ? 'on' : 'off'}`}
    >
      <div className="drag__handle">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9 5C9 6.10457 8.10457 7 7 7C5.89543 7 5 6.10457 5 5C5 3.89543 5.89543 3 7 3C8.10457 3 9 3.89543 9 5Z" fill="currentColor" />
          <path d="M9 12C9 13.1046 8.10457 14 7 14C5.89543 14 5 13.1046 5 12C5 10.8954 5.89543 10 7 10C8.10457 10 9 10.8954 9 12Z" fill="currentColor" />
          <path d="M9 19C9 20.1046 8.10457 21 7 21C5.89543 21 5 20.1046 5 19C5 17.8954 5.89543 17 7 17C8.10457 17 9 17.8954 9 19Z" fill="currentColor" />
          <path d="M19 5C19 6.10457 18.1046 7 17 7C15.8954 7 15 6.10457 15 5C15 3.89543 15.8954 3 17 3C18.1046 3 19 3.89543 19 5Z" fill="currentColor" />
          <path d="M19 12C19 13.1046 18.1046 14 17 14C15.8954 14 15 13.1046 15 12C15 10.8954 15.8954 10 17 10C18.1046 10 19 10.8954 19 12Z" fill="currentColor" />
          <path d="M19 19C19 20.1046 18.1046 21 17 21C15.8954 21 15 20.1046 15 19C15 17.8954 15.8954 17 17 17C18.1046 17 19 17.8954 19 19Z" fill="currentColor" />
        </svg>
      </div>
      <div className="drag__content">
        {(type === 'image' || type === 'image & paragraph') && imageUrl && (
          <div className="drag__image">
            <img src={imageUrl} alt={title} />
          </div>
        )}
        <div className="drag__text">
          <p className="drag__title">{title}</p>
          {(type === 'text & paragraph' || type === 'image & paragraph') && description && (
            <p className="drag__description">{description}</p>
          )}
        </div>
      </div>
      {drag && (
        <div className="drag__controls">
          <button className="drag__control drag__control--up" onClick={onMoveUp} aria-label="Move up">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18 15L12 9L6 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <div className="drag__divider" />
          <button className="drag__control drag__control--down" onClick={onMoveDown} aria-label="Move down">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      )}
    </div>
  );
};

export default Drag;

