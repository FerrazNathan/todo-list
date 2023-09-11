import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.js'
import { GlobalStyle } from '../stylesGlobal.js'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>,
)
