import ReactDOM from 'react-dom/client'
import './index.css'
import Router from './Router.tsx'
import {StrictMode} from 'react'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router />
  </StrictMode>
)
