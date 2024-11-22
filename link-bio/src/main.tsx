import React from 'react';
import ReactDOM from 'react-dom/client'; // Usando 'react-dom/client' para React 18+
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css'; // Certifique-se de que o Tailwind está sendo importado aqui
import App from './pages/Links/index';
import Catalogo from './pages/Catalogo/index';

// React 18+ usa o método `createRoot` para renderizar
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
