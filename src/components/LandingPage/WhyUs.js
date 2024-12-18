import React from 'react'

function WhyUs() {
  return (
    <div className='bg-red-500 py-16'>
        <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
            <h2 className='text-4xl font-bold text-white mb-8'>Why Us?</h2>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
                <div>
                    <div className='bg-white p-6 rounded-lg shadow-md'>
                        <h3 className='text-2xl font-bold mb-4'>User Centric Design</h3>
                        <p className='text-gray-600'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                            Quisque ac est sapien.
                        </p>
                    </div>
                </div>

            </div>
        </div>
    </div>
  )
}

export default WhyUs