import React from 'react'
// import Navbar from '../Menubar/Navbar'
import Image from 'next/image'
import Link from 'next/link'
export default function HeroSection() {
  return (
    <>
    {/* <Navbar /> */}
      <div className='bg-[#EDFFF5] w-full min-h-screen relative  text-black'>
        {/* image */}
        <div 
        className='absolute left-2/4 ml-28 mt-4 bg-contain opacity-50 bg-no-repeat '>
            <Image alt='' 
            width={200} 
            height={120}
            className='w-9/12 md:w-full h-40 sm:h-52 md:h-64 '
            src='/assets/herobook1.png'>
      </Image>
      </div>
      {/* content */}
      <div className='relative flex justify-center items-center flex-col gap-1 sm:gap-3  '>
      <h1 className=' font-semibold text-center text-2xl 
      sm:text-4xl md:text-5xl p-3 leading-tight word-wrap'>
      Organize, Access, Inspire: 
      <br className='text-center'></br> 
      Your Library, Your Way!
      </h1>
      <p className='text-center leading-snug text-xs 
      sm:text-sm md:text-base tracking-tight md:tracking-wide break-words'>
      Streamline your library experience with easy book 
      management, seamless <br></br> searching, and quick
       access to your favorite resources.
      </p>
      <div className='flex justify-between gap-6'>
      <button className='w-24 h-8 md:w-32 md:h-12
       text-white text-sm md:text-base
      rounded-md mt-2 bg-[#4328EB]'>
       Get Started </button>
      <Link href='/get-started' >
      <Image
      width={40} 
      height={26}
      alt='' 
      className='w-8 h-8 md:w-12 md:h-10 mt-2
       md:mt-3 cursor-pointer rounded-full p-2 bg-[#4328EB] bg-opacity-20'
      src='/assets/arrow.png'></Image></Link>
      </div>
      </div>
      </div>
    </>
  )
}
