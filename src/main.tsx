import ReactDOM from 'react-dom/client'
import './index.css'
import Calculation from './context/Calculate.tsx'
import Router from './Router.tsx'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Calculation>
      <Router />
    </Calculation>
  </BrowserRouter>,
)
