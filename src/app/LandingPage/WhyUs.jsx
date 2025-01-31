import React from 'react';
import Image from 'next/image';

function WhyUs() {
  return (
    <section className="bg-gray-100 py-16 px-4 md:px-8 lg:px-16"
    style={{ backgroundImage: 'url(/assets/whyus.png)', backgroundSize: 'cover', backgroundPosition:'center'}}>
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-10 text-white uppercase">Why Us!</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="relative bg-black text-white p-8 rounded-lg shadow-xl border-t-4 border-l-4 border-indigo-900">
            <div className='absolute -z-10 top-0 left-0 w-full h-full bg-pink-500 rounded-lg transform -rotate-6 translate-x-4 translate-y-4'></div>
            <div className="flex items-center mb-4">
                <Image
                    width={25}
                    height={25}
                    alt='message-icon'
                    className='bg-indigo-900'
                    src='/assets/message.png'
                ></Image>
              <h3 className="text-xl font-bold text-white ml-4">User Centric Design</h3>
            </div>
            <p className="text-gray-300">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
          </div>

          <div className="relative bg-black text-white p-8 rounded-lg shadow-xl border-t-4 border-l-4 border-indigo-900">
            <div className='absolute -z-10 top-0 left-0 w-full h-full bg-pink-500 rounded-lg transform -rotate-6 translate-x-4 translate-y-4'></div>
            <div className="flex items-center mb-4">
                <Image
                    width={25}
                    height={25}
                    alt='message-icon'
                    className='bg-indigo-900'
                    src='/assets/message.png'
                ></Image>
              
              <h3 className="text-xl font-bold text-white ml-4">Full Stack Expertise</h3>
            </div>
            <p className="text-gray-300">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
          </div>

          <div className="relative bg-black text-white p-8 rounded-lg shadow-xl border-t-4 border-l-4 border-indigo-900">
          <div className="absolute -z-10 top-0 left-0 w-full h-full bg-pink-500 rounded-lg transform -rotate-6 translate-x-4 translate-y-4"></div>
            <div className="flex items-center mb-4">
                <Image
                    width={25}
                    height={25}
                    alt='message-icon'
                    className='bg-indigo-900'
                    src='/assets/message.png'
                ></Image>
              
              <h3 className="text-xl font-bold text-white ml-4">Transparent Communication</h3>
            </div>
            <p className="text-gray-300">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
          </div>

          <div className="relative bg-black text-white p-8 rounded-lg shadow-xl border-t-4 border-l-4 border-indigo-900">
            <div className='absolute -z-10 top-0 left-0 w-full h-full bg-pink-500 rounded-lg transform -rotate-6 translate-x-4 translate-y-4'></div>
            <div className="flex items-center mb-4">
               <Image
                width={25}
                height={25}
                alt='message-icon'
                className='bg-indigo-900'
                src="/assets/message.png"
               ></Image>
              <h3 className="text-xl font-bold text-white ml-4">Agile Development</h3>
            </div>
            <p className="text-gray-300">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyUs;