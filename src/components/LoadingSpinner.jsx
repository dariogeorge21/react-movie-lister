import React from 'react';

function LoadingSpinner({ message = 'Loading...' }) {
  return (
    <div className="loading-container">
      <div className="spinner"></div>
      <p style={{ marginLeft: '1rem', color: '#888' }}>{message}</p>
    </div>
  );
}

export default LoadingSpinner;
