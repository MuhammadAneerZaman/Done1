import React from 'react'
import Image from 'next/image'
import Outdoor from '../../../public/Outdoor.webp'
import Unique from '../../../public/Unique.webp'
import Pet from '../../../public/Pet.webp'
import Entire from '../../../public/Entire.webp'
import Greatest from '../../../public/Greatest.webp'

export default function Main1() {
  return (
    
        <div>
           <h1 className='font-bold text-3xl py-6 mx-11 '>Live Anywhere</h1>
                <div className='flex p-2 mx-20 flex-nowrap overflow-x-auto scrollbar-hide'>
                    <div className='relative h-25 w-25 p-2 cursor-pointer hover:scale-105 transition duration-200"'>
                        <Image src={Outdoor} className='  w-80 h-80 rounded-xl bg-cover' />
                        <h3 className=' py-2 text-2xl'>Outdoor getaways</h3>
                    </div>

                    <div className='relative h-25 w-25 p-2 cursor-pointer hover:scale-105 transition duration-200"'>
                        <Image src={Unique} className='  w-80 h-80 rounded-xl bg-cover' />
                        <h3 className=' py-2 text-2xl'>Unique Stays</h3>
                    </div>

                    <div className='relative h-25 w-25 p-2 cursor-pointer hover:scale-105 transition duration-200"'>
                        <Image src={Entire} className='  w-80 h-80 rounded-xl bg-cover' />
                        <h3 className=' py-2 text-2xl'>Entire Homes</h3>
                    </div>

                    <div className='relative h-25 w-25 p-2 cursor-pointer hover:scale-105 transition duration-200"'>
                        <Image src={Pet} className='  w-80 h-80 rounded-xl bg-cover' />
                        <h3 className=' py-2 text-2xl'>Pet Allowed</h3>
                    </div>
                </div>

                




        </div>           
          

  )
}
