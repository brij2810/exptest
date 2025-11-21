import React from 'react';
import './ChatBox.css';

export interface ChatBoxProps {
  state?: 'default' | 'hover' | 'focused' | 'error' | 'disabled';
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
  onSend?: () => void;
  className?: string;
}

export const ChatBox: React.FC<ChatBoxProps> = ({
  state = 'default',
  placeholder = 'Send a message...',
  value = '',
  onChange,
  onSend,
  className = '',
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value);
  };

  return (
    <div
      className={`chat-box chat-box--${state} ${className}`}
      data-name={`State=${state}`}
    >
      <button className="chat-box__attach" type="button" aria-label="Attach file">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" />
          <path d="M12 8V16M8 12H16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      </button>
      <div className="chat-box__input-container">
        <button className="chat-box__emoji" type="button" aria-label="Emoji">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="1.5" />
            <path d="M8 14C8 14 9.5 16 12 16C14.5 16 16 14 16 14M9 9H9.01M15 9H15.01" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </button>
        <input
          type="text"
          className="chat-box__input"
          placeholder={placeholder}
          value={value}
          onChange={handleChange}
          disabled={state === 'disabled'}
        />
        <button className="chat-box__send" type="button" onClick={onSend} aria-label="Send message">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M22 2L11 13M22 2L15 22L11 13M22 2L2 9L11 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default ChatBox;

