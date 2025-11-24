import React, { useState } from 'react';
import Invoices from './Pages/Invoices';
import Subscription from './Pages/Subscription';
import Usage from './Pages/Usage';
import './tokens/colors.css';
import './typography/tokens.css';
import './App.css';

type Page = 'subscription' | 'invoices' | 'usage';

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('usage');

  const handleNavigate = (page: Page) => {
    setCurrentPage(page);
  };

  return (
    <div className="app" style={{ minHeight: '100vh', background: '#f5f5f7' }}>
      {currentPage === 'subscription' && <Subscription onNavigate={handleNavigate} />}
      {currentPage === 'invoices' && <Invoices onNavigate={handleNavigate} />}
      {currentPage === 'usage' && <Usage onNavigate={handleNavigate} />}
    </div>
  );
}

export default App;

