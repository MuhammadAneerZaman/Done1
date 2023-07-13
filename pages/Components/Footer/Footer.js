import React from 'react'

export default function Footer() {
  return (
    <div className=' h-96 w-full bg-slate-100'>
      <div className=' mx-44 py-14 flex space-x-16'>
        <div>
            <ul className= 'list-none'>
                <li><h1 className=' font-bold'>Support</h1></li>
                <li className=' my-2'>Help Center</li>
                <li className='my-2'>Saftey Information</li>
                <li className='my-2'>Cancellation Options</li>
                <li className='my-2'>Our Covid-19 Response</li>
                <li>Supporting People with disabilities</li>
            </ul>
        </div>

        <div>
            <ul className= 'list-none'>
                <li><h1 className=' font-bold'>Hosting</h1></li>
                <li className=' my-2'>Try Hosting</li>
                <li className='my-2'>AirCover: Protection for hosts</li>
                <li className='my-2'>Explore Hosting resources</li>
                <li className='my-2'>Visit our community forum</li>
                <li>How to host responsibly</li>
            </ul>
        </div>

        <div>
            <ul className= 'list-none'>
                <li><h1 className=' font-bold'>community</h1></li>
                <li className=' my-2'>Airbnd.org: disaster relieft housing</li>
                <li className='my-2'>Support Afghan refugdes</li>
                <li className='my-2'>Celeberating diversity and belonging</li>
                <li className='my-2'>Combating discrimination</li>
            </ul>
        </div>

        <div>
            <ul className= 'list-none'>
                <li><h1 className=' font-bold'>About</h1></li>
                <li className=' my-2'>How Airbnb works</li>
                <li className='my-2'>Newsroom</li>
                <li className='my-2'>Investors</li>
                <li className='my-2'>Airbnb Plus</li>
                <li>Airbnd Luxe</li>
            </ul>
        </div>

      </div>

    </div>
  )
}
