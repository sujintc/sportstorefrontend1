import React from 'react'
import BannerCard from '../shared/BannerCard'

export const Banner = () => {
    return (
        <div className=' bg-white-100 px-4 lg:px-24 flex items-center'>
            <div className='flex flex-col md:flex-row-reverse justify-between items-center gap-12 py-40'>
                {/* right side */}
                <div className='md:w-1/2 h-full'>
                    <BannerCard />
                </div>

                {/* left side */}
                <div className='md:w-1/2 space-y-8 bg-white-100'>
                    <h1 className='lg:text-6xl text-5xl font-bold text-black mb-5 lg:leading-tight leading-snug'>Buy and sell Bats <span className='text-black-700'>for the best prices</span></h1>
                    <p> Keep track of the bats you need. Be part of the world's largest community of sport lovers .</p>
                    <div>
                        <input type="search" placeholder='Search a bat here' className='py-2 px-2 rounded-s-sm' />
                        <button className='bg-blue-700 px-6 py-2 text-white font-medium hover:bg-black transition-all ease-in duration-200'>Search</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
