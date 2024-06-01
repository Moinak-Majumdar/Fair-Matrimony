
import { Route, Routes } from 'react-router-dom'
import Dowry from './components/Dowry'
import Warning from './components/Warning'
import Good from './components/Good'
import NotFound from './components/NotFound'

export default function Router() {
  return (
    <>
        <Routes>
            <Route path='/' element={<Dowry />} />
            <Route path='*' element={<NotFound />} />
            <Route path='/stop' element={<Warning />} />
            <Route path='/anti-dowry' element={<Good />} />
        </Routes>
    </>
  )
}
