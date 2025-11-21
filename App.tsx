import React from 'react';
import { Subscription } from './Subscription';
import './tokens/colors.css';
import './typography/tokens.css';
import './App.css';

function App() {
  console.log('App component rendering');
  
  return (
    <div className="app" style={{ minHeight: '100vh', background: '#f5f5f7' }}>
      {/* Debug: Remove this div once page loads */}
      <div style={{ padding: '10px', background: '#fff', border: '1px solid #ccc', margin: '10px' }}>
        <strong>Debug:</strong> If you see this, React is working. Check console for errors.
      </div>
      <Subscription />
    </div>
  );
}

export default App;

