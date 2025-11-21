import React from 'react';
import './ChatAttachment.css';

export interface ChatAttachmentProps {
  variant?: 'receiver' | 'sender';
  fileName?: string;
  imageUrl?: string;
  className?: string;
}

export const ChatAttachment: React.FC<ChatAttachmentProps> = ({
  variant = 'receiver',
  fileName = 'File Name.jpg',
  imageUrl,
  className = '',
}) => {
  return (
    <div
      className={`chat-attachment chat-attachment--${variant} ${className}`}
      data-name={`Property 1=${variant}`}
    >
      <div className="chat-attachment__preview">
        {imageUrl ? (
          <img src={imageUrl} alt={fileName} className="chat-attachment__image" />
        ) : (
          <div className="chat-attachment__placeholder" />
        )}
      </div>
      <div className="chat-attachment__info">
        <p className="chat-attachment__filename">{fileName}</p>
      </div>
    </div>
  );
};

export default ChatAttachment;

