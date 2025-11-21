import React from 'react';
import './Footnote.css';

export interface FootnoteProps {
  position?: 'left' | 'right' | 'top' | 'bottom';
  text?: string;
  className?: string;
}

export const Footnote: React.FC<FootnoteProps> = ({
  position = 'left',
  text = 'Text',
  className = '',
}) => {
  return (
    <div
      className={`footnote footnote--position-${position} ${className}`}
      data-name={`Position=${position}`}
    >
      {position === 'top' && (
        <>
          <p className="footnote__text">{text}</p>
          <div className="footnote__line footnote__line--top" />
        </>
      )}
      {position === 'bottom' && (
        <>
          <div className="footnote__line footnote__line--bottom" />
          <p className="footnote__text">{text}</p>
        </>
      )}
      {position === 'right' && (
        <>
          <div className="footnote__line footnote__line--right" />
          <p className="footnote__text">{text}</p>
        </>
      )}
      {position === 'left' && (
        <>
          <p className="footnote__text">{text}</p>
          <div className="footnote__line footnote__line--left" />
        </>
      )}
    </div>
  );
};

export default Footnote;

