import React from 'react';
import ReactDOM from 'react-dom/client';
import './style/App.css';
import CommentDetail from './components/CommentDetail';
import ApprovalCard from './components/ApprovalCard';

const App = () => {
  return (
    <div className='ui container comments'>
      <ApprovalCard>
        <CommentDetail author='Sam' timeAgo='Today at 4:45PM' content />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail author='Alex' timeAgo='Today at 2:00AM' />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail author='Jane' timeAgo='Yesterday at 5:00PM' />
      </ApprovalCard>
    </div>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
