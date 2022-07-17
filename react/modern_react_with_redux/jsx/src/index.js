import React from 'react';
import ReactDOM from 'react-dom/client';

const el = document.getElementById('root');
const root = ReactDOM.createRoot(el);

const App = () => {
  return (
    <div className='wrapper'>
      <textarea readOnly maxLength={3} spellCheck style={{ backgroundColor: 'gray' }} />
    </div>
  );
};

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
