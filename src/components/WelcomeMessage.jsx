import React from 'react';

function WelcomeMessage() {
  return (
    <div style={{
      textAlign: 'center',
      padding: '2rem',
      backgroundColor: 'rgba(102, 126, 234, 0.1)',
      borderRadius: '10px',
      margin: '2rem 0',
      border: '2px dashed #667eea'
    }}>
      <h2 style={{ color: '#667eea', marginBottom: '1rem' }}>
        🔑 API Key Required
      </h2>
      <p style={{ color: '#cccccc', marginBottom: '1rem' }}>
        To start searching for movies, you need to set up your OMDb API key.
      </p>
      <div style={{ 
        backgroundColor: '#1a1a2e', 
        padding: '1rem', 
        borderRadius: '5px',
        fontFamily: 'monospace',
        fontSize: '0.9rem',
        color: '#888',
        marginBottom: '1rem'
      }}>
        <p>1. Get your free API key from: <a href="http://www.omdbapi.com/apikey.aspx" target="_blank" rel="noopener noreferrer" style={{color: '#667eea'}}>OMDb API</a></p>
        <p>2. Add it to your .env file:</p>
        <p style={{color: '#667eea'}}>VITE_OMDB_API_KEY=your_actual_key_here</p>
        <p>3. Restart the development server</p>
      </div>
      <p style={{ color: '#888', fontSize: '0.9rem' }}>
        The free plan includes 1,000 requests per day, which is perfect for testing!
      </p>
    </div>
  );
}

export default WelcomeMessage;
