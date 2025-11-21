import React from 'react';
import './Subscription.css';
import { Header } from '../components/Header';
import { Sidebar } from '../components/Sidebar';
import { Table } from '../components/Table';
import { Button } from '../components/Button';
import { Card } from '../components/Card';

export const Subscription: React.FC = () => {
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
          active: true,
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

  // Table data
  const tableColumns = [
    { key: 'product', label: 'Product', align: 'left' as const },
    { key: 'type', label: 'Type', align: 'left' as const },
    { key: 'price', label: 'Yearly Price', align: 'right' as const, width: '200px' },
  ];

  const tableRows = [
    {
      product: 'CMS',
      type: '15 days left in trial',
      price: '-',
    },
    {
      product: 'AI Search',
      type: '15 days left in trial',
      price: '-',
    },
    {
      product: 'Discovery',
      type: '15 days left in trial',
      price: '-',
    },
    {
      product: 'Merchandising',
      type: '15 days left in trial',
      price: '-',
    },
  ];

  console.log('Subscription component rendering');
  
  return (
    <div className="subscription-page">
      <Header
        onSearch={(value) => console.log('Search:', value)}
        onNotificationClick={() => console.log('Notifications clicked')}
        onHelpClick={() => console.log('Help clicked')}
        profileImage="http://localhost:3845/assets/9cd4b338b1ab7dd7beb1a1e5239c4387c4d77eff.png"
        profileName="User Profile"
      />
      <Sidebar appName="Account Admin" sections={sidebarSections} />
      <main className="subscription-page__main">
        <div className="subscription-page__content">
          <div className="subscription-page__header">
            <h1 className="subscription-page__title">Subscription</h1>
            <p className="subscription-page__description">Manage your subscription.</p>
          </div>
          <div className="subscription-page__cards">
            <div className="subscription-card">
              <div className="subscription-card__header">
                <div className="subscription-card__workspace-info">
                  <h2 className="subscription-card__workspace-name">Trial Workspace 1</h2>
                </div>
                <Button
                  type="primary"
                  size="large"
                  onClick={() => console.log('Upgrade clicked')}
                  className="subscription-card__upgrade-button"
                >
                  Upgrade Now
                </Button>
              </div>
              <div className="subscription-card__table">
                <Table columns={tableColumns} rows={tableRows} />
              </div>
            </div>
            <div className="addon-card">
              <div className="addon-card__content">
                <div className="addon-card__text">
                  <h3 className="addon-card__title">Add-on features?</h3>
                  <p className="addon-card__description">
                    Reach out to our sales team to customize add-on features or extend limits as per your preferences.
                  </p>
                </div>
                <button
                  className="addon-card__button"
                  onClick={() => console.log('Contact Support clicked')}
                >
                  Contact Support
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Subscription;

