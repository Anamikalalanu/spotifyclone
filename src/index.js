import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Page1 from './components/Page1';
import LoginPage from './components/LoginPage';
import Approuter from './AppRouter/Approuter';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <Approuter />

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
