import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {CartsProvider} from '../src/Context/Cart.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CartsProvider>
      <App />
    </CartsProvider>
  </React.StrictMode>,
)
