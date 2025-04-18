import React from 'react';
import { ToastContainer } from 'react-toastify';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import './index.css';
import './satoshi.css';
import 'react-toastify/dist/ReactToastify.css';

const rootElement = document.getElementById('root') as HTMLElement;

const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
    <ToastContainer />
  </React.StrictMode>
);
