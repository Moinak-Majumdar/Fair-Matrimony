import { Link } from 'react-router-dom'
import bg4 from '/image/bg-4.webp'

const NotFound = () => {


  return (
    <main className="flex h-screen justify-center items-center bg-gradient-to-b bg-cover bg-no-repeat bg-center p-4" style={{backgroundImage: `url(${bg4})`}}>
      <div className=' bg-black bg-opacity-15 p-4 backdrop-blur-sm rounded-md max-w-[25rem] text-center animate-fade-down duration-700'>
        <p className="OpenSans text-2xl font-semibold text-slate-100 animate-fade-right">404 | Page not found</p>
        <p className='RobotoMono mt-4 text-slate-300 text-sm mb-8 animate-fade-left'>The page you are looking for might have been removed had it&apos;s name changed or temporarily unavailable</p>
        <Link to="/" className='uppercase text-white text-sm border-2 border-white px-3 py-2 rounded-full animate-fade-left'>go to homepage</Link>
      </div>
    </main>
  )
}

export default NotFound