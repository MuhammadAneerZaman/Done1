import React from 'react'
import Image from 'next/image'
import London from '../../../public/Manchester.webp'
import Manchester from '../../../public/Manchester.webp'
import LiverPool from '../../../public/LiverPool.webp'
import York from '../../../public/York.webp'
import Cardiff from '../../../public/Cardiff.webp'
import Brikenhead from '../../../public/Brikenhead.webp'
import Newqua from '../../../public/Newquay.webp'
import Hove from '../../../public/Hove.webp'
import Outdoor from '../../../public/Outdoor.webp'
import Unique from '../../../public/Unique.webp'
import Pet from '../../../public/Pet.webp'
import Entire from '../../../public/Entire.webp'
import Greatest from '../../../public/Greatest.webp'


export default function Main() {
  return (
    <div className=' mx-11 my-9'>


    <h1 className=' font-bold text-3xl mb-6'> Explore Nearby </h1>
    <div className=' grid grid-cols-4'>
      <div className=' w-64 h-20 flex items-center px-3 py-2 hover:bg-slate-200 rounded-2xl  hover:scale-105 transition duration-200 ease-out'>
        <div className='img h-full w-20'>
            <Image src={London} className=' h-full w-full' />
        </div>
        <div className=' pl-6'>
            <h3> London </h3>
            <p className=' text-gray-500'> 45-minutes drive </p>
        </div>
      </div>


      <div className=' w-64 h-20 flex items-center px-3 py-2 hover:bg-slate-200 rounded-2xl  hover:scale-105 transition duration-200 ease-out'>
        <div className='img h-full w-20'>
            <Image src={Manchester} className=' h-full w-full' />
        </div>
        <div className=' pl-6'>
            <h3> Manchester </h3>
            <p className=' text-gray-500'> 4.5-hour drive </p>
        </div>
      </div>


      <div className=' w-64 h-20 flex items-center px-3 py-2 hover:bg-slate-200 rounded-2xl  hover:scale-105 transition duration-200 ease-out'>
        <div className='img h-full w-20'>
            <Image src={LiverPool} className=' h-full w-full' />
        </div>
        <div className=' pl-6'>
            <h3> LiverPool </h3>
            <p className=' text-gray-500'> 4.5-hour drive </p>
        </div>
      </div>


      <div className=' w-64 h-20 flex items-center px-3 py-2 hover:bg-slate-200 rounded-2xl  hover:scale-105 transition duration-200 ease-out'>
        <div className='img h-full w-20'>
            <Image src={York} className=' h-full w-full' />
        </div>
        <div className=' pl-6'>
            <h3> York </h3>
            <p className=' text-gray-500'> 4.5-hour drive </p>
        </div>
      </div>


      <div className=' w-64 h-20 flex items-center px-3 py-2 hover:bg-slate-200 rounded-2xl  hover:scale-105 transition duration-200 ease-out'>
        <div className='img h-full w-20'>
            <Image src={Cardiff} className=' h-full w-full' />
        </div>
        <div className=' pl-6'>
            <h3> Cardiff </h3>
            <p className=' text-gray-500'> 45-minutes drive </p>
        </div>
      </div>


      <div className=' w-64 h-20 flex items-center px-3 py-2 hover:bg-slate-200 rounded-2xl  hover:scale-105 transition duration-200 ease-out'>
        <div className='img h-full w-20'>
            <Image src={Brikenhead} className=' h-full w-full' />
        </div>
        <div className=' pl-6'>
            <h3> Brikenhead </h3>
            <p className=' text-gray-500'> 4.5-hour drive </p>
        </div>
      </div>


      <div className=' w-64 h-20 flex items-center px-3 py-2 hover:bg-slate-200 rounded-2xl  hover:scale-105 transition duration-200 ease-out'>
        <div className='img h-full w-20'>
            <Image src={Newqua} className=' h-full w-full' />
        </div>
        <div className=' pl-6'>
            <h3> Newqua </h3>
            <p className=' text-gray-500'> 6-hour drive </p>
        </div>
      </div>


      <div className=' w-64 h-20 flex items-center px-3 py-2 hover:bg-slate-200 rounded-2xl  hover:scale-105 transition duration-200 ease-out'>
        <div className='img h-full w-20'>
            <Image src={Hove} className=' h-full w-full' />
        </div>
        <div className=' pl-6'>
            <h3> Hove </h3>
            <p className=' text-gray-500'> 2-hour drive </p>
        </div>
      </div>
      </div>




          
        <h1 className='font-bold text-3xl py-6'>Live Anywhere</h1>
        <div className='flex space-x-3'>
            <div className=' h-72 w-72 cursor-pointer  hover:bg-slate-200 rounded-2xl  hover:scale-105 transition duration-200 ease-out'>
                <Image src={Outdoor} className='rounded-2xl' />
                <h3 className=' my-4  font-thin text-2xl text-black'> Outdoor Gates </h3>
            </div>

            <div className=' h-72 w-72 cursor-pointer  hover:bg-slate-200 rounded-2xl  hover:scale-105 transition duration-200 ease-out '>
                <Image src={Unique} className='rounded-2xl' />
                <h3 className=' my-4  font-thin text-2xl text-black'> Unique Stays </h3>
            </div>

            <div className=' h-72 w-72 cursor-pointer  hover:bg-slate-200 rounded-2xl  hover:scale-105 transition duration-200 ease-out '>
                <Image src={Entire} className='rounded-2xl' />
                <h3 className=' my-4  font-thin text-2xl text-black'> Entire Homes </h3>
            </div>

            <div className=' h-72 w-72 cursor-pointer  hover:bg-slate-200 rounded-2xl  hover:scale-105 transition duration-200 ease-out '>
                <Image src={Pet} className='rounded-2xl' />
                <h3 className=' my-4  font-thin text-2xl text-black'> Pet Allowed </h3>
            </div>

        </div>

        <div className=' cursor-pointer h-96 my-20 great rounded-2xl bg-cover ' style={{background:`url(${Greatest.src})`}}>
           <div className=' mx-12 py-10'>
           
            <h1 className=' font-medium text-3xl'>The Greatest </h1>
            <h2 className='font-medium text-3xl'>Outdoors</h2>
            <p className=' my-4'>Wishlist curated by airbnb</p>
            <button className=' bg-slate-900 rounded-md text-white px-3 py-1 hover:scale-105 transition duration-200 ease-out'> Get Inspired </button>
            
           </div>            
        </div>

    </div>
  )
}
