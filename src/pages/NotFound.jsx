import { ArrowBigLeft, ArrowBigRight } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className='flex flex-col items-center pt-24'>
      <h1 className='text-6xl sm:text-8xl md:text-16xl font-bold text-green-400'>404</h1>
      <h3 className='text-md sm:text-xl md:text-2xl font-bold'>Page Not Found!</h3>
      <p className="mt-4 text-lg sm:text-lg md:text-xl text-zinc-300 text-center mx-2">Sorry, we couldn't find the page you're looking for.</p>
      <Link to="/" className='mt-16 p-3 bg-green-400 font-bold text-xl rounded-md hover:bg-green-300'>
    <span className='flex gap-2'><ArrowBigLeft/>Back to Home</span>   
      </Link>

     <Link to={-1} className='mt-8 p-3 bg-green-700 font-bold text-xl rounded-md hover:bg-green-300'>
    <span className='flex gap-2'><ArrowBigLeft/>Previous Page</span>   
      </Link>
      </div>
  )
}

export default NotFound