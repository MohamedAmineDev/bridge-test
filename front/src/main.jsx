import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import MyRouter from './components/MyRouter.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MyRouter/>
  </React.StrictMode>,
)
