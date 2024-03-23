import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Cards from './Cards.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Cards username="Ashish" btnText="Click Me" />
    <Cards username="Vaibhav" />
  </React.StrictMode>,
)
