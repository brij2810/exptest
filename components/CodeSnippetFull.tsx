import React from 'react';
import './CodeSnippetFull.css';

export interface CodeSnippetFullProps {
  type?: 'dark' | 'bright';
  code?: string;
  onCopy?: () => void;
  className?: string;
}

export const CodeSnippetFull: React.FC<CodeSnippetFullProps> = ({
  type = 'dark',
  code = `intent:#Intent;
   action=com.squareup.pos.action.CHARGE;
    package=com.squareup;
    S.browser_fallback_url=https://my.website.com/index.html;
S.com.squareup.pos.WEB_CALLBACK_URI=https://my.website.com/index.html;

    S.com.squareup.pos.CLIENT_ID=sq0ids-yourClientId;
    S.com.squareup.pos.API_VERSION=v2.0;
    i.com.squareup.pos.TOTAL_AMOUNT=100;
    S.com.squareup.pos.CURRENCY_CODE=USD;

S.com.squareup.pos.TENDER_TYPES=com.squareup.pos.TENDER_CARD,com.squareup.pos.TENDER_CASH;
    end">Start Transaction</a>`,
  onCopy,
  className = '',
}) => {
  const lineNumbers = Array.from({ length: 20 }, (_, i) => i + 1);

  return (
    <div
      className={`code-snippet-full code-snippet-full--${type} ${className}`}
      data-name={`Type=${type}`}
    >
      <div className="code-snippet-full__content">
        <div className="code-snippet-full__line-numbers">
          {lineNumbers.map((num) => (
            <p key={num} className="code-snippet-full__line-number">
              {num}
            </p>
          ))}
        </div>
        <div className="code-snippet-full__code-wrapper">
          <div className="code-snippet-full__code">
            <pre>
              <code>{code}</code>
            </pre>
          </div>
          {onCopy && (
            <button className="code-snippet-full__copy" onClick={onCopy} aria-label="Copy code">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="9" y="9" width="13" height="13" rx="2" stroke="currentColor" strokeWidth="2"/>
                <path d="M5 15H4C2.89543 15 2 14.1046 2 13V4C2 2.89543 2.89543 2 4 2H13C14.1046 2 15 2.89543 15 4V5" stroke="currentColor" strokeWidth="2"/>
              </svg>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default CodeSnippetFull;

