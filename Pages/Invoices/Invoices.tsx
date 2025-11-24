import React, { useState } from 'react';
import './Invoices.css';
import { Header } from '../../components/Header';
import { Sidebar } from '../../components/Sidebar';
import { Table, TableColumn, TableRow } from '../../components/Table';
import { Badge } from '../../components/Badge';
import { Button } from '../../components/Button';

export interface Invoice {
  id: string;
  date: string;
  amount: string;
  status: 'paid' | 'unpaid';
}

export interface InvoicesProps {
  onNavigate?: (page: 'subscription' | 'invoices' | 'usage') => void;
}

export const Invoices: React.FC<InvoicesProps> = ({ onNavigate }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [hoveredRowIndex, setHoveredRowIndex] = useState<number | null>(null);

  // Sample invoice data matching the Figma design
  const invoices: Invoice[] = [
    { id: 'EXP-2025-4738', date: '12 Mar 2025, 12:34 AM', amount: '$ USD 1,023', status: 'unpaid' },
    { id: 'EXP-2024-4737', date: '12 Mar 2024, 12:34 AM', amount: '$ USD 1,234', status: 'unpaid' },
    { id: 'EXP-2023-4736', date: '12 Mar 2023, 12:34 AM', amount: '$ USD 1,345', status: 'unpaid' },
    { id: 'EXP-2021-4734', date: '12 Mar 2021, 12:34 AM', amount: '$ USD 1,567', status: 'paid' },
    { id: 'EXP-2020-4733', date: '12 Mar 2020, 12:34 AM', amount: '$ USD 1,678', status: 'paid' },
    { id: 'EXP-2019-4732', date: '12 Mar 2019, 12:34 AM', amount: '$ USD 1,789', status: 'paid' },
    { id: 'EXP-2017-4730', date: '12 Mar 2017, 12:34 AM', amount: '$ USD 2,001', status: 'paid' },
    { id: 'EXP-2016-4729', date: '12 Mar 2016, 12:34 AM', amount: '$ USD 2,112', status: 'paid' },
    { id: 'EXP-2015-4728', date: '12 Mar 2015, 12:34 AM', amount: '$ USD 2,223', status: 'paid' },
    { id: 'EXP-2013-4726', date: '12 Mar 2013, 12:34 AM', amount: '$ USD 2,445', status: 'paid' },
  ];

  const handleDownload = (invoiceId: string) => {
    console.log('Download invoice:', invoiceId);
    // Implement download logic here
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
          active: true,
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

  // Prepare table data
  const columns: TableColumn[] = [
    { key: 'invoice', label: 'Invoices', align: 'left' },
    { key: 'date', label: 'Date', align: 'left' },
    { key: 'amount', label: 'Amount', align: 'left' },
    { key: 'status', label: 'Status', align: 'left' },
    { key: 'action', label: 'Action', align: 'right' },
  ];

  const rows: TableRow[] = invoices.map((invoice, index) => ({
    invoice: <span className="invoices-table__invoice-id">{invoice.id}</span>,
    date: <span className="invoices-table__date">{invoice.date}</span>,
    amount: <span className="invoices-table__amount">{invoice.amount}</span>,
    status: (
      <Badge
        type="subtle"
        size="small"
        color={invoice.status === 'paid' ? 'green' : 'gray'}
      >
        {invoice.status === 'paid' ? 'Paid' : 'Unpaid'}
      </Badge>
    ),
    action: (
      <button
        className="invoices-table__download-button"
        onClick={() => handleDownload(invoice.id)}
        aria-label={`Download ${invoice.id}`}
      >
        Download
      </button>
    ),
  }));

  // Pagination logic
  const totalPages = Math.ceil(invoices.length / itemsPerPage);
  const startPage = Math.max(1, currentPage - 1);
  const endPage = Math.min(totalPages, currentPage + 1);

  const paginationPages = [];
  if (startPage > 1) {
    paginationPages.push(1);
    if (startPage > 2) {
      paginationPages.push('ellipsis');
    }
  }
  for (let i = startPage; i <= endPage; i++) {
    paginationPages.push(i);
  }
  if (endPage < totalPages) {
    if (endPage < totalPages - 1) {
      paginationPages.push('ellipsis');
    }
    paginationPages.push(totalPages);
  }

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const chevronLeftIcon = (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 4L6 10L12 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );

  const chevronRightIcon = (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8 4L14 10L8 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );

  const chevronDownIcon = (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4 6L8 10L12 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );

  console.log('Invoices component rendering', { invoicesCount: invoices.length, columnsCount: columns.length, rowsCount: rows.length });

  return (
    <div className="invoices-page" style={{ minHeight: '100vh' }}>
      <Header
        onSearch={(value) => console.log('Search:', value)}
        onNotificationClick={() => console.log('Notifications clicked')}
        onHelpClick={() => console.log('Help clicked')}
        profileImage="http://localhost:3845/assets/9cd4b338b1ab7dd7beb1a1e5239c4387c4d77eff.png"
        profileName="User Profile"
      />
      <Sidebar appName="Account Admin" sections={sidebarSections} />
      <main className="invoices-page__main">
        <div className="invoices-page__content">
          <div className="invoices-page__header">
            <h1 className="invoices-page__title">Invoices</h1>
            <p className="invoices-page__description">Download your invoices</p>
          </div>
          <div className="invoices-page__table-wrapper">
            <Table 
              columns={columns} 
              rows={rows} 
              className="invoices-table" 
              onRowHover={setHoveredRowIndex}
              hoveredRowIndex={hoveredRowIndex}
            />
            <div className="invoices-page__pagination">
              <div className="invoices-page__pagination-controls">
                <div className="invoices-page__pagination-buttons">
                  <button
                    className={`invoices-page__pagination-arrow ${currentPage === 1 ? 'invoices-page__pagination-arrow--disabled' : ''}`}
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    aria-label="Previous page"
                  >
                    {chevronLeftIcon}
                  </button>
                  {paginationPages.map((page, index) => {
                    if (page === 'ellipsis') {
                      return (
                        <button
                          key={`ellipsis-${index}`}
                          className="invoices-page__pagination-page invoices-page__pagination-page--ellipsis"
                          disabled
                        >
                          ....
                        </button>
                      );
                    }
                    return (
                      <button
                        key={page}
                        className={`invoices-page__pagination-page ${currentPage === page ? 'invoices-page__pagination-page--active' : ''}`}
                        onClick={() => handlePageChange(page as number)}
                        aria-label={`Go to page ${page}`}
                      >
                        {page}
                      </button>
                    );
                  })}
                  <button
                    className={`invoices-page__pagination-arrow ${currentPage === totalPages ? 'invoices-page__pagination-arrow--disabled' : ''}`}
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    aria-label="Next page"
                  >
                    {chevronRightIcon}
                  </button>
                </div>
                <div className="invoices-page__per-page">
                  <span className="invoices-page__per-page-text">{itemsPerPage} per Page</span>
                  <span className="invoices-page__per-page-icon">{chevronDownIcon}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Invoices;

