import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import App from './App.tsx'


ReactDOM.render(
  <BrowserRouter basename="/your-repository-name">
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);