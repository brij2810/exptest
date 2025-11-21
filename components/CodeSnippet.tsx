import React from 'react';
import './CodeSnippet.css';

export interface CodeSnippetProps {
  type?: 'single-line' | 'multiline' | 'tab';
  color?: 'bright' | 'dark';
  code?: string;
  tabs?: Array<{ label: string; active?: boolean }>;
  onCopy?: () => void;
  className?: string;
}

export const CodeSnippet: React.FC<CodeSnippetProps> = ({
  type = 'single-line',
  color = 'bright',
  code = 'fs.unlink(ROLLUP_INPUT_FILE);',
  tabs,
  onCopy,
  className = '',
}) => {
  const defaultTabs = tabs || [
    { label: 'JS', active: true },
    { label: 'HTML', active: false },
    { label: 'CSS', active: false },
  ];

  return (
    <div
      className={`code-snippet code-snippet--${type} code-snippet--${color} ${className}`}
      data-name={`Type=${type}, Color=${color}`}
    >
      {type === 'tab' && (
        <div className="code-snippet__tabs">
          <div className="code-snippet__tabs-header">
            {defaultTabs.map((tab, index) => (
              <div
                key={index}
                className={`code-snippet__tab ${tab.active ? 'code-snippet__tab--active' : ''}`}
              >
                <span className="code-snippet__tab-label">{tab.label}</span>
                {tab.active && <div className="code-snippet__tab-indicator" />}
              </div>
            ))}
          </div>
        </div>
      )}
      <div className="code-snippet__content">
        <pre className="code-snippet__code">
          <code>{code}</code>
        </pre>
        {onCopy && (
          <button className="code-snippet__copy" onClick={onCopy} aria-label="Copy code">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="9" y="9" width="13" height="13" rx="2" stroke="currentColor" strokeWidth="2"/>
              <path d="M5 15H4C2.89543 15 2 14.1046 2 13V4C2 2.89543 2.89543 2 4 2H13C14.1046 2 15 2.89543 15 4V5" stroke="currentColor" strokeWidth="2"/>
            </svg>
          </button>
        )}
      </div>
    </div>
  );
};

export default CodeSnippet;

