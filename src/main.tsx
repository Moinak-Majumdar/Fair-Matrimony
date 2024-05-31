import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Calculation from './context/Calculate.tsx'
import Router from './Router.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Calculation>
      <Router />
    </Calculation>
  </React.StrictMode>,
)
