import React from 'react';
import './Note.css';

export interface NoteProps {
  text?: string;
  className?: string;
}

export const Note: React.FC<NoteProps> = ({
  text = 'Type something',
  className = '',
}) => {
  return (
    <div
      className={`note ${className}`}
      data-name="Note"
    >
      <div className="note__base" />
      <div className="note__arrowhead" />
      <p className="note__text">{text}</p>
    </div>
  );
};

export default Note;

