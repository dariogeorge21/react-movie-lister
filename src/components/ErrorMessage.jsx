import React from 'react';

function ErrorMessage({ message, onRetry }) {
  return (
    <div className="error-message">
      <p>{message}</p>
      {onRetry && (
        <button 
          onClick={onRetry}
          style={{
            marginTop: '1rem',
            padding: '0.5rem 1rem',
            backgroundColor: 'transparent',
            border: '2px solid white',
            color: 'white',
            borderRadius: '5px',
            cursor: 'pointer',
            fontSize: '0.9rem'
          }}
        >
          Try Again
        </button>
      )}
    </div>
  );
}

export default ErrorMessage;
