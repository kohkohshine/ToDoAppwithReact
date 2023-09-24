import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootswatch/dist/lux/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css"; 
import App from './app';

const container = document.getElementById('root');
const root = createRoot(container)

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>    
)
