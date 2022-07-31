import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// const root = ReactDOM.createRoot(document.getElementById('root'));

const subRoot1 = ReactDOM.createRoot(document.querySelector(`div[data-api-js="api1"]`))
const subRoot2 = ReactDOM.createRoot(document.querySelector(`div[data-api-js="api2"]`))
const subRoot3 = ReactDOM.createRoot(document.querySelector(`div[data-api-js="api3"]`))

subRoot1.render(<App />)
subRoot2.render(<App />)
subRoot3.render(<App />)
