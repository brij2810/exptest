import React, { useState } from 'react';
import './Subscription.css';
import { Header } from '../../components/Header';
import { Sidebar } from '../../components/Sidebar';
import { Button } from '../../components/Button';

export interface SubscriptionProps {
  onNavigate?: (page: 'subscription' | 'invoices' | 'usage') => void;
}

export const Subscription: React.FC<SubscriptionProps> = ({ onNavigate }) => {
  const [expandedRows, setExpandedRows] = useState<{ [key: string]: boolean }>({
    'workspace1-ai-search': true,
    'workspace2-ai-search': true,
  });

  const toggleRow = (key: string) => {
    setExpandedRows((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

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
          active: true,
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

  // Chevron icon component (double chevron pointing down)
  const ChevronIcon = ({ isExpanded }: { isExpanded: boolean }) => {
    const fillColor = isExpanded ? 'var(--color-primary-1)' : 'var(--color-text-6)';
    return (
      <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M2.5 1.5L5.5 4.5L8.5 1.5"
          stroke={fillColor}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        <path
          d="M2.5 5.5L5.5 8.5L8.5 5.5"
          stroke={fillColor}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
      </svg>
    );
  };

  // Workspace card component
  const WorkspaceCard = ({
    workspaceName,
    payment,
    lastPayment,
    planExpire,
    workspaceKey,
    tableData,
    totalPrice,
  }: {
    workspaceName: string;
    payment: string;
    lastPayment: string;
    planExpire: string;
    workspaceKey: string;
    tableData: any[];
    totalPrice: string;
  }) => {

    return (
      <div className="subscription-card">
        <div className="subscription-card__content">
          <div className="subscription-card__header">
            <h2 className="subscription-card__workspace-name">{workspaceName}</h2>
            <Button
              type="primary"
              size="medium"
              onClick={() => console.log('Manage clicked')}
              className="subscription-card__manage-button"
            >
              Manage
            </Button>
          </div>
          <div className="subscription-card__summary">
            <div className="subscription-card__summary-item">
              <div className="subscription-card__summary-label">Payment</div>
              <div className="subscription-card__summary-value">
                <span className="subscription-card__summary-amount">{payment}</span>
                <span className="subscription-card__summary-period">/ yearly</span>
              </div>
            </div>
            <div className="subscription-card__summary-item">
              <div className="subscription-card__summary-label">Last Payment Done</div>
              <div className="subscription-card__summary-value">{lastPayment}</div>
            </div>
            <div className="subscription-card__summary-item">
              <div className="subscription-card__summary-label">Plan Expire At</div>
              <div className="subscription-card__summary-value">{planExpire}</div>
            </div>
          </div>
          <div className="subscription-card__table-container">
            <table className="subscription-table">
              <thead>
                <tr>
                  <th className="subscription-table__header subscription-table__header--expand">&nbsp;</th>
                  <th className="subscription-table__header subscription-table__header--product">Product</th>
                  <th className="subscription-table__header subscription-table__header--type">Type</th>
                  <th className="subscription-table__header subscription-table__header--price">Yearly Price</th>
                </tr>
              </thead>
              <tbody>
                {tableData.map((row, index) => (
                  <React.Fragment key={index}>
                    <tr className="subscription-table__row">
                      <td className="subscription-table__cell subscription-table__cell--expand">
                        {row.hasChildren ? (
                          <button
                            className="subscription-table__expand-button"
                            onClick={() => toggleRow(`${workspaceKey}-${row.key}`)}
                            aria-label={expandedRows[`${workspaceKey}-${row.key}`] ? 'Collapse' : 'Expand'}
                          >
                            <ChevronIcon isExpanded={expandedRows[`${workspaceKey}-${row.key}`] || false} />
                          </button>
                        ) : null}
                      </td>
                      <td className="subscription-table__cell subscription-table__cell--product">
                        {row.product}
                      </td>
                      <td className="subscription-table__cell subscription-table__cell--type">
                        {row.type}
                      </td>
                      <td className="subscription-table__cell subscription-table__cell--price">
                        {row.price}
                      </td>
                    </tr>
                    {row.hasChildren && expandedRows[`${workspaceKey}-${row.key}`] && row.children?.map((child: any, childIndex: number) => (
                      <tr key={`child-${index}-${childIndex}`} className="subscription-table__row subscription-table__row--nested">
                        <td className="subscription-table__cell subscription-table__cell--expand"></td>
                        <td className="subscription-table__cell subscription-table__cell--product subscription-table__cell--nested">
                          {child.product}
                        </td>
                        <td className="subscription-table__cell subscription-table__cell--type subscription-table__cell--nested">
                          {child.type}
                        </td>
                        <td className="subscription-table__cell subscription-table__cell--price subscription-table__cell--nested">
                          {child.price}
                        </td>
                      </tr>
                    ))}
                  </React.Fragment>
                ))}
              </tbody>
            </table>
          </div>
          <div className="subscription-card__footer">
            <p className="subscription-card__disclaimer">*All prices are in USD</p>
            <div className="subscription-card__total">
              <span className="subscription-card__total-label">Total Price</span>
              <span className="subscription-card__total-value">{totalPrice}</span>
            </div>
          </div>
        </div>
      </div>
    );
  };

  // Table data for workspace 1
  const workspace1Data = [
    {
      key: 'cms',
      product: 'CMS',
      type: 'Lite Plan',
      price: '$159.00',
      hasChildren: false,
    },
    {
      key: 'ai-search',
      product: 'AI Search',
      type: 'Boost Plan',
      price: '$199.00',
      hasChildren: true,
      children: [
        { product: 'No. of searches', type: '1000', price: '-' },
        { product: 'No. of searches', type: '200', price: '-' },
        { product: 'No. of searches', type: '400', price: '-' },
        { product: 'No. of products', type: '10,000', price: '-' },
      ],
    },
    {
      key: 'discovery',
      product: 'Discovery',
      type: 'Boost Plan',
      price: '$179.00',
      hasChildren: false,
    },
    {
      key: 'merchandising',
      product: 'Merchandising',
      type: 'Lite Plan',
      price: '$129.00',
      hasChildren: false,
    },
    {
      key: 'searches',
      product: 'Searches',
      type: 'Add-on',
      price: '$50.00',
      hasChildren: false,
    },
    {
      key: 'products',
      product: 'Products',
      type: 'Add-on',
      price: '$60.00',
      hasChildren: false,
    },
    {
      key: 'multi-channel',
      product: 'Multi-Channel',
      type: 'Add-on',
      price: '$499.00',
      hasChildren: false,
    },
  ];

  // Table data for workspace 2 (same structure)
  const workspace2Data = [
    {
      key: 'cms',
      product: 'CMS',
      type: 'Lite Plan',
      price: '$159.00',
      hasChildren: false,
    },
    {
      key: 'ai-search',
      product: 'AI Search',
      type: 'Boost Plan',
      price: '$199.00',
      hasChildren: true,
      children: [
        { product: 'No. of searches', type: '1000', price: '-' },
        { product: 'No. of searches', type: '200', price: '-' },
        { product: 'No. of searches', type: '400', price: '-' },
        { product: 'No. of products', type: '10,000', price: '-' },
      ],
    },
    {
      key: 'discovery',
      product: 'Discovery',
      type: 'Boost Plan',
      price: '$179.00',
      hasChildren: false,
    },
    {
      key: 'merchandising',
      product: 'Merchandising',
      type: 'Lite Plan',
      price: '$129.00',
      hasChildren: false,
    },
    {
      key: 'searches',
      product: 'Searches',
      type: 'Add-on',
      price: '$50.00',
      hasChildren: false,
    },
    {
      key: 'products',
      product: 'Products',
      type: 'Add-on',
      price: '$60.00',
      hasChildren: false,
    },
    {
      key: 'multi-channel',
      product: 'Multi-Channel',
      type: 'Add-on',
      price: '$499.00',
      hasChildren: false,
    },
  ];

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
            <WorkspaceCard
              workspaceName="Trial Workspace 1"
              payment="$5,244"
              lastPayment="14 Mar 2024"
              planExpire="12 Mar 2025"
              workspaceKey="workspace1"
              tableData={workspace1Data}
              totalPrice="$2,499.00"
            />
            <WorkspaceCard
              workspaceName="Trial Workspace 2"
              payment="$5,244"
              lastPayment="14 Mar 2024"
              planExpire="12 Mar 2025"
              workspaceKey="workspace2"
              tableData={workspace2Data}
              totalPrice="$2,499.00"
            />
            <div className="subscription-addon">
              <div className="subscription-addon__content">
                <div className="subscription-addon__text">
                  <h3 className="subscription-addon__title">Add-on features?</h3>
                  <p className="subscription-addon__description">
                    Reach out to our sales team to customize add-on features or extend limits as per your preferences.
                  </p>
                </div>
                <Button
                  type="secondary"
                  size="medium"
                  onClick={() => console.log('Contact Support clicked')}
                  className="subscription-addon__button"
                >
                  Contact Support
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Subscription;

