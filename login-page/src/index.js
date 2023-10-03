import React from 'react';
import ReactDOM from 'react-dom/client';
import Template from './components/template';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Template />
  </React.StrictMode>
);

// If you want to start measuring performance in your template, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
