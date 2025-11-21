import React from 'react';
import './ChatLoading.css';

export interface ChatLoadingProps {
  className?: string;
}

export const ChatLoading: React.FC<ChatLoadingProps> = ({
  className = '',
}) => {
  return (
    <div
      className={`chat-loading ${className}`}
      data-name="Chat loading"
    >
      <div className="chat-loading__spinner">
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="16" cy="16" r="14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeDasharray="44" strokeDashoffset="11" />
        </svg>
      </div>
    </div>
  );
};

export default ChatLoading;

