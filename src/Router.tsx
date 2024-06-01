
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Dowry from './components/Dowry'
import Warning from './components/Warning'
import Good from './components/Good'
import NotFound from './components/NotFound'
import Calculation from './context/Calculate'

export default function Router() {

  const router = createBrowserRouter([
    { path: '*', element: <NotFound /> },
    { path: '/', element: <Dowry /> },
    { path: '/stop', element: <Warning /> },
    { path: '/anti-dowry', element: <Good /> },
  ])

  return (
    <Calculation>
      <RouterProvider router={router} />
    </Calculation>
  )
}
