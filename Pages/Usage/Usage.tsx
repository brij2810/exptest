import React, { useState } from 'react';
import './Usage.css';
import { Header } from '../../components/Header';
import { Sidebar } from '../../components/Sidebar';

export interface UsageProps {
  onNavigate?: (page: 'subscription' | 'invoices' | 'usage') => void;
}

interface StatCardData {
  title: string;
  value: string;
  limit: string;
  percentage: number;
}

export const Usage: React.FC<UsageProps> = ({ onNavigate }) => {
  const [dateRange] = useState('12 Mar 2023 - 19 Mar 2023');

  // Stat cards data
  const statCards: StatCardData[] = [
    { title: 'Page Views', value: '1,230,201', limit: 'of 20,000,000', percentage: 6.15 },
    { title: 'Storage', value: '16.06 GB', limit: 'of 200 GB', percentage: 8.03 },
    { title: 'Bandwidth', value: '160.6 GB', limit: 'of 200 GB', percentage: 80.3 },
    { title: 'Products', value: '1020', limit: 'of 3000', percentage: 34 },
    { title: 'SKUs', value: '10,204', limit: 'of 20,000', percentage: 51.02 },
    { title: 'Workspaces', value: '3', limit: 'of 20', percentage: 15 },
    { title: 'Search Queries', value: '1,023,928', limit: 'of 2,000,000', percentage: 51.2 },
    { title: 'API Requests', value: '1,230,201', limit: 'of 20,000,000', percentage: 6.15 },
    { title: 'Users', value: '102', limit: 'of 300', percentage: 34 },
  ];

  // Sidebar navigation data
  const sidebarSections = [
    {
      title: 'SETUP',
      items: [
        {
          id: 'workspaces',
          label: 'Workspaces',
          icon: (
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 3H15V15H3V3Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M3 9H15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              <path d="M9 3V15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          ),
        },
      ],
    },
    {
      title: 'Security',
      items: [
        {
          id: 'users',
          label: 'Users',
          icon: (
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="9" cy="5" r="3" stroke="currentColor" strokeWidth="1.5"/>
              <path d="M3 15C3 12 5.5 10 9 10C12.5 10 15 12 15 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          ),
        },
        {
          id: 'roles',
          label: 'Roles',
          icon: (
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="3" y="3" width="12" height="12" rx="2" stroke="currentColor" strokeWidth="1.5"/>
              <path d="M7 7H11M7 11H11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          ),
        },
        {
          id: 'groups',
          label: 'Groups',
          icon: (
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="6" cy="6" r="2" stroke="currentColor" strokeWidth="1.5"/>
              <circle cx="12" cy="6" r="2" stroke="currentColor" strokeWidth="1.5"/>
              <path d="M3 14C3 12 4.5 11 6 11C7.5 11 9 12 9 14M9 14C9 12 10.5 11 12 11C13.5 11 15 12 15 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          ),
        },
        {
          id: 'audit-logs',
          label: 'Audit Logs',
          icon: (
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 3H15V15H3V3Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M7 7H11M7 11H11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          ),
        },
      ],
    },
    {
      title: 'Domain Manager',
      items: [
        {
          id: 'domains',
          label: 'Domains',
          icon: (
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="9" cy="9" r="6" stroke="currentColor" strokeWidth="1.5"/>
              <path d="M9 3V9M9 9V15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          ),
        },
        {
          id: 'connect-domain',
          label: 'Connect Domain',
          icon: (
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 2L11 7H16L12 10L13 15L9 12L5 15L6 10L2 7H7L9 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          ),
        },
      ],
    },
    {
      title: 'Billing & Usage',
      items: [
        {
          id: 'usage',
          label: 'Usage',
          active: true,
          onClick: () => onNavigate?.('usage'),
          icon: (
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="3" y="3" width="12" height="12" rx="2" stroke="currentColor" strokeWidth="1.5"/>
              <path d="M6 9L8 11L12 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          ),
        },
        {
          id: 'subscription',
          label: 'Subscription',
          onClick: () => onNavigate?.('subscription'),
          icon: (
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="3" y="5" width="12" height="10" rx="1" stroke="currentColor" strokeWidth="1.5"/>
              <path d="M6 9H12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          ),
        },
        {
          id: 'invoices',
          label: 'Invoices',
          onClick: () => onNavigate?.('invoices'),
          icon: (
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 3H15V15H3V3Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M6 7H12M6 11H10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          ),
        },
        {
          id: 'billing',
          label: 'Billing',
          icon: (
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="3" y="5" width="12" height="8" rx="1" stroke="currentColor" strokeWidth="1.5"/>
              <path d="M6 9H12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          ),
        },
      ],
    },
  ];

  const infoIcon = (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="7" cy="7" r="6" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M7 4V7M7 10H7.01" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  );

  const calendarIcon = (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4 2V4M12 2V4M2 6H14M3 4H13C13.5523 4 14 4.44772 14 5V13C14 13.5523 13.5523 14 13 14H3C2.44772 14 2 13.5523 2 13V5C2 4.44772 2.44772 4 3 4Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );

  return (
    <div className="usage-page" style={{ minHeight: '100vh' }}>
      <Header
        onSearch={(value) => console.log('Search:', value)}
        onNotificationClick={() => console.log('Notifications clicked')}
        onHelpClick={() => console.log('Help clicked')}
        profileImage="http://localhost:3845/assets/9cd4b338b1ab7dd7beb1a1e5239c4387c4d77eff.png"
        profileName="User Profile"
      />
      <Sidebar appName="Account Admin" sections={sidebarSections} />
      <main className="usage-page__main">
        <div className="usage-page__content">
          <div className="usage-page__header">
            <div className="usage-page__header-left">
              <h1 className="usage-page__title">Usage</h1>
              <p className="usage-page__description">View your usage statistics</p>
            </div>
            <div className="usage-page__date-picker">
              <span className="usage-page__date-text">{dateRange}</span>
              <span className="usage-page__date-icon">{calendarIcon}</span>
            </div>
          </div>
          <div className="usage-page__stats">
            {statCards.map((card, index) => (
              <div key={index} className="usage-stat-card">
                <div className="usage-stat-card__header">
                  <span className="usage-stat-card__title">{card.title}</span>
                  <span className="usage-stat-card__info">{infoIcon}</span>
                </div>
                <div className="usage-stat-card__data">
                  <div className="usage-stat-card__values">
                    <span className="usage-stat-card__value">{card.value}</span>
                    <span className="usage-stat-card__limit">{card.limit}</span>
                  </div>
                  <div className="usage-stat-card__progress">
                    <div 
                      className="usage-stat-card__progress-bar" 
                      style={{ width: `${Math.min(card.percentage, 100)}%` }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="usage-page__chart">
            <div className="usage-page__chart-header">
              <span className="usage-page__chart-title">Page Views</span>
              <span className="usage-page__chart-info">{infoIcon}</span>
            </div>
            <div className="usage-page__chart-legend">
              <div className="usage-page__chart-legend-item">
                <div className="usage-page__chart-legend-label-row">
                  <div className="usage-page__chart-legend-dot usage-page__chart-legend-dot--current" />
                  <span className="usage-page__chart-legend-label">Current Duration</span>
                </div>
                <span className="usage-page__chart-legend-value">102.3k</span>
              </div>
              <div className="usage-page__chart-legend-item">
                <div className="usage-page__chart-legend-label-row">
                  <div className="usage-page__chart-legend-dot usage-page__chart-legend-dot--previous" />
                  <span className="usage-page__chart-legend-label">Previous Duration</span>
                </div>
                <span className="usage-page__chart-legend-value">8.3k</span>
              </div>
            </div>
            <div className="usage-page__chart-container">
              <div className="usage-page__chart-placeholder">
                <p className="usage-page__chart-placeholder-text">Chart visualization will be implemented here</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Usage;

