import React from 'react';
import './Loading.css';

export interface LoadingProps {
  type?: 'loading' | 'progress' | 'error' | 'warning' | 'success';
  progress?: number;
  className?: string;
}

export const Loading: React.FC<LoadingProps> = ({
  type = 'loading',
  progress = 0,
  className = '',
}) => {
  if (type === 'progress') {
    return (
      <div
        className={`loading loading--progress ${className}`}
        data-name={`Type=${type}`}
      >
        <div className="loading__spinner loading__spinner--progress" />
        <span className="loading__progress-text">{progress}%</span>
      </div>
    );
  }

  if (type === 'error') {
    return (
      <div
        className={`loading loading--error ${className}`}
        data-name={`Type=${type}`}
      >
        <div className="loading__circle loading__circle--error">
          <div className="loading__icon loading__icon--error">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 5L15 15M15 5L5 15" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>
      </div>
    );
  }

  if (type === 'warning') {
    return (
      <div
        className={`loading loading--warning ${className}`}
        data-name={`Type=${type}`}
      >
        <div className="loading__circle loading__circle--warning">
          <div className="loading__icon loading__icon--warning">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10 4V10M10 14H10.01" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <circle cx="10" cy="10" r="8" stroke="white" strokeWidth="2"/>
            </svg>
          </div>
        </div>
      </div>
    );
  }

  if (type === 'success') {
    return (
      <div
        className={`loading loading--success ${className}`}
        data-name={`Type=${type}`}
      >
        <div className="loading__circle loading__circle--success">
          <div className="loading__icon loading__icon--success">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6 10L9 13L14 7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <circle cx="10" cy="10" r="8" stroke="white" strokeWidth="2"/>
            </svg>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`loading loading--default ${className}`}
      data-name={`Type=${type}`}
    >
      <div className="loading__spinner" />
    </div>
  );
};

export default Loading;

