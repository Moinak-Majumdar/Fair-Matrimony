
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Dowry from './components/Dowry'
import Warning from './components/Warning'
import Good from './components/Good'
import NotFound from './components/NotFound'

const Router = () => {
    
    const router = createBrowserRouter([
        { path: '*', element: <NotFound />},
        { path: '/', element: <Dowry /> },
        { path: '/stop', element: <Warning /> },
        { path: '/anti-dowry', element: <Good />}
    ])

    return (
        <RouterProvider router={router} />
    )
}

export default Router