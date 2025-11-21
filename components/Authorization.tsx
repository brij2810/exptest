import React from 'react';
import './Authorization.css';
import { Button } from './Button';

export interface AuthorizationProps {
  appName?: string;
  appDescription?: string;
  appIcon?: string;
  approvedDate?: string;
  permissions?: string[];
  onAllow?: () => void;
  onCancel?: () => void;
  className?: string;
}

export const Authorization: React.FC<AuthorizationProps> = ({
  appName = 'App by app',
  appDescription = 'App makes it easy to connect 100s of web applications directly to apps.',
  appIcon,
  approvedDate = 'Approved on January 23, 2020',
  permissions = [
    'Can't get enough time',
    'Can't get enough time',
    'Can't get enough time',
    'Can't get enough time',
  ],
  onAllow,
  onCancel,
  className = '',
}) => {
  return (
    <div className={`authorization ${className}`} data-name="Authorization">
      <div className="authorization__card">
        <div className="authorization__header">
          <h2 className="authorization__title">Authorize Zapier</h2>
          <p className="authorization__subtitle">Connecting app will allow access to your account</p>
        </div>
        <div className="authorization__app-info">
          <div className="authorization__app-icon">
            {appIcon ? (
              <img src={appIcon} alt={appName} />
            ) : (
              <div className="authorization__app-icon-placeholder" />
            )}
          </div>
          <div className="authorization__app-details">
            <h3 className="authorization__app-name">{appName}</h3>
            <p className="authorization__app-description">{appDescription}</p>
            <p className="authorization__approved-date">{approvedDate}</p>
          </div>
        </div>
        <div className="authorization__permissions">
          <div className="authorization__divider" />
          <div className="authorization__permissions-content">
            <h3 className="authorization__permissions-title">Authorize Zapier</h3>
            <ul className="authorization__permissions-list">
              {permissions.map((permission, index) => (
                <li key={index} className="authorization__permission-item">
                  {permission}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="authorization__actions">
          <Button type="primary" onClick={onAllow}>
            Allow
          </Button>
          <Button type="secondary" onClick={onCancel}>
            Cancel
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Authorization;

