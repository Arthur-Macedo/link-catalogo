import React from 'react';
import ReactDOM from 'react-dom/client'; 
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css'; 
import App from './pages/Links/index';
import Catalogo from './pages/Catalogo/index';


const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/catalogo" element={<Catalogo />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
