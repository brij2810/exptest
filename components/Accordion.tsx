import React, { useState } from 'react';
import './Accordion.css';

export interface AccordionProps {
  type?: 'stroke' | 'card';
  state?: 'default' | 'hover' | 'active' | 'disabled';
  bottomDivider?: boolean;
  topDivider?: boolean;
  title?: string;
  content?: string;
  onToggle?: (isOpen: boolean) => void;
  className?: string;
}

export const Accordion: React.FC<AccordionProps> = ({
  type = 'stroke',
  state = 'default',
  bottomDivider = true,
  topDivider = false,
  title = 'Accordion',
  content = 'Business-to-consumer business plan investor focus alpha conversion ecosystem monetization',
  onToggle,
  className = '',
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    if (state === 'disabled') return;
    const newIsOpen = !isOpen;
    setIsOpen(newIsOpen);
    onToggle?.(newIsOpen);
  };

  const isActive = state === 'active' || isOpen;
  const chevronIcon = isActive ? 'chevron-down' : 'chevron-right';

  const baseClasses = `accordion accordion--${type} accordion--${state}`;
  const dividerClasses = [
    topDivider && 'accordion--top-divider',
    bottomDivider && 'accordion--bottom-divider',
  ].filter(Boolean).join(' ');

  if (type === 'card') {
    return (
      <div
        className={`${baseClasses} ${dividerClasses} ${className}`}
        onClick={handleToggle}
        data-name={`Type=${type}, State=${state}, Top divider=${topDivider ? 'on' : 'off'}, Bottom divider=${bottomDivider ? 'on' : 'off'}`}
      >
        <div className="accordion__header">
          <span className={`accordion__icon accordion__icon--${chevronIcon}`} />
          <p className="accordion__title">{title}</p>
        </div>
        {isActive && content && (
          <p className="accordion__content">{content}</p>
        )}
      </div>
    );
  }

  // stroke type
  return (
    <div
      className={`${baseClasses} ${dividerClasses} ${className}`}
      onClick={handleToggle}
      data-name={`Type=${type}, State=${state}, Top divider=${topDivider ? 'on' : 'off'}, Bottom divider=${bottomDivider ? 'on' : 'off'}`}
    >
      {topDivider && <div className="accordion__divider accordion__divider--top" />}
      <div className="accordion__header">
        <span className={`accordion__icon accordion__icon--${chevronIcon}`} />
        <p className="accordion__title">{title}</p>
      </div>
      {isActive && content && (
        <p className="accordion__content">{content}</p>
      )}
      {bottomDivider && <div className="accordion__divider accordion__divider--bottom" />}
    </div>
  );
};

export default Accordion;

