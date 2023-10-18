import React from 'react'
import ReactDOM from 'react-dom'
import './index.css';
import App from './App'

const t0 = performance.now();

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
