import React from 'react'

function Navbar() {
  return (
    <nav className='bg-gray-800 py-4'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='flex items-center justify-between h-16'>
                <div className='flex items-center'>
                    <a href='/' className='text-white font-bold text-xl'>Library</a>
                    <div className='hidden md:block'>
                        <div className='ml-10 flex items-baseline space-x-4'>
                            <a href='/features' className='text-gray-300 hover:bg-gray-700 
                            hover:text-white px-3 py-2 rounded-md text-sm font-medium'>Features</a>
                            <a href='/pricing' className='text-gray-300 hover:bg-gray-700 hover:text-white
                            px-3 py-2 rounded-md text-sm font-medium'>Princing</a>
                            <a href='/enterprise' className='text-gray-300 hover:bg-gray-700 hover:text-white 
                            px-3 py-2 rounded-md text-sm font-medium'>Enterprise</a>
                        </div>
                    </div>
                </div>
                <div className='hidden md:block'>
                    <a href='/account' className='text-gray-300 hover:bg-gray-700 hover:text-white
                    px-3 py-2 rounded-md text-sm font-medium'>Open an Account</a>
                    <a href='/signin' className='text-gray-300 hover:bg-gray-700 hover:text-white
                    px-3 py-2 rounded-md text-sm font-medium'>Sign In</a>
                </div>
                <div className='md-hidden'>
                    <button type='button' className='bg-gray-800 inline-flex items-center justify-center p-2
                    rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2
                    focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white'
                    aria-expanded='false'>
                        <span className='sr-only'>Open main menu</span>
                        <svg 
                            className='block h-6 w-6'
                            xmlns='https://www.w3.org/2000/svg'
                            fill='none'
                            viewBox='0 0 24 24'
                            stroke='currentColor'
                            aria-hidden='true'
                        >
                            <path stokeLinecap='round'
                                strokeLinejoin='round'
                                strokeWidth='2'
                                d='M4 6h16M4 12h16M4 18h16'/>
                        </svg>

                    </button>
                </div>

            </div>
        </div>
    </nav>
  )
}

export default Navbar