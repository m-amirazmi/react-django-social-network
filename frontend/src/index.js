import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App'
import './assets/scss/main.scss'
import './assets/css/main.css'
import './utils/i18n';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
