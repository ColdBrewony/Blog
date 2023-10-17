import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import LayoutMain from './layout/LayoutMain';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <LayoutMain />
    <App />
    <Footer />
  </React.StrictMode>
);

reportWebVitals();
